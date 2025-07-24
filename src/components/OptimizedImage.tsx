import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({
  src,
  alt,
  title,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  onLoad,
  onError
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // 如果是高優先級圖片，設置為 eager loading
  const loadingStrategy = priority ? 'eager' : loading;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ 
            width: width ? `${width}px` : '100%', 
            height: height ? `${height}px` : '100%' 
          }}
        >
          <div className="text-gray-400 text-sm">載入中...</div>
        </div>
      )}
      
      {hasError ? (
        <div 
          className="flex items-center justify-center bg-gray-100 text-gray-500"
          style={{ 
            width: width ? `${width}px` : '100%', 
            height: height ? `${height}px` : '200px' 
          }}
        >
          <div className="text-center">
            <div className="text-lg mb-2">🖼️</div>
            <div className="text-sm">圖片載入失敗</div>
          </div>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          title={title || alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          width={width}
          height={height}
          loading={loadingStrategy}
          onLoad={handleLoad}
          onError={handleError}
          // SEO 相關屬性
          itemProp="image"
        />
      )}
    </div>
  );
};

export default OptimizedImage; 