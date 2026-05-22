import React, { useState } from 'react';

const API_ENDPOINT = "https://api.acsiindustrial.com/send";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setError(null);
    setSending(true);

    try {
      const res = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || 'Falha no envio.');
      }
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 8000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao enviar.');
    } finally {
      setSending(false);
    }
  };

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>, phoneNumber: string) => {
    e.preventDefault();
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.location.href = `tel:+${phoneNumber}`;
    } else {
      window.open(`https://wa.me/${phoneNumber}`, '_blank');
    }
  };

  const callEmergency = () => {
    window.open("https://wa.me/5541988339333", "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[#A32A26] font-bold tracking-widest uppercase text-sm mb-3">Nossos Contatos</h2>
            <h3 className="text-4xl font-extrabold text-[#2D3E50] mb-8">Fale Conosco</h3>
            
            <div className="grid grid-cols-1 gap-8">
              <div className="p-6 bg-slate-50 rounded-lg">
                <h4 className="text-lg font-bold text-[#A32A26] mb-4 uppercase tracking-tighter">Henri Udo</h4>
                <div className="space-y-3 text-sm">
                  <a
                    href="tel:+5541988339333"
                    onClick={(e) => handlePhoneClick(e, "5541988339333")}
                    className="flex items-center gap-3 text-slate-600 hover:text-[#A32A26] transition-colors"
                  >
                    <i className="fa-solid fa-phone"></i> (41) 98833-9333
                  </a>
                  <a href="mailto:henri@acsiind.onmicrosoft.com" className="flex items-center gap-3 text-slate-600 break-all hover:text-[#A32A26] transition-colors">
                    <i className="fa-solid fa-envelope"></i> henri@acsiind.onmicrosoft.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-[#2D3E50] rounded-sm text-white border-l-8 border-[#A32A26] shadow-xl">
              <h4 className="text-xl font-bold mb-4 italic">Por que escolher a ACSI?</h4>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex gap-2"><i className="fa-solid fa-check text-[#A32A26]"></i> Atendimento técnico e próximo</li>
                <li className="flex gap-2"><i className="fa-solid fa-check text-[#A32A26]"></i> Compromisso com resultados reais</li>
                <li className="flex gap-2"><i className="fa-solid fa-check text-[#A32A26]"></i> Experiência aliada à inovação</li>
                <li className="flex gap-2"><i className="fa-solid fa-check text-[#A32A26]"></i> Gestão eficiente de projetos</li>
              </ul>
              <button 
                onClick={callEmergency}
                className="mt-8 bg-[#A32A26] hover:bg-[#85211e] px-6 py-4 rounded-sm font-black transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/40 uppercase tracking-widest text-xs w-full sm:w-auto"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i> Chamar Equipe de Resposta
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-2xl border border-slate-100">
            <h4 className="text-2xl font-bold text-[#2D3E50] mb-6 uppercase tracking-tighter">Solicite um Orçamento</h4>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded text-center">
                <i className="fa-solid fa-circle-check text-4xl mb-4"></i>
                <h5 className="text-xl font-bold">Mensagem enviada!</h5>
                <p>Em breve nossa equipe entrará em contato.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase mb-2">Nome Completo</label>
                    <input 
                      required 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:outline-none focus:border-[#A32A26] transition-colors" 
                      placeholder="Ex: João Silva" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase mb-2">E-mail Corporativo</label>
                    <input 
                      required 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:outline-none focus:border-[#A32A26] transition-colors" 
                      placeholder="exemplo@empresa.com" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase mb-2">Assunto</label>
                  <select 
                    required 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:outline-none focus:border-[#A32A26] transition-colors"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="Laudo Técnico">Laudo Técnico</option>
                    <option value="Projeto de Dispositivo">Projeto de Dispositivo</option>
                    <option value="Manutenção Industrial">Manutenção Industrial</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-500 uppercase mb-2">Mensagem</label>
                  <textarea 
                    required 
                    rows={4} 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-slate-200 focus:outline-none focus:border-[#A32A26] transition-colors" 
                    placeholder="Descreva brevemente suas necessidades..."
                  ></textarea>
                </div>
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded text-sm">
                    <i className="fa-solid fa-triangle-exclamation mr-2"></i>{error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-[#A32A26] hover:bg-[#85211e] disabled:opacity-60 disabled:cursor-not-allowed text-white font-black py-5 rounded-sm shadow-xl transition-all tracking-widest text-sm uppercase"
                >
                  {sending ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
