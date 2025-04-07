
import React from 'react';

export interface Category {
  id: string;
  name: string;
}

interface BlogCategoriesProps {
  categories: Category[];
  selectedCategory: string;
  onCategorySelect: (categoryId: string) => void;
}

const BlogCategories = ({ categories, selectedCategory, onCategorySelect }: BlogCategoriesProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-12 justify-center">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`px-6 py-3 rounded-full transition-all ${
            selectedCategory === cat.id 
              ? 'bg-toro-gold text-white font-medium shadow-md' 
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => onCategorySelect(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default BlogCategories;
