import { NextResponse } from "next/server";
import { validateContact, type ContactPayload } from "@/lib/validation";

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const fields: Partial<ContactPayload> = {
    parentName: String(body.parentName ?? ""),
    email: String(body.email ?? ""),
    phone: String(body.phone ?? ""),
    program: String(body.program ?? ""),
    childAge: String(body.childAge ?? ""),
    message: String(body.message ?? ""),
  };

  const errors = validateContact(fields);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // TODO: forward to an email service (e.g. Resend, SendGrid) or save to a database.
  console.log("[contact] New inquiry:", { ...fields, receivedAt: new Date().toISOString() });

  return NextResponse.json({ ok: true, message: "Thanks! We'll be in touch within one business day." });
}
