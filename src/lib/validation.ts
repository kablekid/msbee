export type ContactPayload = {
  parentName: string;
  email: string;
  phone: string;
  program: string;
  childAge: string;
  message: string;
};

export const programOptions = [
  { value: "tutoring", label: "Educational Support / Tutoring" },
  { value: "camp", label: "Summer Camp" },
  { value: "daycare", label: "Daycare" },
  { value: "tour", label: "Schedule a Tour" },
  { value: "other", label: "General Question" },
];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Shared by the contact form (client) and /api/contact (server).
export function validateContact(data: Partial<ContactPayload>) {
  const errors: Partial<Record<keyof ContactPayload, string>> = {};
  if (!data.parentName || data.parentName.trim().length < 2) errors.parentName = "Please enter your name.";
  if (!data.email || !emailRe.test(data.email.trim())) errors.email = "Please enter a valid email.";
  if (data.phone && data.phone.replace(/[^\d]/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
  if (!data.program || !programOptions.some((p) => p.value === data.program)) errors.program = "Please choose a program.";
  if (!data.message || data.message.trim().length < 10) errors.message = "Please tell us a little more (10+ characters).";
  if (data.message && data.message.length > 2000) errors.message = "Message is too long (2000 characters max).";
  return errors;
}
