import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const FloatingQuickLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { to: '/', label: '首頁' },
    { to: '/about', label: '公司簡介' },
    { to: '/gallery', label: '礦區實照' },
    { to: '/products', label: '嚴選石材' },
    { to: '/cases', label: '案例分享' },
    { to: '/contact', label: '聯絡我們' },
  ];

  return (
    <div className="fixed right-6 top-24 z-40">
      {/* Quick links panel */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-48 border border-gray-200 animate-in fade-in slide-in-from-right-5 duration-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-amber-700">快速導覽</h3>
            <button 
              onClick={toggleOpen}
              className="text-gray-500 hover:text-gray-700"
              aria-label="關閉快速導覽"
            >
              <X size={18} />
            </button>
          </div>
          
          <nav className="space-y-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block py-2 px-3 text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded transition-colors"
                onClick={toggleOpen}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
      
      {/* Toggle button */}
      <button
        onClick={toggleOpen}
        className={cn(
          "bg-amber-700 text-white p-3 rounded-full shadow-lg hover:bg-amber-800 transition-all",
          isOpen ? "rotate-90" : "rotate-0"
        )}
        aria-label={isOpen ? "關閉快速導覽" : "開啟快速導覽"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  );
};

export default FloatingQuickLinks;