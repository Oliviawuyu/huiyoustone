import { ReactNode } from 'react';

interface HeroSectionProps {
  backgroundImage: string;
  children: ReactNode;
  overlay?: boolean;
  height?: string;
  backgroundSize?: 'cover' | 'contain';
  overlayOpacity?: 'light' | 'medium' | 'dark';
}

const HeroSection = ({ 
  backgroundImage, 
  children, 
  overlay = true,
  height = 'h-[70vh]',
  backgroundSize = 'cover',
  overlayOpacity = 'medium'
}: HeroSectionProps) => {
  const backgroundClass = backgroundSize === 'cover' ? 'bg-cover bg-center' : 'bg-no-repeat bg-center';
  
  // 遮罩透明度設定
  const overlayClasses = {
    light: 'bg-gradient-to-b from-black/20 via-black/30 to-black/40',
    medium: 'bg-gradient-to-b from-black/30 via-black/40 to-black/50',
    dark: 'bg-gradient-to-b from-black/40 via-black/50 to-black/60'
  };
  
  return (
    <section 
      className={`relative ${height} ${backgroundClass} flex items-center justify-center overflow-hidden`}
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: backgroundSize === 'contain' ? 'contain' : undefined,
        backgroundAttachment: backgroundSize === 'cover' ? 'fixed' : 'scroll'
      }}
    >
      {/* 主要遮罩層 */}
      {overlay && (
        <div className={`absolute inset-0 ${overlayClasses[overlayOpacity]} transition-opacity duration-500`}></div>
      )}
      
      {/* 裝飾性漸變邊框 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent shimmer-effect"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent shimmer-effect"></div>
      </div>
      
      {/* 動態光效背景 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-400/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-orange-400/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-20 h-20 bg-yellow-400/15 rounded-full filter blur-2xl animate-pulse delay-2000"></div>
      </div>
      
      {/* 幾何裝飾元素 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-2 h-2 bg-white/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-amber-400/30 rotate-45 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1500"></div>
      </div>
      
      {/* 主要內容區域 */}
      <div className="relative z-20 container mx-auto px-4 w-full">
        <div className="transform transition-all duration-1000 ease-out animate-fade-in">
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;