
import { BlogPost } from '../components/blog/BlogPostList';
import { Category } from '../components/blog/BlogCategories';

export const categories: Category[] = [
  { id: 'tutti', name: 'Tutti' },
  { id: 'mercati', name: 'Mercati' },
  { id: 'base', name: 'Basi di Investimento' },
  { id: 'crypto', name: 'Crypto & Bitcoin' },
  { id: 'oro', name: 'Oro e Metalli Preziosi' },
  { id: 'educazione', name: 'Educazione Finanziaria' }
];

export const posts: BlogPost[] = [
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
