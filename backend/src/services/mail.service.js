import nodemailer from "nodemailer";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  CONTACT_TO, // where you receive messages
  CONTACT_FROM, // from address
} = process.env;

export async function sendContactEmail({ name, email, message }) {
  // If SMTP not configured, just log (so dev still works)
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    console.warn("⚠️ SMTP not configured. Logging message instead:\n", { name, email, message });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465, // true for 465, false for 587
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const subject = `New Contact Form Message | ${name} | stefandodds.ie`;;
  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

  await transporter.sendMail({
    from: CONTACT_FROM || SMTP_USER,
    to: CONTACT_TO,
    replyTo: email,
    subject,
    text,
  });
}
