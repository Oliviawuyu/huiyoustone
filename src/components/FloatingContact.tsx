import { useState } from 'react';
import { Phone, Mail, ChevronLeft, ChevronRight, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useContactTracking } from '../hooks/useGA4';

const FloatingContact = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const { trackContact } = useContactTracking();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // 聯絡互動追蹤函數
  const handleContactClick = (method: 'phone' | 'email') => {
    trackContact(method);
  };

  // 複製email地址函數
  const copyEmailToClipboard = (email: string) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiedEmail(email);
      handleContactClick('email');
      // 3秒後清除提示
      setTimeout(() => {
        setCopiedEmail(null);
      }, 3000);
    }).catch(err => {
      console.error('複製失敗:', err);
    });
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
            <a 
              href="tel:03-8235309" 
              className="text-gray-700 hover:text-amber-700 transition-colors"
              onClick={() => handleContactClick('phone')}
            >
              03-8235309
            </a>
          </div>
          
          <div className="flex items-center">
            <Phone size={16} className="mr-2 text-amber-700" />
            <a 
              href="tel:0918-140700" 
              className="text-gray-700 hover:text-amber-700 transition-colors"
              onClick={() => handleContactClick('phone')}
            >
            0918-140-700
            </a>
          </div>
          
          <div className="flex items-center relative">
            <Mail size={16} className="mr-2 text-amber-700" />
            <div className="text-gray-700 transition-colors flex items-center">
              {copiedEmail === 'huiyoustone@gmail.com' && (
                <span className="absolute left-0 -top-8 bg-green-500 text-white px-2 py-1 rounded text-sm whitespace-nowrap z-50">
                  已複製！
                </span>
              )}
              <span className={`transition-colors duration-300 ${copiedEmail === 'huiyoustone@gmail.com' ? 'text-amber-700' : 'text-gray-700'}`}>
                huiyoustone@gmail.com
              </span>
              <Copy 
                size={16} 
                className={`ml-1 cursor-pointer p-1 transition-colors duration-300 ${copiedEmail === 'huiyoustone@gmail.com' ? 'text-amber-700' : 'text-gray-400 hover:text-amber-700'}`}
                onClick={() => copyEmailToClipboard('huiyoustone@gmail.com')}
              />
            </div>
          </div>
          <div className="flex items-center relative">
            <Mail size={16} className="mr-2 text-amber-700" />
            <div className="text-gray-700 transition-colors flex items-center">
              {copiedEmail === 'jinestone1118@gmail.com' && (
                <span className="absolute left-0 -top-8 bg-green-500 text-white px-2 py-1 rounded text-sm whitespace-nowrap z-50">
                  已複製！
                </span>
              )}
              <span className={`transition-colors duration-300 ${copiedEmail === 'jinestone1118@gmail.com' ? 'text-amber-700' : 'text-gray-700'}`}>
                jinestone1118@gmail.com
              </span>
              <Copy 
                size={16} 
                className={`ml-1 cursor-pointer p-1 transition-colors duration-300 ${copiedEmail === 'jinestone1118@gmail.com' ? 'text-amber-700' : 'text-gray-400 hover:text-amber-700'}`}
                onClick={() => copyEmailToClipboard('jinestone1118@gmail.com')}
              />
            </div>
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