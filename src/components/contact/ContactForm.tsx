
import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  policy: boolean;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
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
  );
};

export default ContactForm;
