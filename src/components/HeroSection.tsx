import { ReactNode } from 'react';

interface HeroSectionProps {
  backgroundImage: string;
  children: ReactNode;
  overlay?: boolean;
  height?: string;
}

const HeroSection = ({ 
  backgroundImage, 
  children, 
  overlay = true,
  height = 'h-[70vh]'
}: HeroSectionProps) => {
  return (
    <section 
      className={`relative ${height} bg-cover bg-center flex items-center justify-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black/30"></div>
      )}
      <div className="relative z-10 container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

export default HeroSection;