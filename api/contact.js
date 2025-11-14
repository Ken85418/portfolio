import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message, captcha } = req.body;

  // 1) VERIFY CAPTCHA
  const captchaVerify = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET}&response=${captcha}`
    }
  );

  const captchaData = await captchaVerify.json();

  if (!captchaData.success || captchaData.score < 0.5) {
    return res.status(400).json({ error: "Captcha validation failed" });
  }

  // 2) SEND EMAIL WITH RESEND
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Ken Portfolio <onboarding@resend.dev>",
      to: "ken54proweaver@gmail.com",
      subject: "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Email failed to send" });
  }
}
