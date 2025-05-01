import { useState } from 'react';
import { Facebook, Instagram, Youtube, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const FloatingSocialMedia = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={cn(
        "fixed right-0 top-1/2 z-40 flex transition-all duration-300 shadow-lg",
        isExpanded ? "translate-x-0" : "translate-x-[calc(100%-40px)]"
      )}
    >
      {/* Toggle button */}
      <button 
        onClick={toggleExpand}
        className="bg-blue-600 text-white h-full w-10 flex items-center justify-center"
        aria-label={isExpanded ? "收起社群媒體" : "展開社群媒體"}
      >
        {isExpanded ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      {/* Content */}
      <div className="bg-white p-4 w-64 border-t border-b border-l border-gray-200">
        <h3 className="font-bold text-lg mb-4 text-blue-600">關注我們</h3>
        
        <div className="space-y-4">
          <a 
            href="https://www.facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Facebook size={20} className="mr-3 text-blue-600" />
            <span>蕙佑石材 Facebook</span>
          </a>
          
          <a 
            href="https://www.instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-pink-600 transition-colors"
          >
            <Instagram size={20} className="mr-3 text-pink-600" />
            <span>蕙佑石材 Instagram</span>
          </a>
          
          <a 
            href="https://www.youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
          >
            <Youtube size={20} className="mr-3 text-red-600" />
            <span>蕙佑石材 YouTube</span>
          </a>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            關注我們的社群媒體，獲取最新石材資訊和設計靈感！
          </p>
        </div>
      </div>
    </div>
  );
};

export default FloatingSocialMedia;