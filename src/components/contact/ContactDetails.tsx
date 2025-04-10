
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactDetailsItem from './ContactDetailsItem';

const ContactDetails = () => {
  return (
    <div className="space-y-6">
      <ContactDetailsItem
        icon={<Mail className="h-6 w-6 text-toro-gold" />}
        title="Email"
      >
        <p className="text-gray-600">info@toroconsulting.it</p>
      </ContactDetailsItem>
      
      <ContactDetailsItem
        icon={<Phone className="h-6 w-6 text-toro-gold" />}
        title="Telefono"
      >
        <p className="text-gray-600">+39 344 016 44 15</p>
      </ContactDetailsItem>
      
      <ContactDetailsItem
        icon={<MapPin className="h-6 w-6 text-toro-gold" />}
        title="Indirizzo"
      >
        <p className="text-gray-600">Via Fornio 37, 43036, Fidenza (PR)</p>
        <a href="https://maps.google.com/maps?q=Strada+Comunale+per+Fornio,+37,+43036+Fidenza+PR,+Italy" target="_blank" rel="noopener noreferrer" className="text-toro-gold hover:underline">Vedi su Google Maps</a>
      </ContactDetailsItem>
    </div>
  );
};

export default ContactDetails;
