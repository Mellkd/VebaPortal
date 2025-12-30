import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_GUIDES } from '../constants';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';

const GuideDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const guide = MOCK_GUIDES.find(g => g.id === id);

  if (!guide) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-white mb-4">Rehber Bulunamadı</h2>
        <Link to="/guides" className="text-veba-red hover:underline">Rehberlere Dön</Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/guides" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Tüm Rehberler
      </Link>

      <header className="mb-10">
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="px-3 py-1 bg-veba-red/20 text-veba-red border border-veba-red/30 rounded text-xs font-bold uppercase">
            {guide.category}
          </span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
          {guide.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 pb-8 border-b border-white/10">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2 text-veba-accent" />
            <span>Yazar: <span className="text-gray-200">{guide.author}</span></span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-veba-accent" />
            <span>{guide.date}</span>
          </div>
          <div className="flex items-center ml-auto cursor-pointer hover:text-white">
            <Share2 className="h-4 w-4 mr-2" />
            Paylaş
          </div>
        </div>
      </header>

      <div className="glass-panel p-2 rounded-2xl mb-10">
        <img 
          src={guide.imageUrl} 
          alt={guide.title} 
          className="w-full max-h-[500px] object-cover rounded-xl"
        />
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        {/* Simulating HTML content injection safely */}
        <div dangerouslySetInnerHTML={{ __html: guide.content }} />
      </div>

      <div className="mt-16 p-8 bg-zinc-900 rounded-xl border border-white/5 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
        <div className="w-16 h-16 bg-veba-red rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
          V
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Bu rehber yardımcı oldu mu?</h3>
          <p className="text-gray-400">Daha fazla soru ve strateji tartışması için İttifak sohbetine veya Discord sunucumuza katılın.</p>
        </div>
        <div className="md:ml-auto">
            <Link to="/about" className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg text-white font-medium transition-colors border border-white/10">
                Bize Katıl
            </Link>
        </div>
      </div>
    </article>
  );
};

export default GuideDetail;