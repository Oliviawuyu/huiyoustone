import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import GoogleMap from '../components/GoogleMap';
import SEOHead from '../components/SEOHead';
import { usePageEngagement, useContactTracking } from '../hooks/useGA4';
import { useState } from 'react';
import { Copy } from 'lucide-react';

const ContactPage = () => {
  // GA4 Hooks
  usePageEngagement('聯絡頁面');
  const { trackContact } = useContactTracking();

  // 複製提示狀態
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  // 聯絡互動追蹤函數
  const handleContactClick = (method: 'phone' | 'email') => {
    trackContact(method);
  };

  // 複製email地址函數
  const copyEmailToClipboard = (email: string) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopiedEmail(email);
      handleContactClick('email');
      // 3秒後清除提示
      setTimeout(() => {
        setCopiedEmail(null);
      }, 3000);
    }).catch(err => {
      console.error('複製失敗:', err);
    });
  };

  // 結構化資料 - 聯絡頁面
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "蕙佑石材",
      "telephone": "+886-3-8235309",
      "email": "huiyoustone@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "美工六街20之6號",
        "addressLocality": "花蓮市", 
        "addressRegion": "花蓮縣",
        "postalCode": "",
        "addressCountry": "TW"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.9871,
        "longitude": 121.6014
      },
      "openingHours": "Mo-Fr 08:00-17:00"
    }
  };

  return (
    <div>
      <SEOHead 
        title="聯絡我們 - 蕙佑石材 | 花蓮石材公司聯絡方式 | 免費諮詢"
        description="聯絡蕙佑石材獲取專業石材服務諮詢。電話: 03-8235309，地址: 花蓮縣花蓮市美工六街20之6號。提供免費石材工程估價和專業建議。"
        keywords="蕙佑石材聯絡方式,花蓮石材公司電話,石材工程諮詢,免費估價,石材公司地址,聯絡蕙佑石材"
        canonical="https://huiyoustone.tw/contact"
        structuredData={structuredData}
      />
      <HeroSection 
        backgroundImage="/pic/share/abg-02.png"
        height="h-[40vh]"
        backgroundSize="contain"
        overlayOpacity="light"
      >
        <div className="text-center text-white">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">聯絡我們</h1>
            <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg">Contact Us</p>
          </div>
        </div>
      </HeroSection>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle chineseTitle="聯絡資訊" englishTitle="Contact Information" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-700">
                  <h3 className="text-lg font-bold mb-3 text-amber-700">電話</h3>
                  <div className="space-y-1">
                    <a 
                      href="tel:03-8235309" 
                      className="text-gray-700 hover:text-amber-700 cursor-pointer block"
                      onClick={() => handleContactClick('phone')}
                    >
                      03-8235309
                    </a>
                    <a 
                      href="tel:03-8246298" 
                      className="text-gray-700 hover:text-amber-700 cursor-pointer block"
                      onClick={() => handleContactClick('phone')}
                    >
                      03-8246298
                    </a>
                    <a 
                      href="tel:0918-140-700" 
                      className="text-gray-700 hover:text-amber-700 cursor-pointer block"
                      onClick={() => handleContactClick('phone')}
                    >
                      0918-140-700
                    </a>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-700">
                  <h3 className="text-lg font-bold mb-3 text-amber-700">Email</h3>
                  <div className="text-gray-700 block relative flex items-center mb-2">
                    {copiedEmail === 'huiyoustone@gmail.com' && (
                      <span className="absolute left-0 -top-8 bg-green-500 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                        已複製！
                      </span>
                    )}
                    <span className={`transition-colors duration-300 ${copiedEmail === 'huiyoustone@gmail.com' ? 'text-amber-700' : 'text-gray-700'}`}>
                      huiyoustone@gmail.com
                    </span>
                    <Copy 
                      size={20} 
                      className={`ml-2 cursor-pointer p-1 transition-colors duration-300 ${copiedEmail === 'huiyoustone@gmail.com' ? 'text-amber-700' : 'text-gray-400 hover:text-amber-700'}`}
                      onClick={() => copyEmailToClipboard('huiyoustone@gmail.com')}
                    />
                  </div>
                  <div className="text-gray-700 block relative flex items-center">
                    {copiedEmail === 'jinestone1118@gmail.com' && (
                      <span className="absolute left-0 -top-8 bg-green-500 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                        已複製！
                      </span>
                    )}
                    <span className={`transition-colors duration-300 ${copiedEmail === 'jinestone1118@gmail.com' ? 'text-amber-700' : 'text-gray-700'}`}>
                      jinestone1118@gmail.com
                    </span>
                    <Copy 
                      size={20} 
                      className={`ml-2 cursor-pointer p-1 transition-colors duration-300 ${copiedEmail === 'jinestone1118@gmail.com' ? 'text-amber-700' : 'text-gray-400 hover:text-amber-700'}`}
                      onClick={() => copyEmailToClipboard('jinestone1118@gmail.com')}
                    />
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-700">
                  <h3 className="text-lg font-bold mb-3 text-amber-700">地址</h3>
                  <p className="text-gray-700">花蓮縣花蓮市美工六街20之6號</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-700">
                  <h3 className="text-lg font-bold mb-3 text-amber-700">營業時間</h3>
                  <div className="space-y-1">
                    <p className="text-gray-700">週一至週五: 9:00 - 18:00</p>
                    <p className="text-gray-700">週六: 9:00 - 15:00</p>
                    <p className="text-gray-700 font-medium">週日: 休息</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="sticky top-8">
                  <h3 className="text-xl font-bold mb-4 text-amber-700">位置地圖</h3>
                  <GoogleMap 
                    address="花蓮縣花蓮市美工六街20之6號"
                    latitude={23.9871}
                    longitude={121.6014}
                    zoom={15}
                    className="w-full h-96 rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;