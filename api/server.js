import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const PORT = process.env.PORT || 3000;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL || 'ACSI Site <onboarding@resend.dev>';
const TO_EMAIL = process.env.TO_EMAIL || 'henri@acsiind.onmicrosoft.com';

if (!RESEND_API_KEY) {
  console.error('RESEND_API_KEY env var is required');
  process.exit(1);
}

const resend = new Resend(RESEND_API_KEY);
const app = express();

app.use(express.json({ limit: '100kb' }));
app.use(cors({
  origin: [
    'https://acsiindustrial.com',
    'https://www.acsiindustrial.com',
    'https://acsiindustrial.com.br',
    'https://www.acsiindustrial.com.br',
    'https://acsi-site.in26g9.easypanel.host',
  ],
  methods: ['POST', 'GET'],
}));

app.get('/health', (_req, res) => res.json({ ok: true }));

app.post('/send', async (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: 'Campos obrigatórios faltando.' });
  }
  if (typeof name !== 'string' || name.length > 200) return res.status(400).json({ ok: false, error: 'Nome inválido.' });
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) {
    return res.status(400).json({ ok: false, error: 'E-mail inválido.' });
  }
  if (typeof subject !== 'string' || subject.length > 200) return res.status(400).json({ ok: false, error: 'Assunto inválido.' });
  if (typeof message !== 'string' || message.length > 5000) return res.status(400).json({ ok: false, error: 'Mensagem inválida.' });

  const safeName = name.replace(/[\r\n]/g, ' ');
  const safeSubject = subject.replace(/[\r\n]/g, ' ');

  const text = [
    `Nome: ${safeName}`,
    `E-mail: ${email}`,
    `Assunto: ${safeSubject}`,
    '',
    'Mensagem:',
    message,
  ].join('\n');

  const html = `<!doctype html><html><body style="font-family:Inter,Arial,sans-serif;color:#2D3E50;max-width:600px;margin:0 auto;padding:24px">
    <h2 style="color:#A32A26;margin:0 0 16px">Novo contato pelo site ACSI</h2>
    <table style="width:100%;border-collapse:collapse">
      <tr><td style="padding:8px;background:#f8fafc;width:120px"><b>Nome</b></td><td style="padding:8px">${escapeHtml(safeName)}</td></tr>
      <tr><td style="padding:8px;background:#f8fafc"><b>E-mail</b></td><td style="padding:8px"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding:8px;background:#f8fafc"><b>Assunto</b></td><td style="padding:8px">${escapeHtml(safeSubject)}</td></tr>
    </table>
    <h3 style="margin:24px 0 8px">Mensagem</h3>
    <div style="white-space:pre-wrap;background:#f8fafc;padding:16px;border-left:4px solid #A32A26">${escapeHtml(message)}</div>
  </body></html>`;

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Site ACSI: ${safeSubject} - ${safeName}`,
      text,
      html,
    });
    if (error) {
      console.error('Resend error', error);
      return res.status(502).json({ ok: false, error: error.message || 'Falha no envio.' });
    }
    return res.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error('Send exception', err);
    return res.status(500).json({ ok: false, error: 'Erro interno.' });
  }
});

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

app.listen(PORT, '0.0.0.0', () => console.log(`API listening on ${PORT}`));
