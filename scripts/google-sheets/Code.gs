/**
 * Ms Bee website → Google Sheet ("Ms Bee Registrations" template).
 *
 * Paste this into the sheet's Extensions → Apps Script editor and deploy it as a
 * web app (see README "Contact form"). The website's /api/contact route POSTs each
 * registration here as JSON.
 *
 * The script finds the heading row on the "Registrations" tab (the row containing
 * "Parent name"), matches each value to its column by heading, and fills the first
 * empty pre-numbered row below it, leaving the NO. numbers, formatting and Status
 * dropdowns in place. If every numbered row is used, it adds a new numbered row.
 * On a completely empty tab it creates a simple heading row first.
 *
 * Set a Script Property named SECRET (Project Settings → Script Properties) to the
 * same value as GOOGLE_SHEETS_WEBHOOK_SECRET on Vercel, so only the website can add rows.
 */

var SHEET_NAME = "Registrations";
var TIME_ZONE = "Africa/Addis_Ababa";
var DEFAULT_HEADERS = ["NO.", "Received", "Parent name", "Email", "Phone", "Program", "Child's age", "Message", "Status"];

// Which form field goes under which heading (headings are matched ignoring case,
// spaces and punctuation, so "Child's age" matches "childsage").
var FIELDS = {
  received: ["received", "date", "datereceived", "timestamp"],
  parentName: ["parentname", "name", "parent"],
  email: ["email", "emailaddress"],
  phone: ["phone", "phonenumber", "telephone"],
  program: ["program", "programme"],
  childAge: ["childsage", "childage", "age"],
  message: ["message", "notes", "comment"],
  status: ["status"],
  number: ["no", "number", "#"],
};

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var secret = PropertiesService.getScriptProperties().getProperty("SECRET");
    if (!secret || data.secret !== secret) return reply({ ok: false, error: "unauthorized" });

    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      addRegistration(data);
    } finally {
      lock.releaseLock();
    }
    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
  }
}

function addRegistration(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

  var headerRow = findHeaderRow(sheet);
  if (!headerRow) {
    if (sheet.getLastRow() > 0) throw new Error('No heading row with "Parent name" found on ' + SHEET_NAME);
    sheet.getRange(1, 1, 1, DEFAULT_HEADERS.length).setValues([DEFAULT_HEADERS]).setFontWeight("bold");
    sheet.setFrozenRows(1);
    headerRow = 1;
  }

  var lastCol = sheet.getLastColumn();
  var headings = sheet.getRange(headerRow, 1, 1, lastCol).getValues()[0];
  var col = {};
  for (var field in FIELDS) col[field] = findColumn(headings, FIELDS[field]);
  if (!col.parentName) throw new Error('No "Parent name" column');

  var values = {
    received: Utilities.formatDate(new Date(), TIME_ZONE, "yyyy-MM-dd HH:mm"),
    parentName: clean(data.parentName),
    email: clean(data.email),
    phone: clean(data.phone),
    program: clean(data.program),
    childAge: clean(data.childAge),
    message: clean(data.message),
  };

  var row = findEmptyRow(sheet, headerRow, col);
  if (col.number && !sheet.getRange(row, col.number).getValue()) {
    var prev = row > headerRow + 1 ? Number(sheet.getRange(row - 1, col.number).getValue()) : 0;
    sheet.getRange(row, col.number).setValue((prev || 0) + 1);
  }
  for (var key in values) {
    if (col[key]) sheet.getRange(row, col[key]).setValue(values[key]);
  }
  if (col.status) setStatus(sheet.getRange(row, col.status), "New");
}

// The heading row is the first row (within the top 30) that has a "Parent name" heading.
function findHeaderRow(sheet) {
  var rows = Math.min(sheet.getLastRow(), 30);
  if (rows === 0) return 0;
  var grid = sheet.getRange(1, 1, rows, Math.max(sheet.getLastColumn(), 1)).getValues();
  for (var r = 0; r < grid.length; r++) {
    if (findColumn(grid[r], FIELDS.parentName.slice(0, 1))) return r + 1;
  }
  return 0;
}

function findColumn(headings, names) {
  for (var c = 0; c < headings.length; c++) {
    var h = String(headings[c]).toLowerCase().replace(/[^a-z0-9#]/g, "");
    if (h && names.indexOf(h) !== -1) return c + 1;
  }
  return 0;
}

// First row under the headings whose name, email and phone cells are all empty.
// Pre-filled NO. numbers and Status dropdowns don't count as "used".
function findEmptyRow(sheet, headerRow, col) {
  var first = headerRow + 1;
  var last = Math.max(sheet.getLastRow(), first);
  var check = [col.parentName, col.email, col.phone, col.received].filter(function (c) { return c; });
  for (var r = first; r <= last; r++) {
    var used = check.some(function (c) { return String(sheet.getRange(r, c).getValue()).trim() !== ""; });
    if (!used) return r;
  }
  // Every row is used: add one, copying the formatting and dropdowns of the row above.
  var newRow = last + 1;
  sheet.insertRowAfter(last);
  sheet.getRange(last, 1, 1, sheet.getLastColumn()).copyTo(sheet.getRange(newRow, 1, 1, sheet.getLastColumn()), SpreadsheetApp.CopyPasteType.PASTE_FORMAT, false);
  sheet.getRange(last, 1, 1, sheet.getLastColumn()).copyTo(sheet.getRange(newRow, 1, 1, sheet.getLastColumn()), SpreadsheetApp.CopyPasteType.PASTE_DATA_VALIDATION, false);
  return newRow;
}

// Use the dropdown's own spelling of "New" if it has one; otherwise leave the cell for staff.
function setStatus(cell, wanted) {
  var rule = cell.getDataValidation();
  if (!rule) return cell.setValue(wanted);
  if (rule.getCriteriaType() !== SpreadsheetApp.DataValidationCriteria.VALUE_IN_LIST) return;
  var options = rule.getCriteriaValues()[0] || [];
  for (var i = 0; i < options.length; i++) {
    if (String(options[i]).toLowerCase().indexOf(wanted.toLowerCase()) !== -1) return cell.setValue(options[i]);
  }
}

// Stop text typed into the form from being treated as a spreadsheet formula.
function clean(value) {
  var s = String(value == null ? "" : value).slice(0, 5000);
  return /^[=+\-@\t\r]/.test(s) ? "'" + s : s;
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
