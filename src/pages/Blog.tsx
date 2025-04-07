
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogHero from '../components/blog/BlogHero';
import NewsletterSignup from '../components/blog/NewsletterSignup';
import BlogCategories from '../components/blog/BlogCategories';
import BlogPostList from '../components/blog/BlogPostList';
import ResourcesSection from '../components/blog/ResourcesSection';
import { categories, posts } from '../data/blogData';

const Blog = () => {
  const [category, setCategory] = useState('tutti');
  const [searchTerm, setSearchTerm] = useState('');

  const resetFilters = () => {
    setCategory('tutti');
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <BlogHero 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />
        
        <NewsletterSignup />
        
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <BlogCategories 
              categories={categories} 
              selectedCategory={category} 
              onCategorySelect={setCategory} 
            />
            
            <BlogPostList 
              posts={posts} 
              categories={categories} 
              selectedCategory={category} 
              searchTerm={searchTerm} 
              onResetFilters={resetFilters} 
            />
          </div>
        </section>
        
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
