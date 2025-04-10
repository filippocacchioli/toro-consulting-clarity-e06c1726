
import React, { useState } from 'react';
import ContactFormInputs from './contact/ContactFormInputs';
import ContactDetails from './contact/ContactDetails';
import ContactSocialLinks from './contact/ContactSocialLinks';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-white" id="contatti">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Contattaci</h2>
            <p className="text-lg text-gray-600 mb-8">
              Siamo qui per rispondere a tutte le tue domande. Compila il form e ti risponderemo entro 24 ore.
            </p>
            
            <ContactDetails />
            <ContactSocialLinks />
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-serif font-medium mb-6">Inviaci un messaggio</h3>
            
            <ContactFormInputs 
              formData={formData}
              isSubmitting={isSubmitting}
              isSubmitted={isSubmitted}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
