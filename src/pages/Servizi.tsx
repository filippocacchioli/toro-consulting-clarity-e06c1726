
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { TrendingUp, Landmark, Coins, LineChart, BookOpen, Clock, Target, ChartBar, Wallet, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Servizi = () => {
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
      link: "/servizi/pianificazione-patrimoniale"
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
      link: "/servizi/gestione-portafogli"
    },
    {
      icon: <Landmark className="h-16 w-16 text-toro-gold" />,
      title: "Investimento in Oro",
      description: "Ti guidiamo nell'acquisto, custodia e gestione fiscale dell'oro fisico come riserva di valore e protezione contro l'inflazione.",
      benefits: [
        "Analisi sulla corretta allocazione dell'oro nel portafoglio",
        "Consulenza sull'acquisto di oro fisico vs strumenti finanziari",
        "Assistenza nella scelta dei fornitori più affidabili",
        "Soluzioni per la custodia sicura e l'assicurazione",
        "Ottimizzazione fiscale per gli investimenti in metalli preziosi"
      ],
      link: "/servizi/investimento-oro"
    },
    {
      icon: <Coins className="h-16 w-16 text-toro-gold" />,
      title: "Crypto e Asset Digitali",
      description: "Consulenza specializzata su Bitcoin e asset digitali, dalle basi alla self-custody avanzata, per integrare responsabilmente questa nuova classe di attività nel tuo portafoglio.",
      benefits: [
        "Educazione sui fondamentali di blockchain e criptovalute",
        "Strategie di posizionamento di Bitcoin nel portafoglio",
        "Consulenza su wallet e self-custody sicura",
        "Gestione fiscale compliant delle criptovalute",
        "Analisi delle opportunità nel web3 e DeFi"
      ],
      link: "/servizi/crypto-asset-digitali"
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
      link: "/servizi/educazione-coaching"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-r from-toro-dark to-toro-dark-light text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">I Nostri Servizi</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Offriamo una gamma completa di servizi di consulenza finanziaria indipendente, 
              studiati per supportarti in ogni aspetto della tua vita finanziaria.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a href="#pianificazione" className="px-6 py-3 bg-white/10 hover:bg-toro-gold/80 rounded-full transition-colors">
                Pianificazione
              </a>
              <a href="#gestione" className="px-6 py-3 bg-white/10 hover:bg-toro-gold/80 rounded-full transition-colors">
                Gestione
              </a>
              <a href="#oro" className="px-6 py-3 bg-white/10 hover:bg-toro-gold/80 rounded-full transition-colors">
                Oro
              </a>
              <a href="#crypto" className="px-6 py-3 bg-white/10 hover:bg-toro-gold/80 rounded-full transition-colors">
                Crypto
              </a>
              <a href="#educazione" className="px-6 py-3 bg-white/10 hover:bg-toro-gold/80 rounded-full transition-colors">
                Educazione
              </a>
              <a href="#fee" className="px-6 py-3 bg-white/10 hover:bg-toro-gold/80 rounded-full transition-colors">
                Fee
              </a>
            </div>
          </div>
        </section>

        {/* Approccio Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Il Nostro Approccio</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Come consulenti finanziari indipendenti, il nostro unico obiettivo è tutelare i tuoi interessi. 
                  Non vendiamo prodotti e non riceviamo commissioni da terze parti.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-toro-gold/10 p-3 rounded-full mr-4">
                      <Target className="h-6 w-6 text-toro-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Orientato ai tuoi obiettivi</h3>
                      <p className="text-gray-600">Ogni piano è costruito intorno alle tue esigenze e ai tuoi sogni.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-toro-gold/10 p-3 rounded-full mr-4">
                      <ChartBar className="h-6 w-6 text-toro-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Basato su evidenze</h3>
                      <p className="text-gray-600">Strategie supportate da ricerca accademica, non da opinioni o mode.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-toro-gold/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-toro-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Orizzonte a lungo termine</h3>
                      <p className="text-gray-600">Costruiamo strategie sostenibili e orientate al lungo periodo.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
                  <Wallet className="h-10 w-10 text-toro-gold mb-4" />
                  <h3 className="text-lg font-medium mb-2">100% Indipendenti</h3>
                  <p className="text-gray-600">Zero conflitti di interesse nella selezione degli investimenti</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
                  <Users className="h-10 w-10 text-toro-gold mb-4" />
                  <h3 className="text-lg font-medium mb-2">Fee-Only</h3>
                  <p className="text-gray-600">Paghi solo per la consulenza, non per la vendita di prodotti</p>
                </div>
                <div className="col-span-2 bg-toro-gold/10 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-2 text-toro-dark">La nostra missione</h3>
                  <p className="text-gray-700">
                    Aiutarti a prendere decisioni finanziarie consapevoli, fornendoti gli strumenti 
                    e le conoscenze per costruire un patrimonio solido e duraturo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center mb-16">Servizi Dettagliati</h2>
            
            <div className="space-y-20">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  id={service.title.toLowerCase().split(' ')[0]}
                  className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                >
                  <div className="md:w-1/3 flex justify-center">
                    <div className="bg-white p-8 rounded-full shadow-xl">
                      {service.icon}
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-serif font-medium mb-4 text-toro-dark">{service.title}</h3>
                    <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-6">
                      <h4 className="text-lg font-medium mb-4 text-toro-dark">Cosa includiamo:</h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <div className="text-toro-gold mr-3 mt-1">•</div>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link 
                      to={service.link} 
                      className="inline-flex items-center px-6 py-3 bg-toro-gold text-white rounded-md hover:bg-toro-gold-dark transition-colors"
                    >
                      Scopri di più
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fee Section */}
        <section id="fee" className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="section-title text-center mb-8">Le Nostre Fee</h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
              Operiamo con un modello di compenso trasparente e orientato ai risultati.
              Tutte le nostre fee sono concordate in anticipo e non riceviamo commissioni da prodotti o società terze.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-toro-dark text-white">
                      <th className="py-4 px-6 text-left rounded-tl-md">Tipo di Servizio</th>
                      <th className="py-4 px-6 text-left">Modello di Fee</th>
                      <th className="py-4 px-6 text-left rounded-tr-md">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-medium">Consulenza Continuativa</td>
                      <td className="py-4 px-6">Da 1.500€/anno o 0,5-1% del patrimonio</td>
                      <td className="py-4 px-6">Fee decrescenti all'aumentare del patrimonio</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-medium">Piano Finanziario</td>
                      <td className="py-4 px-6">Da 500€ a 1.500€ una tantum</td>
                      <td className="py-4 px-6">Basato sulla complessità della situazione</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-6 font-medium">Coaching Finanziario</td>
                      <td className="py-4 px-6">Da 100€/ora</td>
                      <td className="py-4 px-6">Sessioni individuali o di gruppo</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium">Consulenza Specialistica</td>
                      <td className="py-4 px-6">Da 200€/ora</td>
                      <td className="py-4 px-6">Per temi specifici (oro, crypto, ecc.)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-center mt-6 text-sm text-gray-500">
                Tutte le fee sono trasparenti e concordate in anticipo. Non riceviamo commissioni da terze parti.
              </p>
            </div>
            
            <div className="mt-12 bg-toro-gold/10 p-8 rounded-lg">
              <h3 className="text-xl font-medium mb-4 text-center text-toro-dark">Perché scegliere il modello fee-only?</h3>
              <p className="text-gray-700 mb-6 text-center">
                Quando il consulente è pagato solo dal cliente, può agire esclusivamente nel tuo interesse 
                senza essere influenzato da incentivi esterni per vendere determinati prodotti.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Servizi;
