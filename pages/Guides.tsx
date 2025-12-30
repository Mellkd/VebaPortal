import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_GUIDES } from '../constants';
import { GuideCategory } from '../types';
import { Filter, Calendar, User } from 'lucide-react';

const Guides: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Object.values(GuideCategory)];

  const filteredGuides = selectedCategory === 'All'
    ? MOCK_GUIDES
    : MOCK_GUIDES.filter(g => g.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          Oyun <span className="text-veba-red">Rehberleri</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Kahraman gelişiminden savaş taktiklerine kadar Last War Survival'da ustalaşmanız için gereken her şey.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === cat
                ? 'bg-veba-red text-white shadow-lg shadow-red-900/50'
                : 'glass-panel text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {cat === 'All' ? 'Tümü' : cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGuides.length > 0 ? (
          filteredGuides.map((guide) => (
            <Link 
              key={guide.id} 
              to={`/guide/${guide.id}`}
              className="glass-panel rounded-xl overflow-hidden hover:border-veba-red/50 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-3 right-3 z-10 bg-black/70 backdrop-blur px-2 py-1 rounded text-xs text-veba-accent border border-veba-accent/30 font-bold uppercase">
                  {guide.category}
                </div>
                <img 
                  src={guide.imageUrl} 
                  alt={guide.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-veba-red transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {guide.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs text-gray-500">
                  <div className="flex items-center">
                    <User className="h-3 w-3 mr-1" />
                    {guide.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {guide.date}
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500">
            <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Bu kategoride henüz rehber bulunmuyor.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Guides;