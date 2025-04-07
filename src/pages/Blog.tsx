
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, ArrowRight, TrendingUp, BookOpen, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('tutti');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'tutti', name: 'Tutti' },
    { id: 'mercati', name: 'Mercati' },
    { id: 'base', name: 'Basi di Investimento' },
    { id: 'crypto', name: 'Crypto & Bitcoin' },
    { id: 'oro', name: 'Oro e Metalli Preziosi' },
    { id: 'educazione', name: 'Educazione Finanziaria' }
  ];

  const posts = [
    {
      id: 1,
      title: "Perché investire non è speculare: la differenza che fa la differenza",
      excerpt: "Scopri la differenza fondamentale tra investimento e speculazione, e perché questa distinzione è cruciale per il tuo successo finanziario a lungo termine.",
      category: "base",
      image: "https://images.unsplash.com/photo-1638486071992-536e48c8fa3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "15 Maggio 2023",
      readTime: "8 min"
    },
    {
      id: 2,
      title: "Bitcoin come riserva di valore: analisi e prospettive",
      excerpt: "Un'analisi approfondita delle caratteristiche di Bitcoin come riserva di valore e il suo potenziale ruolo nei portafogli moderni.",
      category: "crypto",
      image: "https://images.unsplash.com/photo-1543699565-003b8adda5fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "3 Giugno 2023",
      readTime: "12 min"
    },
    {
      id: 3,
      title: "Oro fisico vs ETF sull'oro: pro e contro di ogni approccio",
      excerpt: "Una guida completa alle diverse modalità di investimento in oro, dai lingotti fisici agli ETF, con analisi dei vantaggi e svantaggi di ciascuna.",
      category: "oro",
      image: "https://images.unsplash.com/photo-1610375461249-bcd4d8b74004?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "21 Giugno 2023",
      readTime: "10 min"
    },
    {
      id: 4,
      title: "I principi dell'asset allocation: come costruire un portafoglio bilanciato",
      excerpt: "Impara i fondamenti della diversificazione e come costruire un portafoglio che bilanci efficacemente rischio e rendimento secondo i tuoi obiettivi.",
      category: "base",
      image: "https://images.unsplash.com/photo-1642543492255-5cede525382c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "7 Luglio 2023",
      readTime: "15 min"
    },
    {
      id: 5,
      title: "Il valore dell'educazione finanziaria: perché è il migliore investimento",
      excerpt: "Perché investire nella propria formazione finanziaria è il primo e più importante passo per costruire un patrimonio solido e duraturo.",
      category: "educazione",
      image: "https://images.unsplash.com/photo-1520695287272-b7f8af46d367?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "18 Luglio 2023",
      readTime: "7 min"
    },
    {
      id: 6,
      title: "Analisi dei mercati: prospettive per il secondo semestre 2023",
      excerpt: "Un'analisi dettagliata delle tendenze dei mercati globali e delle possibili strategie di investimento per affrontare il resto dell'anno.",
      category: "mercati",
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2 Agosto 2023",
      readTime: "11 min"
    }
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Grazie per la tua iscrizione con l'email: ${email}! Ti invieremo presto la guida.`);
    setEmail('');
  };

  const filteredPosts = posts.filter(post => {
    const matchesCategory = category === 'tutti' || post.category === category;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section - Adjusted with more padding-top */}
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

        {/* Newsletter Section */}
        <section className="py-16 bg-toro-gold">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-4 text-white">
                  Scarica la Guida Gratuita: 
                  <br />"7 Errori da Evitare negli Investimenti"
                </h2>
                <p className="text-white text-lg mb-4">
                  Iscriviti alla nostra newsletter per ricevere subito la guida gratuita e restare aggiornato
                  con strategie esclusive e analisi dei mercati.
                </p>
                <ul className="text-white space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="mr-2 text-lg">✓</div>
                    <span>Consigli pratici per evitare errori costosi</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 text-lg">✓</div>
                    <span>Esempi reali e casi studio</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 text-lg">✓</div>
                    <span>Strategie utilizzate dai professionisti</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-medium mb-4 text-toro-dark">Ottieni Subito la Tua Guida</h3>
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
                        placeholder="Il tuo nome"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-toro-gold"
                        placeholder="La tua email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="pt-2">
                      <button 
                        type="submit" 
                        className="w-full bg-toro-dark hover:bg-toro-dark-light text-white font-medium py-3 px-6 rounded-md transition-colors"
                      >
                        Scarica la Guida Gratuita
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 text-center">
                      Ci impegniamo a proteggere i tuoi dati. Consulta la nostra 
                      <a href="/privacy" className="text-toro-gold hover:underline"> Privacy Policy</a>.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`px-6 py-3 rounded-full transition-all ${
                    category === cat.id 
                      ? 'bg-toro-gold text-white font-medium shadow-md' 
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setCategory(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-medium text-toro-gold bg-toro-gold/10 px-3 py-1 rounded-full">{categories.find(c => c.id === post.category)?.name}</span>
                        <span className="text-xs text-gray-500">{post.date} • {post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-serif font-medium mb-2">
                        <Link to={`/blog/${post.id}`} className="text-toro-dark hover:text-toro-gold transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Link 
                        to={`/blog/${post.id}`} 
                        className="inline-flex items-center text-toro-gold font-medium hover:underline"
                      >
                        Leggi l'articolo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-lg text-gray-600">Nessun articolo trovato per la tua ricerca.</p>
                <button 
                  onClick={() => {setCategory('tutti'); setSearchTerm('');}}
                  className="mt-4 px-6 py-3 bg-toro-gold text-white rounded-md hover:bg-toro-gold-light transition-colors"
                >
                  Reimposta filtri
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="section-title text-center mb-16">Risorse Educative</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toro-gold/10 text-toro-gold mb-6">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4">Guide per Principianti</h3>
                <p className="text-gray-600 mb-6">
                  Risorse fondamentali per chi si avvicina per la prima volta al mondo degli investimenti.
                </p>
                <Link 
                  to="/risorse/principianti" 
                  className="inline-flex items-center text-toro-gold font-medium hover:underline"
                >
                  Esplora le guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-toro-gold/5 p-8 rounded-lg shadow-sm border border-toro-gold/20 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toro-gold/10 text-toro-gold mb-6">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4">Webinar e Workshop</h3>
                <p className="text-gray-600 mb-6">
                  Sessioni interattive per approfondire strategie di investimento e analisi dei mercati.
                </p>
                <Link 
                  to="/webinar" 
                  className="inline-flex items-center text-toro-gold font-medium hover:underline"
                >
                  Calendario eventi
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-toro-gold/10 text-toro-gold mb-6">
                  <LineChart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-medium mb-4">Strumenti e Calcolatori</h3>
                <p className="text-gray-600 mb-6">
                  Tool interattivi per pianificare i tuoi obiettivi finanziari e monitorare i progressi.
                </p>
                <Link 
                  to="/strumenti" 
                  className="inline-flex items-center text-toro-gold font-medium hover:underline"
                >
                  Accedi agli strumenti
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
