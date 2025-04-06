import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section - Updated to center content vertically */}
        <section className="flex items-center min-h-[400px] bg-gradient-to-r from-toro-dark to-toro-dark-light text-white">
          <div className="container-custom text-center py-24">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Approfondimenti, guide e novità dal mondo della finanza personale.
            </p>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12">Articoli Recenti</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example Blog Post */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Blog Post"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium text-toro-dark mb-2">
                    Titolo dell'Articolo
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Breve descrizione dell'articolo. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <a
                    href="#"
                    className="text-toro-gold hover:underline font-medium"
                  >
                    Leggi di più
                  </a>
                </div>
              </div>
              {/* Add more blog posts here */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Blog Post"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium text-toro-dark mb-2">
                    Titolo dell'Articolo
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Breve descrizione dell'articolo. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <a
                    href="#"
                    className="text-toro-gold hover:underline font-medium"
                  >
                    Leggi di più
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Blog Post"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-medium text-toro-dark mb-2">
                    Titolo dell'Articolo
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Breve descrizione dell'articolo. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                  </p>
                  <a
                    href="#"
                    className="text-toro-gold hover:underline font-medium"
                  >
                    Leggi di più
                  </a>
                </div>
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
