
import React from 'react';

interface ServiziHeroProps {
  onSectionClick: (sectionId: string) => void;
}

const ServiziHero = ({ onSectionClick }: ServiziHeroProps) => {
  return (
    <section className="py-28 bg-gradient-to-r from-toro-dark to-toro-dark-light text-white">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 mt-8">I Nostri Servizi</h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Offriamo una gamma completa di servizi di consulenza finanziaria indipendente, 
          studiati per supportarti in ogni aspetto della tua vita finanziaria.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button onClick={() => onSectionClick('pianificazione')} className="px-6 py-3 bg-white/10 hover:bg-toro-gold/80 rounded-full transition-colors">
            Pianificazione
          </button>
          <button onClick={() => onSectionClick('gestione')} className="px-6 py-3 bg-white/10 hover:bg-toro-gold/80 rounded-full transition-colors">
            Gestione
          </button>
          <button onClick={() => onSectionClick('oro')} className="px-6 py-3 bg-white/10 hover:bg-toro-gold/80 rounded-full transition-colors">
            Oro
          </button>
          <button onClick={() => onSectionClick('crypto')} className="px-6 py-3 bg-white/10 hover:bg-toro-gold/80 rounded-full transition-colors">
            Crypto
          </button>
          <button onClick={() => onSectionClick('educazione')} className="px-6 py-3 bg-white/10 hover:bg-toro-gold/80 rounded-full transition-colors">
            Educazione
          </button>
          <button onClick={() => onSectionClick('fee')} className="px-6 py-3 bg-white/10 hover:bg-toro-gold/80 rounded-full transition-colors">
            Fee
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiziHero;
