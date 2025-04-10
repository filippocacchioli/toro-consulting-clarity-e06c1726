
import React from 'react';
import { Send } from 'lucide-react';

interface ContactFormInputsProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  isSubmitting: boolean;
  isSubmitted: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ContactFormInputs = ({
  formData,
  isSubmitting,
  isSubmitted,
  handleChange,
  handleSubmit
}: ContactFormInputsProps) => {
  if (isSubmitted) {
    return (
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6">
        <p>Grazie per averci contattato! Ti risponderemo al più presto.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-toro-dark mb-2">
            Nome e Cognome *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-toro-dark mb-2">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-toro-dark mb-2">
            Telefono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-toro-dark mb-2">
            Messaggio *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
          ></textarea>
        </div>
        
        <div className="flex items-start">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            required
            className="h-5 w-5 mt-1 text-toro-gold focus:ring-toro-gold"
          />
          <label htmlFor="privacy" className="ml-3 text-sm text-gray-600">
            Ho letto e accetto la <a href="/privacy" className="text-toro-gold hover:underline">Privacy Policy</a> *
          </label>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary flex items-center justify-center"
        >
          {isSubmitting ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <Send className="mr-2 h-5 w-5" />
          )}
          {isSubmitting ? 'Invio in corso...' : 'Invia messaggio'}
        </button>
      </div>
    </form>
  );
};

export default ContactFormInputs;
