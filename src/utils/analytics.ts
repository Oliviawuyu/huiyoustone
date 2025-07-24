// Google Analytics 4 配置和工具
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// 網站基本配置
export const WEBSITE_CONFIG = {
  domain: 'https://huiyoustone.tw',
  siteName: '蕙佑石材',
  description: '蕙佑石材經營團隊於2008年成立，專營各種石材批售。秉持著服務至上的理念，並配合流行趨勢及建築設計業者之需求。'
};

// GA4 測量 ID - 蕙佑石材的實際GA4測量ID
export const GA4_MEASUREMENT_ID = 'G-QE3GZ94RRG';

// 初始化 Google Analytics 4
export const initGA4 = (measurementId: string = GA4_MEASUREMENT_ID) => {
  // 只在瀏覽器環境中執行
  if (typeof window === 'undefined') return;

  // 檢查是否已經載入過 GA4
  if (window.gtag) {
    console.log('GA4 already initialized');
    return;
  }

  // 動態載入 GA4 腳本
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // 初始化 dataLayer 和 gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  // 配置 GA4
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    // 基本配置
    page_title: document.title,
    page_location: window.location.href,
    
    // 隱私設置
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure',
    
    // 增強電子商務和事件追蹤
    send_page_view: true,
    
    // 自定義參數
    custom_map: {
      'custom_parameter_1': 'page_type',
      'custom_parameter_2': 'user_type'
    }
  });

  console.log('GA4 initialized successfully');
};

// 追蹤頁面瀏覽
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', GA4_MEASUREMENT_ID, {
    page_path: pagePath,
    page_title: pageTitle || document.title,
    page_location: window.location.href
  });

  console.log('Page view tracked:', pagePath);
};

// 追蹤自定義事件
export const trackEvent = (
  eventName: string, 
  parameters: Record<string, any> = {}
) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', eventName, {
    event_category: parameters.category || 'engagement',
    event_label: parameters.label,
    value: parameters.value,
    non_interaction: parameters.non_interaction || false,
    ...parameters
  });

  console.log('Event tracked:', eventName, parameters);
};

// 追蹤石材相關的業務事件
export const trackBusinessEvent = {
  // 產品查看
  viewProduct: (productName: string, category: string = '石材產品') => {
    trackEvent('view_item', {
      category: 'product',
      label: productName,
      item_category: category,
      item_name: productName
    });
  },

  // 聯絡我們互動
  contactUs: (method: 'phone' | 'email' | 'line' | 'facebook') => {
    trackEvent('contact_interaction', {
      category: 'contact',
      label: method,
      contact_method: method
    });
  },

  // 產品詢價
  inquireProduct: (productName: string) => {
    trackEvent('inquiry', {
      category: 'conversion',
      label: productName,
      product_name: productName
    });
  },

  // 頁面停留時間
  pageEngagement: (pageName: string, timeSpent: number) => {
    trackEvent('page_engagement', {
      category: 'engagement',
      label: pageName,
      value: Math.round(timeSpent / 1000), // 轉換為秒
      page_name: pageName
    });
  },

  // 圖片檢視 (礦區實照、案例等)
  viewGallery: (galleryType: string, imageId?: string) => {
    trackEvent('view_gallery', {
      category: 'content',
      label: galleryType,
      gallery_type: galleryType,
      image_id: imageId
    });
  },

  // 服務興趣 (根據頁面瀏覽判斷)
  serviceInterest: (serviceType: string) => {
    trackEvent('service_interest', {
      category: 'lead',
      label: serviceType,
      service_type: serviceType
    });
  }
};

// 設置用戶屬性
export const setUserProperties = (properties: Record<string, any>) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', GA4_MEASUREMENT_ID, {
    custom_map: properties
  });
};

// 設置電子商務追蹤 (如果適用)
export const trackPurchase = (transactionId: string, items: any[]) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', 'purchase', {
    transaction_id: transactionId,
    value: items.reduce((sum, item) => sum + (item.price || 0), 0),
    currency: 'TWD',
    items: items
  });
};

// 調試模式
export const enableDebugMode = () => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', GA4_MEASUREMENT_ID, {
    debug_mode: true
  });
  
  console.log('GA4 debug mode enabled');
};

// 檢查 GA4 是否正常運作
export const checkGA4Status = () => {
  if (typeof window === 'undefined') {
    console.log('GA4 Status: Server environment, GA4 not available');
    return false;
  }

  if (!window.gtag) {
    console.log('GA4 Status: Not initialized');
    return false;
  }

  console.log('GA4 Status: Initialized and ready');
  return true;
}; 