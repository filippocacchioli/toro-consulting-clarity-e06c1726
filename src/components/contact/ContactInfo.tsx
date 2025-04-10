
import React from 'react';
import { Mail, Phone, MapPin, Clock, Shield } from 'lucide-react';

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
