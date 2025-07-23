import { useState } from 'react';
import { Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const FloatingContact = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={cn(
        "fixed right-0 top-1/3 z-40 flex transition-all duration-300 shadow-lg",
        isExpanded ? "translate-x-0" : "translate-x-[calc(100%-40px)]"
      )}
    >
      {/* Toggle button */}
      <button 
        onClick={toggleExpand}
        className="bg-amber-700 text-white h-full w-10 flex items-center justify-center"
        aria-label={isExpanded ? "收起聯絡資訊" : "展開聯絡資訊"}
      >
        {isExpanded ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
      </button>

      {/* Content */}
      <div className="bg-white p-4 w-64 border-t border-b border-l border-gray-200">
        <h3 className="font-bold text-lg mb-4 text-amber-700">聯絡我們</h3>
        
        <div className="space-y-4">
          <div className="flex items-center">
            <Phone size={16} className="mr-2 text-amber-700" />
            <a href="tel:03-8235309" className="text-gray-700 hover:text-amber-700 transition-colors">
              03-8235309
            </a>
          </div>
          
          <div className="flex items-center">
            <Phone size={16} className="mr-2 text-amber-700" />
            <a href="tel:0918-140700" className="text-gray-700 hover:text-amber-700 transition-colors">
            0918-140-700
            </a>
          </div>
          
          <div className="flex items-center">
            <Mail size={16} className="mr-2 text-amber-700" />
            <a href="mailto:huiyoustone@gmail.com" className="text-gray-700 hover:text-amber-700 transition-colors">
              huiyoustone@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <Mail size={16} className="mr-2 text-amber-700" />
            <a href="mailto:jinestone1118@gmail.com" className="text-gray-700 hover:text-amber-700 transition-colors">
            jinestone1118@gmail.com
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <a 
            href="/contact" 
            className="block w-full text-center bg-amber-700 text-white py-2 rounded hover:bg-amber-800 transition-colors"
          >
            聯絡我們
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatingContact;