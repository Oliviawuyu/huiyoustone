import { useEffect, useState } from 'react';

// 從 window 物件獲取 API Key，避免在建置時被硬編碼
const getApiKey = () => {
  const apiKey = (window as any).GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';
  console.log('Google Maps API Key:', apiKey ? '已設置' : '未設置');
  return apiKey;
};

export const useGoogleMaps = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = getApiKey();
    
    // 檢查 API Key 是否已設置
    if (!apiKey || apiKey === 'YOUR_GOOGLE_MAPS_API_KEY') {
      setError('請設置 Google Maps API Key');
      return;
    }

    // 檢查是否已經載入
    if (window.google && window.google.maps) {
      console.log('Google Maps 已載入');
      setIsLoaded(true);
      return;
    }

    // 檢查是否已經在載入中
    if (document.querySelector('script[src*="maps.googleapis.com"]')) {
      console.log('Google Maps 腳本正在載入中...');
      const checkLoaded = () => {
        if (window.google && window.google.maps) {
          console.log('Google Maps 載入完成');
          setIsLoaded(true);
        } else {
          setTimeout(checkLoaded, 100);
        }
      };
      checkLoaded();
      return;
    }

    // 載入 Google Maps API
    console.log('開始載入 Google Maps API...');
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      console.log('Google Maps API 腳本載入成功');
      if (window.google && window.google.maps) {
        console.log('Google Maps 物件可用');
        setIsLoaded(true);
      } else {
        console.error('Google Maps 物件不可用');
        setError('Google Maps 物件載入失敗');
      }
    };

    script.onerror = (e) => {
      console.error('Google Maps API 腳本載入失敗:', e);
      setError('無法載入 Google Maps API');
    };

    document.head.appendChild(script);

    return () => {
      // 清理腳本標籤
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return { isLoaded, error };
}; 