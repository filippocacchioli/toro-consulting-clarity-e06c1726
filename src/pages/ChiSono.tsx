
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
                  "Aiuto le persone come te a raggiungere la libertà finanziaria attraverso piani d'investimento etici e trasparenti."
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
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
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
                    Experienced Manager con un solido background in ruoli di Vendita e Operativi nella Supply Chain.
                    Profondamente orientato al cliente, guidato da una mentalità analitica e basata sui processi,
                    bilancio competenze tecniche con competenze manageriali e di leadership. Altamente orientato ai risultati e molto curioso.
                  </p>
                  
                  <h3 className="text-xl font-medium text-toro-dark mt-8 mb-4">Esperienze Lavorative</h3>
                  
                  <div className="mb-8 border-l-4 border-toro-gold pl-6">
                    <h4 className="text-lg font-medium text-toro-dark mb-2">District Manager</h4>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li>District business organization</li>
                      <li>District Profit & Loss responsibility</li>
                      <li>Customers Accountability</li>
                      <li>Operations Management</li>
                      <li>Turnover: 50 mln€</li>
                      <li>People Managed: +300</li>
                      <li>Customers: 20 Top International Brands in several FMCG</li>
                      <li>Business Development: customer scouting, tender management, preparing offers, integration processes supervision</li>
                      <li>Customer Service Manager: office organization and processes/activities re-design</li>
                    </ul>
                  </div>
                  
                  <div className="mb-8 border-l-4 border-toro-gold pl-6">
                    <h4 className="text-lg font-medium text-toro-dark mb-2">Real Estate Development</h4>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      <li>Real Estate technical and economic feasibility analysis (urban planning, economic, mortgage, legal, cadastral, etc.) in order to open new stores and modernize existing ones.</li>
                      <li>Marketing analysis and competitor research.</li>
                      <li>Negotiations and contracts management with Entrepreneurial, Credit Institutions and Public Administrations for property purchase or rental procedures.</li>
                      <li>Acquisition and supervision of necessary authorizations for sales</li>
                      <li>Stores maintenance supervisor</li>
                    </ul>
                  </div>
                  
                  <div className="mb-8 border-l-4 border-toro-gold pl-6">
                    <h4 className="text-lg font-medium text-toro-dark mb-2">Ingegnere software sviluppo e ricerca - Sony Ericsson</h4>
                    <p className="mb-2">Reporting to the R&D manager: data transmission protocol design and development</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 sticky top-24">
                  <h3 className="text-xl font-medium text-toro-dark mb-6">Formazione</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm text-gray-500">2022</div>
                      <div className="font-medium">POLIMI Graduate School of Management</div>
                      <div>Certification Program for Blockchain</div>
                      <div className="text-sm text-gray-600">Corso di Diploma con esame finale per ottenimento</div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-500">2022</div>
                      <div className="font-medium">DEC Institute</div>
                      <div>Chartered Blockchain Expert I (CBX), Blockchain & DLT</div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-500">2007</div>
                      <div className="font-medium">Politecnico di Milano</div>
                      <div>Master of Science Management, Economics and Industrial Engineering</div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-500">2000</div>
                      <div className="font-medium">Politecnico di Milano</div>
                      <div>Bachelor in Telecommunication Engineering</div>
                    </div>
                    
                    <div>
                      <div className="text-sm text-gray-500">1995</div>
                      <div className="font-medium">Liceo Scientifico</div>
                      <div>High school, scientific subjects</div>
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
            <h2 className="section-title text-center mb-16">I Nostri Valori</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toro-gold/10 text-toro-gold mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4">Etica</h3>
                <p className="text-gray-600">
                  Operiamo con la massima integrità e trasparenza, mettendo sempre gli interessi dei clienti al primo posto. 
                  Zero conflitti di interesse: il nostro unico obiettivo è il tuo successo finanziario.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toro-gold/10 text-toro-gold mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4">Competenza</h3>
                <p className="text-gray-600">
                  Formazione continua e certificazioni internazionali ci permettono di offrirti consulenza 
                  all'avanguardia, basata su ricerca ed evidenze, non su opinioni o mode del momento.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8 text-center transform transition-transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toro-gold/10 text-toro-gold mb-6">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4">Innovazione</h3>
                <p className="text-gray-600">
                  Integriamo le tecnologie più recenti e gli asset innovativi come oro e crypto nei nostri piani finanziari, 
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
