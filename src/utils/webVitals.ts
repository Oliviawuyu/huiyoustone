// Web Vitals 監控工具
interface WebVitalMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  rating: 'good' | 'needs-improvement' | 'poor';
}

// 發送數據到分析工具 (使用新的GA4配置)
function sendToAnalytics(metric: WebVitalMetric) {
  // 使用新的GA4配置發送數據
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
      metric_rating: metric.rating,
      metric_delta: metric.delta
    });
  }

  // 也可以發送到控制台進行調試
  console.log('Web Vital:', metric);
}

// 監控 Core Web Vitals
export function measureWebVitals() {
  // 只在支持的瀏覽器中運行
  if (typeof window === 'undefined') return;

  // 嘗試動態導入 web-vitals 庫 (如果已安裝)
  try {
    // @ts-ignore - 動態導入，庫可能不存在
    import('web-vitals').then((webVitals: any) => {
      if (webVitals.getCLS) webVitals.getCLS(sendToAnalytics);
      if (webVitals.getFID) webVitals.getFID(sendToAnalytics);
      if (webVitals.getFCP) webVitals.getFCP(sendToAnalytics);
      if (webVitals.getLCP) webVitals.getLCP(sendToAnalytics);
      if (webVitals.getTTFB) webVitals.getTTFB(sendToAnalytics);
    }).catch(() => {
      // 如果 web-vitals 沒有安裝，使用簡化的監控
      measureBasicMetrics();
    });
  } catch {
    // 如果動態導入失敗，使用基本監控
    measureBasicMetrics();
  }
}

// 基本性能指標監控 (無需額外庫)
function measureBasicMetrics() {
  // 監控頁面載入時間
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      const metrics = {
        // DOM Content Loaded
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        // 完整頁面載入時間
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        // 首次位元組時間 (TTFB)
        ttfb: navigation.responseStart - navigation.requestStart,
        // DNS 查找時間
        dnsLookup: navigation.domainLookupEnd - navigation.domainLookupStart,
        // TCP 連接時間
        tcpConnect: navigation.connectEnd - navigation.connectStart,
      };

      console.log('Performance Metrics:', metrics);
      
      // 發送到GA4
      Object.entries(metrics).forEach(([name, value]) => {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'performance_metric', {
            event_category: 'Performance',
            event_label: name,
            value: Math.round(value),
            non_interaction: true,
          });
        }
      });
    }
  });

  // 監控資源載入時間
  window.addEventListener('load', () => {
    const resources = performance.getEntriesByType('resource');
    const imageResources = resources.filter(resource => 
      resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)
    );

    if (imageResources.length > 0) {
      const avgImageLoadTime = imageResources.reduce((sum, resource) => 
        sum + resource.duration, 0) / imageResources.length;
      
      console.log('Average image load time:', avgImageLoadTime, 'ms');
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'avg_image_load_time', {
          event_category: 'Performance',
          value: Math.round(avgImageLoadTime),
          non_interaction: true,
        });
      }
    }
  });
}

// 監控頁面可見性變化 (用於分析用戶行為)
export function trackPageVisibility() {
  let startTime = Date.now();
  let isVisible = true;

  document.addEventListener('visibilitychange', () => {
    const now = Date.now();
    
    if (document.hidden) {
      // 頁面變為不可見
      if (isVisible) {
        const timeOnPage = now - startTime;
        console.log('Time on page:', timeOnPage, 'ms');
        
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'page_time', {
            event_category: 'Engagement',
            value: Math.round(timeOnPage / 1000), // 轉換為秒
            non_interaction: true,
          });
        }
        
        isVisible = false;
      }
    } else {
      // 頁面變為可見
      startTime = now;
      isVisible = true;
    }
  });
}

// 初始化所有監控
export function initWebVitalsTracking() {
  measureWebVitals();
  trackPageVisibility();
}

// 擴展全域Window接口以支援GA4
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
} 