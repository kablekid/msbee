import { NextResponse } from "next/server";
import { site } from "@/lib/data";
import { programOptions, validateContact, type ContactPayload } from "@/lib/validation";

const UNAVAILABLE = `Sorry, we couldn't send your form just now. Please call or WhatsApp us on ${site.phones[0].display} and we'll register you right away.`;

// Sends a registration to the Google Sheet's Apps Script web app (scripts/google-sheets/Code.gs).
async function saveToSheet(url: string, secret: string, fields: ContactPayload) {
  const program = programOptions.find((p) => p.value === fields.program)?.label ?? fields.program;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...fields, program, secret }),
    signal: AbortSignal.timeout(15000),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok || !data?.ok) throw new Error(`Sheet rejected the row: ${res.status} ${data?.error ?? ""}`);
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const fields: ContactPayload = {
    parentName: String(body.parentName ?? "").trim(),
    email: String(body.email ?? "").trim(),
    phone: String(body.phone ?? "").trim(),
    program: String(body.program ?? ""),
    childAge: String(body.childAge ?? "").trim(),
    message: String(body.message ?? "").trim(),
  };

  const errors = validateContact(fields);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const url = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const secret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET;

  if (!url || !secret) {
    // Never tell a parent "thanks" when nothing was saved, except in local development.
    if (process.env.NODE_ENV === "production") {
      console.error("[contact] GOOGLE_SHEETS_WEBHOOK_URL / _SECRET not set; registration NOT saved:", fields);
      return NextResponse.json({ ok: false, error: UNAVAILABLE }, { status: 503 });
    }
    console.log("[contact] (dev, sheet not configured) New inquiry:", fields);
  } else {
    try {
      await saveToSheet(url, secret, fields);
    } catch (err) {
      console.error("[contact] Failed to save registration to Google Sheet:", err, fields);
      return NextResponse.json({ ok: false, error: UNAVAILABLE }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true, message: "Thanks! We'll be in touch within one business day." });
}
