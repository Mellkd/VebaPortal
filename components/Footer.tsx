import React from 'react';
import { Github, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-display font-bold text-white mb-2">[VEBA] ATAMBİR</h2>
            <p className="text-gray-500 text-sm">
              Last War Survival'da birliğin ve gücün adresi.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-veba-red transition-colors">
              <span className="sr-only">Discord</span>
              <MessageCircle className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-white/5 pt-8 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} VEBA ATAMBİR Alliance. Fan made site. Not affiliated with Last War Survival official.
        </div>
      </div>
    </footer>
  );
};

export default Footer;