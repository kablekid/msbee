"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { useState } from "react";
import { programOptions, validateContact, type ContactPayload } from "@/lib/validation";

const empty: ContactPayload = { parentName: "", email: "", phone: "", program: "", childAge: "", message: "" };

function FieldError({ field, errors }: { field: keyof ContactPayload; errors: Partial<Record<keyof ContactPayload, string>> }) {
  return (
    <AnimatePresence>
      {errors[field] && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-1 text-sm font-semibold text-berry-500"
          id={`${field}-error`}
        >
          {errors[field]}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export default function ContactForm({ defaultProgram = "" }: { defaultProgram?: string }) {
  const [values, setValues] = useState<ContactPayload>({
    ...empty,
    program: programOptions.some((p) => p.value === defaultProgram) ? defaultProgram : "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const update = (field: keyof ContactPayload) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validateContact(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        setServerMessage(data.error ?? "Please check the form and try again.");
        setStatus("error");
        return;
      }
      setServerMessage(data.message);
      setStatus("success");
      setValues(empty);
    } catch {
      setServerMessage("Something went wrong. Please call us or try again.");
      setStatus("error");
    }
  }

  const inputCls = (field: keyof ContactPayload) =>
    `w-full rounded-2xl border-2 bg-honey-50/50 px-4 py-3 outline-none transition focus:bg-white focus:ring-4 ${
      errors[field] ? "border-berry-500 focus:ring-berry-500/20" : "border-honey-100 focus:border-honey-400 focus:ring-honey-400/25"
    }`;

  return (
    <div className="relative rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-honey-100 sm:p-10">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
          >
            <motion.div initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", delay: 0.1 }}>
              <CheckCircle2 className="h-20 w-20 text-leaf-500" />
            </motion.div>
            <h3 className="mt-5 text-3xl font-semibold">Message sent!</h3>
            <p className="mt-3 max-w-sm text-hive-700">{serverMessage}</p>
            <button onClick={() => setStatus("idle")} className="mt-8 rounded-full bg-honey-100 px-6 py-3 font-bold text-honey-700 hover:bg-honey-200">
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="parentName" className="mb-1.5 block font-bold">Parent / guardian name *</label>
              <input id="parentName" className={inputCls("parentName")} value={values.parentName} onChange={update("parentName")} autoComplete="name" aria-invalid={!!errors.parentName} aria-describedby="parentName-error" />
              <FieldError errors={errors} field="parentName" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block font-bold">Email *</label>
              <input id="email" type="email" className={inputCls("email")} value={values.email} onChange={update("email")} autoComplete="email" aria-invalid={!!errors.email} aria-describedby="email-error" />
              <FieldError errors={errors} field="email" />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block font-bold">Phone</label>
              <input id="phone" type="tel" className={inputCls("phone")} value={values.phone} onChange={update("phone")} autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby="phone-error" />
              <FieldError errors={errors} field="phone" />
            </div>
            <div>
              <label htmlFor="childAge" className="mb-1.5 block font-bold">Child&apos;s age / grade</label>
              <input id="childAge" className={inputCls("childAge")} value={values.childAge} onChange={update("childAge")} placeholder="e.g. 4 years, 3rd grade" />
            </div>
            <fieldset className="sm:col-span-2">
              <legend className="mb-2 font-bold">I&apos;m interested in *</legend>
              <div className="flex flex-wrap gap-2">
                {programOptions.map((p) => (
                  <label
                    key={p.value}
                    className={`cursor-pointer rounded-full border-2 px-4 py-2 text-sm font-bold transition ${
                      values.program === p.value ? "border-honey-400 bg-honey-400 text-hive-900" : "border-honey-100 text-hive-700 hover:border-honey-300"
                    }`}
                  >
                    <input type="radio" name="program" value={p.value} checked={values.program === p.value} onChange={update("program")} className="sr-only" />
                    {p.label}
                  </label>
                ))}
              </div>
              <FieldError errors={errors} field="program" />
            </fieldset>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1.5 block font-bold">Message *</label>
              <textarea id="message" rows={5} className={inputCls("message")} value={values.message} onChange={update("message")} placeholder="Tell us about your child and what you're looking for…" aria-invalid={!!errors.message} aria-describedby="message-error" />
              <FieldError errors={errors} field="message" />
            </div>
            {status === "error" && (
              <p className="rounded-2xl bg-berry-500/10 px-4 py-3 font-semibold text-berry-500 sm:col-span-2" role="alert">{serverMessage}</p>
            )}
            <div className="sm:col-span-2">
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-honey-400 px-8 py-4 text-lg font-bold text-hive-900 shadow-lg shadow-honey-400/40 transition hover:bg-honey-300 disabled:opacity-70 sm:w-auto"
              >
                {status === "sending" ? <LoaderCircle className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                {status === "sending" ? "Sending…" : "Send Message"}
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
