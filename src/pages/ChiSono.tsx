
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, BookOpen, Users, Star, Shield, Lightbulb } from 'lucide-react';
import Logo from '../components/Logo';

const ChiSono = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-toro-dark to-toro-dark-light text-white">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Chi Sono</h1>
                <p className="text-xl mb-6">
                  "Aiuto le persone come te a raggiungere la libertà finanziaria attraverso piani d'investimento efficaci e trasparenti."
                </p>
                <div className="flex items-center">
                  <Logo size="small" className="mr-3" />
                  <span className="text-lg font-medium text-toro-gold">TORO Consulting</span>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-toro-gold rounded-full blur"></div>
                  <img 
                    src="/lovable-uploads/b675c65e-06b1-425f-b5f8-c63e4e322f59.png" 
                    alt="Fondatore TORO Consulting" 
                    className="rounded-full w-64 h-64 object-cover border-4 border-toro-gold relative"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                <h2 className="section-title">Il Mio Percorso</h2>
                <div className="prose max-w-none text-gray-700">
                  <p className="text-lg font-medium mb-6">
                    Sono Filippo Cacchioli, Dirigente d'Azienda innamorato della Finanza: +18 anni di esperienza con forte background in ruoli chiave di Vendita e Operations.
                    <br />
                    Forte orientamento alle tematiche Economico/Finanziarie e al Cliente, sono guidato da una mentalità analitica basata su dati e processi.
                  </p>
                  <p className="text-lg font-medium mb-6 bg-toro-gold/10 p-4 border-l-4 border-toro-gold rounded">
                    <strong>Ho a che fare quotidianamente con problematiche pratiche e non teoriche proprio come te, il mio approccio alla TUA consulenza sarà quindi pragmatico, sintetico ed efficace!</strong>
                  </p>
                  
                  <h3 className="text-xl font-medium text-toro-dark mt-8 mb-4">Esperienze Lavorative</h3>
                  
                  <div className="mb-8 border-l-4 border-toro-gold pl-6">
                    <h4 className="text-lg font-medium text-toro-dark mb-2">Consulente Finanziario Indipendente</h4>
                    <p className="mb-2 text-gray-500">Attuale</p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li>Iscrizione all'Albo OCF n°123456</li>
                      <li>Patrimonio gestito: 5 mln€</li>
                      <li>Clienti: +40</li>
                    </ul>
                  </div>
                  
                  <div className="mb-8 border-l-4 border-toro-gold pl-6">
                    <h4 className="text-lg font-medium text-toro-dark mb-2">District Manager</h4>
                    <p className="mb-2 text-gray-500">Attuale</p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li>Economics: +50mln€ di fatturato gestito - Responsabilità Profit & Loss</li>
                      <li>Organizzazione aziendale del distretto: Persone gestite +300</li>
                      <li>Key Accounting: +20 clienti internazionali di primo piano in diversi settori FMCG</li>
                      <li>Gestione operativa: 4 magazzini per un totale di 100.000 mq di superficie coperta</li>
                    </ul>
                  </div>
                  
                  <div className="mb-8 border-l-4 border-toro-gold pl-6">
                    <h4 className="text-lg font-medium text-toro-dark mb-2">Sviluppo Immobiliare</h4>
                    <p className="mb-2 text-gray-500">Esperienza precedente</p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li>Analisi di fattibilità tecnica ed economica immobiliare (urbanistica, economica, ipotecaria, legale, catastale, ecc.) per aprire nuovi negozi e modernizzare quelli esistenti.</li>
                      <li>Analisi di marketing e ricerca concorrenti.</li>
                      <li>Gestione di negoziazioni e contratti con imprenditori, istituti di credito e amministrazioni pubbliche per procedure di acquisto o locazione di immobili.</li>
                      <li>Acquisizione e supervisione delle autorizzazioni necessarie</li>
                    </ul>
                  </div>
                  
                  <div className="mb-8 border-l-4 border-toro-gold pl-6">
                    <h4 className="text-lg font-medium text-toro-dark mb-2">Ingegnere software sviluppo e ricerca - Sony Ericsson</h4>
                    <p className="mb-2 text-gray-500">Esperienza precedente</p>
                    <p className="mb-2">Riporto al responsabile R&D: progettazione e sviluppo di un protocollo di trasmissione dati per un micro-processore</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 sticky top-24">
                  <h3 className="text-xl font-medium text-toro-dark mb-6">Formazione</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="font-medium">POLIMI Graduate School of Management</div>
                      <div>Certification Program for Blockchain</div>
                      <div className="text-sm text-gray-600">Corso di Diploma con esame finale per ottenimento</div>
                    </div>
                    
                    <div>
                      <div className="font-medium">DEC Institute</div>
                      <div>Chartered Blockchain Expert I (CBX), Blockchain & DLT</div>
                    </div>
                    
                    <div>
                      <div className="font-medium">Politecnico di Milano</div>
                      <div>Master of Science Management, Economics and Industrial Engineering</div>
                    </div>
                    
                    <div>
                      <div className="font-medium">Politecnico di Milano</div>
                      <div>Bachelor in Telecommunication Engineering</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Valori */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center mb-16">I Miei Valori</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toro-gold/10 text-toro-gold mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4">Etica</h3>
                <p className="text-gray-600">
                  Opero con la massima integrità e trasparenza, mettendo sempre i tuoi interessi al primo posto. 
                  Zero conflitti di interesse: il mio unico obiettivo è il tuo successo finanziario.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toro-gold/10 text-toro-gold mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4">Competenza</h3>
                <p className="text-gray-600">
                  Formazione continua e certificazioni internazionali mi permettono di offrirti consulenza 
                  all'avanguardia, basata su ricerca ed evidenze, non su opinioni o mode del momento.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toro-gold/10 text-toro-gold mb-6">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4">Innovazione</h3>
                <p className="text-gray-600">
                  Integro le tecnologie più recenti e gli asset innovativi come oro e crypto nei miei piani finanziari, 
                  preparandoti per le opportunità del futuro, non solo del presente.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ChiSono;
