
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
              Hai domande sulla tua situazione finanziaria? Siamo qui per aiutarti.
              Compila il modulo sottostante o contattaci direttamente.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-2xl font-serif font-medium mb-6 text-toro-dark">Inviaci un messaggio</h2>
                
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-medium text-green-800 mb-2">Messaggio Inviato!</h3>
                    <p className="text-green-700">
                      Grazie per averci contattato. Ti risponderemo al più presto.
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
                        placeholder="Il tuo nome e cognome"
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
                        placeholder="La tua email"
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
                        placeholder="Il tuo numero di telefono"
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
                        placeholder="Scrivi qui il tuo messaggio..."
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
                        Invia Messaggio
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
                      <a href="https://maps.google.com/maps?q=Strada+Comunale+per+Fornio,+37,+43036+Fidenza+PR,+Italy" target="_blank" rel="noopener noreferrer" className="text-toro-gold hover:underline">
                        Visualizza su Google Maps
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
                    <h3 className="text-lg font-medium">La tua privacy è importante</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Tutti i dati forniti tramite questo modulo sono trattati in conformità con il GDPR e la normativa
                    italiana sulla privacy. Non condividiamo le tue informazioni con terze parti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-serif font-medium mb-8 text-center text-toro-dark">Certificazioni e Affiliazioni</h2>
            
            <div className="flex flex-wrap justify-center items-center gap-12">
              <div className="text-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/it/7/76/Logo_Organismo_Consulenti_Finanziari.png" 
                  alt="Organismo di vigilanza e tenuta dell'albo unico dei Consulenti Finanziari" 
                  className="h-16 mx-auto hover:opacity-100 transition-all"
                />
                <p className="text-sm text-gray-600 mt-2">Albo OCF</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/it/9/98/Logo_Consob.png" 
                  alt="Commissione Nazionale per le Società e la Borsa" 
                  className="h-16 mx-auto hover:opacity-100 transition-all"
                />
                <p className="text-sm text-gray-600 mt-2">Vigilanza CONSOB</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://www.gsom.polimi.it/wp-content/uploads/2019/11/logo-polimi-gsm-blu-1.png" 
                  alt="POLIMI Graduate School of Management" 
                  className="h-16 mx-auto hover:opacity-100 transition-all"
                />
                <p className="text-sm text-gray-600 mt-2">POLIMI Graduate School of Management</p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://www.decinstitute.org/wp-content/uploads/2021/11/logo-dec-institute.svg" 
                  alt="DEC Institute" 
                  className="h-16 mx-auto hover:opacity-100 transition-all"
                />
                <p className="text-sm text-gray-600 mt-2">DEC Institute</p>
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
