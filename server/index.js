require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();

const PORT = process.env.PORT || 4000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin: FRONTEND_ORIGIN,
  }),
);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ ok: false, error: "Missing name, email, or message." });
  }

  if (!process.env.RESEND_API_KEY || !process.env.MAIL_TO) {
    return res
      .status(500)
      .json({ ok: false, error: "Email service is not fully configured. Missing API key or MAIL_TO." });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const to = process.env.MAIL_TO;
    const from = process.env.MAIL_FROM || "onboarding@resend.dev";

    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p>${String(message).replace(/\n/g, "<br/>")}</p>`,
    });

    if (error) {
      // eslint-disable-next-line no-console
      console.error("Resend API error:", error);
      return res.status(500).json({ ok: false, error: "Failed to send email." });
    }

    return res.json({ ok: true });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error sending contact email:", error);
    return res.status(500).json({
      ok: false,
      error: "Failed to send email. Please try again later.",
    });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Contact API listening on http://localhost:${PORT}`);
});
