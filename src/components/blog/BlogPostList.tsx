
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Category } from './BlogCategories';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
}

interface BlogPostListProps {
  posts: BlogPost[];
  categories: Category[];
  selectedCategory: string;
  searchTerm: string;
  onResetFilters: () => void;
}

const BlogPostList = ({ posts, categories, selectedCategory, searchTerm, onResetFilters }: BlogPostListProps) => {
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'tutti' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
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
              onClick={onResetFilters}
              className="mt-4 px-6 py-3 bg-toro-gold text-white rounded-md hover:bg-toro-gold-light transition-colors"
            >
              Reimposta filtri
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPostList;
