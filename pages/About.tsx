import React from 'react';
import { ALLIANCE_LOGO_URL } from '../constants';
import { Target, ShieldCheck, Handshake, Skull } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-veba-red/20 blur-[50px] rounded-full"></div>
            <img 
              src={ALLIANCE_LOGO_URL} 
              alt="VEBA ATAMBİR" 
              className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-contain animate-[float_6s_ease-in-out_infinite]"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Biz <span className="text-veba-red">[VEBA]</span> ATAMBİR
          </h1>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Last War Survival dünyasında, kaosun ortasında düzeni sağlayan, birbirine kenetlenmiş bir aileyiz. Amacımız sadece hayatta kalmak değil, sunucunun en güçlüsü olmaktır.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel p-4 rounded-lg border-l-4 border-veba-red">
              <h3 className="font-bold text-white text-lg">Aktiflik</h3>
              <p className="text-sm text-gray-400">Etkinliklere tam katılım.</p>
            </div>
            <div className="glass-panel p-4 rounded-lg border-l-4 border-veba-accent">
              <h3 className="font-bold text-white text-lg">Saygı</h3>
              <p className="text-sm text-gray-400">Üyelere ve rakiplere saygı.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {[
          { icon: Target, title: 'Hedef Odaklı', desc: 'Savaşlarda ve etkinliklerde koordineli hareket ederiz.' },
          { icon: ShieldCheck, title: 'Koruma', desc: 'İttifak üyelerine yapılan saldırı, herkese yapılmış sayılır.' },
          { icon: Handshake, title: 'Yardımlaşma', desc: 'Kaynak ve bilgi paylaşımı esastır.' },
          { icon: Skull, title: 'Güç', desc: 'Sunucudaki en korkulan savaş gücü olma hedefi.' }
        ].map((item, idx) => (
          <div key={idx} className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 hover:bg-zinc-900 transition-colors">
            <item.icon className="h-10 w-10 text-veba-red mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-red-900/20 to-black p-8 md:p-12 rounded-2xl border border-red-900/30">
        <h2 className="text-3xl font-display font-bold text-white mb-6 border-b border-white/10 pb-4">
          İttifak Kuralları
        </h2>
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-veba-red/20 text-veba-red font-bold text-xs mr-3 mt-1">1</span>
            <span>Çevrimdışı olma süresi mazeretsiz 3 günü geçemez.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-veba-red/20 text-veba-red font-bold text-xs mr-3 mt-1">2</span>
            <span>Sunucu Savaşı (VS) günlerinde minimum puan hedeflerine ulaşılmalıdır.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-veba-red/20 text-veba-red font-bold text-xs mr-3 mt-1">3</span>
            <span>Kamyon yağmalama kurallarına (NAP) uyulmalıdır.</span>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-veba-red/20 text-veba-red font-bold text-xs mr-3 mt-1">4</span>
            <span>Discord katılımı zorunludur.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;