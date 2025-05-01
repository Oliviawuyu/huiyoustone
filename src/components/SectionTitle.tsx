import { ReactNode } from 'react';

interface SectionTitleProps {
  chineseTitle: string;
  englishTitle?: string;
  align?: 'left' | 'center' | 'right';
  children?: ReactNode;
}

const SectionTitle = ({ 
  chineseTitle, 
  englishTitle, 
  align = 'left',
  children 
}: SectionTitleProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`mb-8 ${alignmentClasses[align]}`}>
      <div className="flex items-center gap-3">
        <div className="w-1 h-6 bg-amber-700"></div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          {chineseTitle}
          {englishTitle && (
            <span className="ml-3 text-amber-700 font-normal">{englishTitle}</span>
          )}
        </h2>
      </div>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default SectionTitle;