
import React from 'react';
import { Search } from 'lucide-react';

interface BlogHeroProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const BlogHero = ({ searchTerm, setSearchTerm }: BlogHeroProps) => {
  return (
    <section className="py-32 bg-gradient-to-r from-toro-dark to-toro-dark-light text-white">
      <div className="container-custom text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Diventa un Investitore Consapevole</h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Articoli, guide e risorse per aiutarti a prendere decisioni finanziarie più informate
          e costruire una solida strategia di investimento.
        </p>
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-full p-2">
          <div className="flex items-center">
            <Search className="ml-4 h-5 w-5 text-gray-300" />
            <input
              type="text"
              placeholder="Cerca articoli..."
              className="w-full bg-transparent border-none text-white placeholder-gray-300 p-2 focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
