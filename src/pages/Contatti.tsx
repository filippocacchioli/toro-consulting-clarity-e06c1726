import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Clock, Shield, Send, Check } from 'lucide-react';

const Contatti = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    policy: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        policy: false
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-r from-toro-dark to-toro-dark-light text-white">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contattaci</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Avete domande sulla vostra situazione finanziaria? Siamo qui per aiutarvi.
              Compilate il modulo sottostante o contattateci direttamente.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white relative">
          {/* Logo background overlay */}
          <div className="absolute inset-0 flex justify-center items-center z-0 opacity-5 pointer-events-none">
            <img 
              src="/lovable-uploads/a55f00d3-7eb2-4d4b-a54b-90bf6902d2cc.png"
              alt="TORO Consulting Logo Background"
              className="w-2/3 max-w-3xl"
            />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-serif font-medium mb-6 text-toro-dark">Inviateci un messaggio</h2>
                
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-medium text-green-800 mb-2">Messaggio Inviato!</h3>
                    <p className="text-green-700">
                      Grazie per averci contattato. Vi risponderemo al più presto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome e Cognome</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
                        placeholder="Il vostro nome e cognome"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
                        placeholder="La vostra email"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefono</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
                        placeholder="Il vostro numero di telefono"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Messaggio</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
                        placeholder="Scrivete qui il vostro messaggio..."
                        required
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="policy"
                          name="policy"
                          type="checkbox"
                          checked={formData.policy}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-toro-gold border-gray-300 rounded focus:ring-toro-gold"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="policy" className="text-gray-700">
                          Ho letto e accetto la <a href="/privacy" className="text-toro-gold hover:underline">Privacy Policy</a>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full bg-toro-gold hover:bg-toro-gold-light text-white font-medium py-3 px-6 rounded-md transition-colors"
                      >
                        Inviate Messaggio
                        <Send className="ml-2 h-5 w-5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
              
              <div>
                <h2 className="text-2xl font-serif font-medium mb-6 text-toro-dark">Informazioni di Contatto</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-toro-gold/10 p-4 rounded-full mr-6">
                      <Mail className="h-6 w-6 text-toro-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1 text-toro-dark">Email</h3>
                      <p className="text-gray-700 mb-1">Per richieste generali:</p>
                      <a href="mailto:info@toroconsulting.it" className="text-toro-gold hover:underline">info@toroconsulting.it</a>
                      <p className="text-gray-700 mt-2 mb-1">Per consulenze dirette:</p>
                      <a href="mailto:consulenza@toroconsulting.it" className="text-toro-gold hover:underline">consulenza@toroconsulting.it</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-toro-gold/10 p-4 rounded-full mr-6">
                      <Phone className="h-6 w-6 text-toro-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1 text-toro-dark">Telefono</h3>
                      <p className="text-gray-700 mb-1">Cellulare:</p>
                      <a href="tel:+393440164415" className="text-toro-gold hover:underline">+39 344 016 44 15</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-toro-gold/10 p-4 rounded-full mr-6">
                      <MapPin className="h-6 w-6 text-toro-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1 text-toro-dark">Indirizzo</h3>
                      <p className="text-gray-700 mb-2">
                        Via Fornio 37<br />
                        43036 Fidenza (PR), Italia
                      </p>
                      <a href="https://maps.google.com/?q=Strada+Comunale+per+Fornio,+37,+43036+Fidenza+PR,+Italy" target="_blank" rel="noopener noreferrer" className="text-toro-gold hover:underline">
                        Visualizzate su Google Maps
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-toro-gold/10 p-4 rounded-full mr-6">
                      <Clock className="h-6 w-6 text-toro-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1 text-toro-dark">Orari</h3>
                      <p className="text-gray-700 mb-1">
                        <span className="font-medium">Lunedì - Venerdì:</span> 9:00 - 18:00
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Sabato - Domenica:</span> Chiuso
                      </p>
                      <p className="text-gray-600 text-sm mt-2">
                        Disponibilità di appuntamenti virtuali anche fuori orario.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 bg-toro-dark text-white p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Shield className="h-5 w-5 mr-2 text-toro-gold" />
                    <h3 className="text-lg font-medium">La vostra privacy è importante</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Tutti i dati forniti tramite questo modulo sono trattati in conformità con il GDPR e la normativa
                    italiana sulla privacy. Non condividiamo le vostre informazioni con terze parti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contatti;
