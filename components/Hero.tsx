
import React from 'react';
import Logo from './Logo';

interface HeroProps {
  onProjectsClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onProjectsClick }) => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Background layers — desktop. All skewed -15deg with same vertical extent → edges stay aligned at every y */}
      <div className="absolute inset-0 z-0 hidden md:block overflow-hidden bg-white">
        {/* Gray + image area (right of dark stripe) */}
        <div className="absolute -inset-y-32 -right-32 left-[58%] translate-x-14 bg-slate-50 skew-x-[-15deg] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
            alt="Fundo Industrial ACSI"
            className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale skew-x-[15deg] scale-125"
          />
        </div>
        {/* Red thick stripe — z above bg */}
        <div className="absolute -inset-y-32 left-[58%] w-16 -translate-x-8 bg-[#A32A26] skew-x-[-15deg] z-20 shadow-2xl"></div>
        {/* Dark thin stripe — right edge touches gray bg */}
        <div className="absolute -inset-y-32 left-[58%] w-4 translate-x-10 bg-[#5e1816] skew-x-[-15deg] z-20"></div>
      </div>

      {/* Mobile background */}
      <div className="absolute inset-0 z-0 md:hidden">
        <div className="relative w-full h-full bg-slate-50">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000"
            alt="Fundo Industrial ACSI"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 pt-10 md:pt-0">
          <div className="flex flex-col items-start mb-8">
            <Logo size="xl" className="items-start" />
          </div>
          <div className="h-1.5 w-32 bg-[#A32A26] mb-8"></div>
          
          <div className="flex flex-wrap items-center gap-6 mb-4">
             <button 
                onClick={onProjectsClick}
                className="bg-slate-100 px-4 py-2 border-l-4 border-[#A32A26] hover:bg-slate-200 transition-colors shadow-sm"
             >
                <span className="text-2xl font-black text-[#A32A26]">100+</span>
                <span className="ml-2 text-xs font-bold text-slate-500 uppercase">Projetos Concluídos</span>
             </button>
             <h2 className="text-lg md:text-xl font-medium text-slate-600">Soluções Industriais</h2>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#2D3E50] leading-tight mb-8">
            Eficiência e precisão para a indústria do amanhã
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToServices}
              className="bg-[#A32A26] hover:bg-[#85211e] text-white px-10 py-5 rounded-sm font-black text-lg transition-all shadow-xl shadow-red-900/20 uppercase tracking-widest"
            >
              CONHEÇA MAIS
            </button>
            <button
              onClick={onProjectsClick}
              className="bg-white border-2 border-[#2D3E50] text-[#2D3E50] hover:bg-[#2D3E50] hover:text-white px-8 py-5 rounded-sm font-black text-lg transition-all shadow-lg uppercase tracking-widest"
            >
              VER PORTFÓLIO
            </button>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
           <div className="bg-[#A32A26] p-12 shadow-2xl relative rounded-sm">
              <div className="absolute -top-4 -left-4 w-8 h-8 grid grid-cols-2 gap-1">
                 {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-slate-300 rounded-full"></div>)}
              </div>
              <h3 className="text-white text-3xl font-bold mb-4 uppercase">ACSI INDUSTRIAL LTDA.</h3>
              <p className="text-red-100 text-lg font-light leading-relaxed">
                Transformamos ideias em soluções industriais inteligentes e eficazes, com foco em eficiência, qualidade e cumprimento de prazos.
              </p>
              <div className="mt-8 flex gap-4">
                 <div className="w-12 h-1 bg-white/20"></div>
                 <div className="w-12 h-1 bg-white/50"></div>
                 <div className="w-12 h-1 bg-white"></div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
