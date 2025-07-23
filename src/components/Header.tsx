import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/90 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo1.png" 
            alt="蕙佑石材-石材公司,花蓮石材公司" 
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-800 hover:text-gray-600 font-medium">
            首頁
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-gray-600 font-medium">
            公司簡介
          </Link>
          <Link to="/gallery" className="text-gray-800 hover:text-gray-600 font-medium">
            礦區實照
          </Link>
          <Link to="/products" className="text-gray-800 hover:text-gray-600 font-medium">
            嚴選石材
          </Link>
          <Link to="/cases" className="text-gray-800 hover:text-gray-600 font-medium">
            案例分享
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-gray-600 font-medium">
            聯絡我們
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-800 hover:text-gray-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              首頁
            </Link>
            <Link 
              to="/about" 
              className="text-gray-800 hover:text-gray-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              公司簡介
            </Link>
            <Link 
              to="/gallery" 
              className="text-gray-800 hover:text-gray-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              礦區實照
            </Link>
            <Link 
              to="/products" 
              className="text-gray-800 hover:text-gray-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              嚴選石材
            </Link>
            <Link 
              to="/cases" 
              className="text-gray-800 hover:text-gray-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              案例分享
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-800 hover:text-gray-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              聯絡我們
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;