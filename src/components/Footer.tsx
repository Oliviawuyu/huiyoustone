import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Printer, Copy } from 'lucide-react';
import { useState } from 'react';
import { useContactTracking } from '../hooks/useGA4';

const Footer = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const { trackContact } = useContactTracking();

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
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/logo1.png" 
                alt="蕙佑石材股份有限公司"
                className="h-16 w-auto"
              />
            </Link>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>電話：03-8235309</span>
              </div>
              <div className="flex items-center">
                <Printer size={16} className="mr-2" />
                <span>傳真：03-8246298</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>手機：0918-140-700</span>
              </div>
              <div className="flex items-center relative">
                <Mail size={16} className="mr-2" />
                {copiedEmail === 'huiyoustone@gmail.com' && (
                  <span className="absolute left-0 -top-8 bg-green-500 text-white px-2 py-1 rounded text-sm whitespace-nowrap z-50">
                    已複製！
                  </span>
                )}
                <span className={`transition-colors duration-300 ${copiedEmail === 'huiyoustone@gmail.com' ? 'text-amber-700' : 'text-gray-800'}`}>
                  huiyoustone@gmail.com
                </span>
                <Copy 
                  size={20} 
                  className={`ml-2 cursor-pointer p-1 transition-colors duration-300 ${copiedEmail === 'huiyoustone@gmail.com' ? 'text-amber-700' : 'text-gray-400 hover:text-amber-700'}`}
                  onClick={() => copyEmailToClipboard('huiyoustone@gmail.com')}
                />
              </div>
              <div className="flex items-center relative">
                <Mail size={16} className="mr-2" />
                {copiedEmail === 'jinestone1118@gmail.com' && (
                  <span className="absolute left-0 -top-8 bg-green-500 text-white px-2 py-1 rounded text-sm whitespace-nowrap z-50">
                    已複製！
                  </span>
                )}
                <span className={`transition-colors duration-300 ${copiedEmail === 'jinestone1118@gmail.com' ? 'text-amber-700' : 'text-gray-800'}`}>
                  jinestone1118@gmail.com
                </span>
                <Copy 
                  size={20} 
                  className={`ml-2 cursor-pointer p-1 transition-colors duration-300 ${copiedEmail === 'jinestone1118@gmail.com' ? 'text-amber-700' : 'text-gray-400 hover:text-amber-700'}`}
                  onClick={() => copyEmailToClipboard('jinestone1118@gmail.com')}
                />
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1" />
                <span>花蓮縣花蓮市美工六街20之6號</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:items-end justify-center">
            <div className="text-sm text-gray-600">
              <p>統編：24245053 蕙佑石材股份有限公司</p>
              <p className="mt-4">© 2025 蕙佑石材. All Rights Reserved.</p>
            </div>
            <Link to="/" className="mt-4 inline-block px-4 py-2 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
              回首頁
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;