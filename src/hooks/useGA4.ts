import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackBusinessEvent } from '../utils/analytics';

// 路由追蹤Hook
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // 追蹤頁面瀏覽
    const pagePath = location.pathname + location.search;
    const pageTitle = getPageTitle(location.pathname);
    
    trackPageView(pagePath, pageTitle);
    
    // 根據路由判斷服務興趣
    const serviceType = getServiceTypeFromPath(location.pathname);
    if (serviceType) {
      trackBusinessEvent.serviceInterest(serviceType);
    }
    
  }, [location]);
};

// 根據路由路徑獲取頁面標題
const getPageTitle = (pathname: string): string => {
  const titles: Record<string, string> = {
    '/': '蕙佑石材 - 首頁',
    '/about': '公司簡介 - 蕙佑石材',
    '/products': '嚴選石材 - 蕙佑石材',
    '/gallery': '礦區實照 - 蕙佑石材',
    '/cases': '案例分享 - 蕙佑石材',
    '/contact': '聯絡我們 - 蕙佑石材'
  };
  
  return titles[pathname] || '蕙佑石材';
};

// 根據路由判斷服務類型
const getServiceTypeFromPath = (pathname: string): string | null => {
  const serviceMap: Record<string, string> = {
    '/products': '石材產品瀏覽',
    '/cases': '工程案例查看',
    '/gallery': '礦區實照瀏覽',
    '/contact': '聯絡諮詢',
    '/about': '公司了解'
  };
  
  return serviceMap[pathname] || null;
};

// 頁面停留時間追蹤Hook
export const usePageEngagement = (pageName: string) => {
  useEffect(() => {
    const startTime = Date.now();
    
    // 追蹤頁面離開時的停留時間
    const handleBeforeUnload = () => {
      const timeSpent = Date.now() - startTime;
      trackBusinessEvent.pageEngagement(pageName, timeSpent);
    };
    
    // 追蹤路由變化時的停留時間
    const handleVisibilityChange = () => {
      if (document.hidden) {
        const timeSpent = Date.now() - startTime;
        trackBusinessEvent.pageEngagement(pageName, timeSpent);
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      // 組件卸載時追蹤停留時間
      const timeSpent = Date.now() - startTime;
      trackBusinessEvent.pageEngagement(pageName, timeSpent);
      
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [pageName]);
};

// 聯絡互動追蹤Hook
export const useContactTracking = () => {
  const trackContact = (method: 'phone' | 'email' | 'line' | 'facebook') => {
    trackBusinessEvent.contactUs(method);
  };
  
  return { trackContact };
};

// 產品互動追蹤Hook
export const useProductTracking = () => {
  const trackProductView = (productName: string, category?: string) => {
    trackBusinessEvent.viewProduct(productName, category);
  };
  
  const trackProductInquiry = (productName: string) => {
    trackBusinessEvent.inquireProduct(productName);
  };
  
  return { 
    trackProductView, 
    trackProductInquiry 
  };
};

// 圖片庫追蹤Hook
export const useGalleryTracking = () => {
  const trackGalleryView = (galleryType: string, imageId?: string) => {
    trackBusinessEvent.viewGallery(galleryType, imageId);
  };
  
  return { trackGalleryView };
}; 