import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  structuredData?: object | object[];
}

const SEOHead = ({ 
  title, 
  description, 
  keywords = "", 
  ogImage = "/logo1.png",
  ogType = "website",
  canonical,
  structuredData
}: SEOHeadProps) => {
  useEffect(() => {
    // 更新頁面標題
    document.title = title;

    // 更新 meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // 更新 meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    // 更新 Open Graph 標籤
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    if (ogImageMeta) {
      // 確保 ogImage 使用完整的 URL
      const fullImageUrl = ogImage.startsWith('http') ? ogImage : `https://huiyoustone.tw${ogImage}`;
      ogImageMeta.setAttribute('content', fullImageUrl);
    }

    const ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (ogTypeMeta) {
      ogTypeMeta.setAttribute('content', ogType);
    }

    // 設置 canonical URL
    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (canonicalLink) {
        canonicalLink.href = canonical;
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        canonicalLink.href = canonical;
        document.head.appendChild(canonicalLink);
      }
    }

    // 添加結構化資料
    if (structuredData) {
      // 移除現有的結構化資料腳本
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => script.remove());
      
      // 處理單個或多個結構化資料
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      
      dataArray.forEach((data, index) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }

  }, [title, description, keywords, ogImage, ogType, canonical, structuredData]);

  return null;
};

export default SEOHead; 