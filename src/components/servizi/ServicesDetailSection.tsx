
import React from 'react';
import { TrendingUp, LineChart, BookOpen, Bitcoin } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesDetailSection = () => {
  const services = [
    {
      icon: <TrendingUp className="h-16 w-16 text-toro-gold" />,
      title: "Pianificazione Patrimoniale",
      description: "Sviluppiamo strategie personalizzate per gestire e accrescere il tuo patrimonio nel lungo termine, tenendo conto dei tuoi obiettivi di vita, della tua tolleranza al rischio e del tuo orizzonte temporale.",
      benefits: [
        "Analisi approfondita della situazione finanziaria attuale",
        "Definizione degli obiettivi a breve, medio e lungo termine",
        "Strategie di risparmio e investimento personalizzate",
        "Pianificazione successoria e protezione patrimoniale",
        "Aggiornamenti regolari e revisione degli obiettivi"
      ],
      link: "/servizi/pianificazione-patrimoniale",
      id: "pianificazione"
    },
    {
      icon: <LineChart className="h-16 w-16 text-toro-gold" />,
      title: "Gestione Portafogli",
      description: "Ottimizziamo il tuo portafoglio con un approccio evidence-based e una diversificazione efficace, massimizzando i rendimenti in relazione al rischio e minimizzando i costi.",
      benefits: [
        "Asset allocation strategica basata sulla moderna teoria di portafoglio",
        "Diversificazione ottimale tra classi di attività, settori e aree geografiche",
        "Selezione di ETF e fondi a basso costo",
        "Minimizzazione dell'impatto fiscale",
        "Reportistica trasparente e monitoraggio continuo"
      ],
      link: "/servizi/gestione-portafogli",
      id: "gestione"
    },
    {
      icon: (
        <svg className="h-16 w-16 text-toro-gold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="6" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
          <rect x="6" y="9" width="4" height="6" rx="1" fill="currentColor" />
          <rect x="14" y="9" width="4" height="6" rx="1" fill="currentColor" />
        </svg>
      ),
      title: "Investimento in Oro",
      description: "Ti guidiamo nell'acquisto, custodia e gestione fiscale dell'oro fisico come riserva di valore e protezione contro l'inflazione.",
      benefits: [
        "Analisi sulla corretta allocazione dell'oro nel portafoglio",
        "Consulenza sull'acquisto di oro fisico vs strumenti finanziari",
        "Assistenza nella scelta dei fornitori più affidabili",
        "Soluzioni per la custodia sicura e l'assicurazione",
        "Ottimizzazione fiscale per gli investimenti in metalli preziosi"
      ],
      link: "/servizi/investimento-oro",
      id: "oro"
    },
    {
      icon: <Bitcoin className="h-16 w-16 text-toro-gold" />,
      title: "Crypto e Asset Digitali",
      description: "Consulenza specializzata su Bitcoin e asset digitali, dalle basi alla self-custody avanzata, per integrare responsabilmente questa nuova classe di attività nel tuo portafoglio.",
      benefits: [
        "Educazione sui fondamentali di blockchain e criptovalute",
        "Strategie di posizionamento di Bitcoin nel portafoglio",
        "Consulenza su wallet e self-custody sicura",
        "Gestione fiscale compliant delle criptovalute",
        "Analisi delle opportunità nel web3 e DeFi"
      ],
      link: "/servizi/crypto-asset-digitali",
      id: "crypto"
    },
    {
      icon: <BookOpen className="h-16 w-16 text-toro-gold" />,
      title: "Educazione & Coaching Finanziaria",
      description: "Webinar, corsi e toolkit su misura per aumentare la tua competenza finanziaria e renderti un investitore più consapevole e autonomo.",
      benefits: [
        "Webinar mensili su temi di investimento e finanza personale",
        "Percorsi di coaching personalizzati one-to-one",
        "Materiali didattici esclusivi e toolkit pratici",
        "Workshop interattivi per piccoli gruppi",
        "Aggiornamenti regolari sulle novità dei mercati finanziari"
      ],
      link: "/servizi/educazione-coaching",
      id: "educazione"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title text-center mb-16">Servizi Dettagliati</h2>
        
        <div className="space-y-20">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              id={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              link={service.link}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailSection;
