/**
 * Ms Bee website → Google Sheet.
 *
 * Paste this into the sheet's Extensions → Apps Script editor and deploy it as a
 * web app (see README "Contact form"). The website's /api/contact route POSTs each
 * registration here as JSON, and this appends it as a new row on the
 * "Registrations" tab.
 *
 * Set a Script Property named SECRET (Project Settings → Script Properties) to the
 * same value as GOOGLE_SHEETS_WEBHOOK_SECRET on Vercel, so only the website can add rows.
 */

var SHEET_NAME = "Registrations";
var TIME_ZONE = "Africa/Addis_Ababa";
var HEADERS = ["Date", "Parent name", "Email", "Phone", "Program", "Child's age", "Message", "Status"];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var secret = PropertiesService.getScriptProperties().getProperty("SECRET");
    if (!secret || data.secret !== secret) return reply({ ok: false, error: "unauthorized" });

    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
      // Keep the header row up to date (also fixes sheets made with an older version).
      // Row 1 is only rewritten when it is an old header ("Received"); if it holds a
      // registration (e.g. the header was deleted), a new header row is inserted above it.
      var first = sheet.getLastRow() === 0 ? "" : String(sheet.getRange(1, 1).getValue());
      if (sheet.getLastRow() > 0 && first !== "Received" && first !== "Date") sheet.insertRowBefore(1);
      var header = sheet.getRange(1, 1, 1, HEADERS.length);
      if (header.getValues()[0].join() !== HEADERS.join()) {
        header.setValues([HEADERS]).setFontWeight("bold");
        sheet.setFrozenRows(1);
      }
      sheet.appendRow([
        Utilities.formatDate(new Date(), TIME_ZONE, "yyyy-MM-dd HH:mm"),
        clean(data.parentName),
        clean(data.email),
        clean(data.phone),
        clean(data.program),
        clean(data.childAge),
        clean(data.message),
        "New",
      ]);
    } finally {
      lock.releaseLock();
    }
    return reply({ ok: true });
  } catch (err) {
    return reply({ ok: false, error: String(err) });
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
