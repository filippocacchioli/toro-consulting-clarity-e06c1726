
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "TORO Consulting mi ha aiutato a costruire un portafoglio che rispecchia i miei obiettivi a lungo termine. La trasparenza sulle fee e l'educazione continua che ricevo sono elementi che mi hanno fatto capire la differenza con altri consulenti che avevo in passato.",
      name: "Marco B.",
      role: "Imprenditore",
      rating: 5
    },
    {
      text: "La consulenza indipendente offerta da TORO ha cambiato completamente la mia visione degli investimenti. Ho finalmente un piano chiaro per la mia pensione e sto risparmiando migliaia di euro in commissioni.",
      name: "Giulia T.",
      role: "Professionista",
      rating: 5
    },
    {
      text: "Ho particolarmente apprezzato l'approccio educativo. Ogni decisione viene spiegata in modo chiaro e comprensibile, senza gergo tecnico eccessivo. Mi sento finalmente in controllo delle mie finanze.",
      name: "Alessandro M.",
      role: "Medico",
      rating: 5
    }
  ];

  const renderStars = (count: number) => {
    return Array(count).fill(0).map((_, i) => (
      <Star key={i} className="h-5 w-5 text-toro-gold fill-toro-gold" />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Cosa Dicono i Nostri Clienti</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            La nostra missione è aiutare i nostri clienti a raggiungere i loro obiettivi finanziari con chiarezza e fiducia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-toro-dark text-white flex items-center justify-center font-serif text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-toro-dark">{testimonial.name}</h4>
                  <p className="text-toro-gray text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="/testimonial" className="btn-outline">
            Leggi tutte le testimonianze
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
