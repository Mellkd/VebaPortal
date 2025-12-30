import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Swords, Users, ShieldAlert } from 'lucide-react';
import { ALLIANCE_LOGO_URL, MOCK_GUIDES } from '../constants';

const Home: React.FC = () => {
  const recentGuides = MOCK_GUIDES.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542259682-16e6d080c422?q=80&w=2541&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>

        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <div className="mb-8 p-4 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 shadow-[0_0_50px_rgba(185,28,28,0.3)] animate-pulse">
            <img 
              src={ALLIANCE_LOGO_URL} 
              alt="VEBA ATAMBİR Logo" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 tracking-tight">
            [VEBA] <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">ATAMBİR</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8 font-light border-l-4 border-veba-red pl-4">
            "Birlikte Hayatta Kal, Birlikte Savaş."
          </p>

          <div className="flex gap-4">
            <Link 
              to="/guides" 
              className="px-8 py-3 bg-veba-red hover:bg-red-700 text-white font-bold rounded flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(185,28,28,0.5)]"
            >
              Rehberleri İncele <ArrowRight className="h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="px-8 py-3 glass-panel hover:bg-white/10 text-white font-bold rounded transition-all"
            >
              Katılım Şartları
            </Link>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-xl border-t-4 border-t-veba-red hover:-translate-y-2 transition-transform duration-300">
            <Swords className="h-12 w-12 text-veba-red mb-4" />
            <h3 className="text-2xl font-display font-bold text-white mb-2">Savaş Stratejileri</h3>
            <p className="text-gray-400">Sunucu savaşları, çöl fırtınası ve ittifak düelloları için en etkili taktikler.</p>
          </div>
          <div className="glass-panel p-8 rounded-xl border-t-4 border-t-veba-accent hover:-translate-y-2 transition-transform duration-300">
            <ShieldAlert className="h-12 w-12 text-veba-accent mb-4" />
            <h3 className="text-2xl font-display font-bold text-white mb-2">Üs Gelişimi</h3>
            <p className="text-gray-400">Kaynaklarınızı koruyun, binalarınızı optimize edin ve en hızlı şekilde güçlenin.</p>
          </div>
          <div className="glass-panel p-8 rounded-xl border-t-4 border-t-blue-500 hover:-translate-y-2 transition-transform duration-300">
            <Users className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-2xl font-display font-bold text-white mb-2">Dayanışma</h3>
            <p className="text-gray-400">Birlikte hareket eden, birbirine yardım eden aktif bir topluluk.</p>
          </div>
        </div>
      </div>

      {/* Recent Guides Preview */}
      <div className="bg-zinc-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl font-display font-bold text-white">
              Son Eklenen <span className="text-veba-red">Rehberler</span>
            </h2>
            <Link to="/guides" className="text-veba-accent hover:text-white transition-colors flex items-center text-sm">
              Tümünü Gör <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentGuides.map((guide) => (
              <Link key={guide.id} to={`/guide/${guide.id}`} className="group relative block h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 opacity-90 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                <img 
                  src={guide.imageUrl} 
                  alt={guide.title} 
                  className="w-full h-64 object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <span className="inline-block px-2 py-1 bg-veba-red text-xs font-bold text-white rounded mb-2">
                    {guide.category}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-veba-accent transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-2 line-clamp-2">
                    {guide.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;