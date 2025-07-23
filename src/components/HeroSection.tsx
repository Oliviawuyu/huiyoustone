import { ReactNode } from 'react';

interface HeroSectionProps {
  backgroundImage: string;
  children: ReactNode;
  overlay?: boolean;
  height?: string;
  backgroundSize?: 'cover' | 'contain';
  overlayOpacity?: 'light0'|'light' | 'medium' | 'dark';
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
    light0: '',
    light: 'bg-gradient-to-b from-black/20 via-black/30 to-black/40',
    medium: 'bg-gradient-to-b from-black/30 via-black/40 to-black/50',
    dark: 'bg-gradient-to-b from-black/40 via-black/50 to-black/60'
  };
  
  return (
    <section 
      className={`relative ${height} ${backgroundClass} flex items-center justify-center overflow-hidden`}
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: backgroundSize === 'contain' ? 'contain' : 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
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