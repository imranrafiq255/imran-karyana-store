import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const { name, phone, email, subject, message } = await req.json()
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'mohammedimranrafique@gmail.com',
        pass: process.env.EMAIL_PASS,
      },
    })

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.1);">
        <div style="background:linear-gradient(135deg,#0f5c2e,#1a8a47);padding:30px;text-align:center;">
          <div style="width:60px;height:60px;background:#f0c040;border-radius:12px;display:inline-block;line-height:60px;font-size:22px;font-weight:900;color:#083d1e;margin-bottom:12px;">IK</div>
          <h1 style="color:white;margin:0;font-size:22px;">New Contact Message</h1>
          <p style="color:rgba(255,255,255,0.8);margin:4px 0 0;font-size:13px;">Imran Karyana Store Website</p>
        </div>
        <div style="padding:30px;">
          <p><strong style="color:#0f5c2e;">Name:</strong> ${name}</p>
          <p><strong style="color:#0f5c2e;">Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong style="color:#0f5c2e;">Email:</strong> ${email}</p>
          <p><strong style="color:#0f5c2e;">Subject:</strong> ${subject || 'General Inquiry'}</p>
          <div style="background:#fdf6e3;border-left:4px solid #0f5c2e;border-radius:8px;padding:16px;margin-top:16px;">
            <strong style="color:#0f5c2e;">Message:</strong>
            <p style="color:#444;margin:8px 0 0;line-height:1.6;">${message}</p>
          </div>
          <div style="margin-top:24px;text-align:center;">
            <a href="mailto:${email}" style="background:linear-gradient(135deg,#0f5c2e,#1a8a47);color:white;padding:12px 28px;border-radius:50px;text-decoration:none;font-weight:700;">Reply to ${name}</a>
          </div>
        </div>
        <div style="background:#f8f8f8;padding:14px;text-align:center;border-top:1px solid #eee;">
          <p style="color:#999;font-size:12px;margin:0;">Imran Karyana Store, Bahawalpur — Built with ❤️ by Imran Malik</p>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: `"IKS Website" <${process.env.EMAIL_USER || 'mohammedimranrafique@gmail.com'}>`,
      to: 'mohammedimranrafique@gmail.com',
      replyTo: email,
      subject: `📬 ${subject || 'New Message'} — from ${name}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Email error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
