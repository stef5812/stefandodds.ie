import { sendContactEmail } from "../services/mail.service.js";

function isEmail(s = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).trim());
}

export async function handleContact(req, res) {
  const body = req.body || {};
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();

  // Validation
  if (name.length < 2) return res.status(400).json({ error: "Name is required." });
  if (!isEmail(email)) return res.status(400).json({ error: "Valid email is required." });
  if (message.length < 10)
    return res.status(400).json({ error: "Message must be at least 10 characters." });

  // Never fail the endpoint because of email issues
  try {
    await sendContactEmail({ name, email, message });
  } catch (err) {
    console.error("❌ sendContactEmail threw unexpectedly:", err);
  }

  return res.json({ ok: true });
}
