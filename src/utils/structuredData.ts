// 結構化資料管理工具
export interface StructuredDataConfig {
  companyInfo: {
    name: string;
    description: string;
    url: string;
    telephone: string;
    email: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      addressCountry: string;
    };
    geo: {
      latitude: number;
      longitude: number;
    };
    foundingDate: string;
    openingHours: string;
  };
}

// 公司基本資料配置
export const COMPANY_CONFIG: StructuredDataConfig = {
  companyInfo: {
    name: "蕙佑石材",
    description: "蕙佑石材經營團隊於2008年成立，專營各種石材批售。秉持著服務至上的理念，並配合流行趨勢及建築設計業者之需求。",
    url: "https://huiyoustone.tw",
    telephone: "+886-3-8235309",
    email: "huiyoustone@gmail.com",
    address: {
      streetAddress: "美工六街20之6號",
      addressLocality: "花蓮市",
      addressRegion: "花蓮縣",
      addressCountry: "TW"
    },
    geo: {
      latitude: 23.9871,
      longitude: 121.6014
    },
    foundingDate: "2008",
    openingHours: "Mo-Fr 08:00-17:00"
  }
};

// 本地商業結構化資料
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY_CONFIG.companyInfo.name,
    "description": COMPANY_CONFIG.companyInfo.description,
    "url": COMPANY_CONFIG.companyInfo.url,
    "telephone": COMPANY_CONFIG.companyInfo.telephone,
    "email": COMPANY_CONFIG.companyInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_CONFIG.companyInfo.address.streetAddress,
      "addressLocality": COMPANY_CONFIG.companyInfo.address.addressLocality,
      "addressRegion": COMPANY_CONFIG.companyInfo.address.addressRegion,
      "addressCountry": COMPANY_CONFIG.companyInfo.address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": COMPANY_CONFIG.companyInfo.geo.latitude,
      "longitude": COMPANY_CONFIG.companyInfo.geo.longitude
    },
    "foundingDate": COMPANY_CONFIG.companyInfo.foundingDate,
    "openingHours": COMPANY_CONFIG.companyInfo.openingHours
  };
} 