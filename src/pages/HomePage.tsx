import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import GoogleMap from '../components/GoogleMap';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { usePageEngagement, useContactTracking } from '../hooks/useGA4';
import { useState } from 'react';
import { Copy } from 'lucide-react';

const HomePage = () => {
  // GA4 Hooks
  usePageEngagement('首頁');
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

  // 結構化資料 - 本地商業
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "蕙佑石材",
    "description": "蕙佑石材經營團隊於2008年成立，專營各種石材批售。秉持著服務至上的理念，並配合流行趨勢及建築設計業者之需求。",
    "url": "https://huiyoustone.tw",
    "telephone": "+886-3-8235309",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "美工六街20之6號",
      "addressLocality": "花蓮市",
      "addressRegion": "花蓮縣",
      "addressCountry": "TW"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.9871,
      "longitude": 121.6014
    },
    "openingHours": "Mo-Fr 08:00-17:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 23.9871,
        "longitude": 121.6014
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "石材產品服務",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "大理石工程施工"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "石材加工裝潢"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "石材電視牆施工"
          }
        }
      ]
    }
  };

  return (
    <div>
      <SEOHead 
        title="蕙佑石材 - 專業石材公司 | 花蓮大理石工廠 | 石材工程施工"
        description="蕙佑石材於2008年成立，專營大理石、花崗岩等石材批售。提供石材工程、施工、加工、裝潢等一站式服務。服務範圍涵蓋花蓮、台北，是您值得信賴的石材公司。"
        keywords="蕙佑石材,石材公司,花蓮石材公司,大理石工廠,花蓮大理石工廠,石材工程,大理石施工,石材加工,石材裝潢,石材電視牆,大理石檯面,石材地坪,花蓮石材,台北石材"
        ogImage="/logo1.png"
        canonical="https://huiyoustone.tw/"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <HeroSection 
        backgroundImage="/pic/home/義大利灰珍珠_220524_8.jpg"
        overlayOpacity="light0"
        height="h-screen"
      >
        <div className="text-center text-white md:mt-[280px] mt-[200px]">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 pt-2 tracking-widest" style={{textShadow: '4px 4px 7px rgba(0,0,0,0.8)'}}>HUIYOU</h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-widest" style={{textShadow: '4px 4px 7px rgba(0,0,0,0.8)'}}>STONE</h2>
          <p className="text-2xl md:text-3xl mb-2 font-bold" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.5)'}}>天然的石材</p>
          <div className="flex justify-center items-center">
            <div className="w-8 md:w-10 h-0.5 bg-white"></div>
            <p className="mx-2 text-lg md:text-2xl font-bold" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.5)'}}>造就完美的居家生活</p>
            <div className="w-8 md:w-10 h-0.5 bg-white"></div>
          </div>
        </div>
      </HeroSection>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <SectionTitle chineseTitle="關於我們" englishTitle="About" />
              <p className="text-gray-700 mb-6">
              蕙 佑 ⽯ 材 經 營 團 隊 於 2 0 0 8 年 成 ⽴ ， 專 營 各 種 ⽯ 材 批 售 。 秉 持 著
服 務 至 上 的 理 念 ， 並 配 合 流 ⾏ 趨 勢 及 建 築 設 計 業 者 之 需 求 。</p>
        <p className="text-gray-700 mb-6">
近 年 從 國 外 進 ⼜ 多 樣 化 ⽯ 材 ， 質 地 堅 固 ， 紋 理 景 緻 多 樣 ， 展 現
⼤ ⾃ 然 鬼 斧 神 ⼯ 之 驚 奇 ， 並 獲 五 星 級 連 鎖 觀 光 飯 店 及 北 部 豪 宅
建 案 採 購 運 ⽤ ， 相 得 益 彰 迭 獲 好 評 。
                </p>
              <p className="text-gray-500 mb-6">Huiyou Stone Materials management team was established in 2008, specializing in the wholesale of various stone materials. We uphold the principle of service excellence while adapting to current trends and meeting the needs of architectural design professionals.</p>
              <p className="text-gray-500 mb-6">In recent years, we have imported diversified stone materials from overseas, featuring solid textures and varied patterns that showcase nature's extraordinary craftsmanship. These materials have been purchased and utilized by five-star chain resort hotels and luxury residential developments in northern Taiwan, creating complementary effects and receiving widespread acclaim.</p>
    
            </div>
            <div>
              <img 
                src="/pic/home/LINE_ALBUM_義大利灰珍珠_220524_5.jpg" 
                alt="蕙佑石材" 
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 opacity-10 text-gray-200 overflow-hidden">
          <div className="text-[20rem] font-bold tracking-wider">HUIYOU</div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle chineseTitle="多樣化的石材設計" englishTitle="Design" />
          <p className="text-gray-700 mb-6">現今為了推廣石材文化，讓更多人可用平實的價格選購石材產品，做為美化居家裝潢的建材，如：電視牆、檯面、地板、樓梯等。提供多樣化的石材設計，讓追求不凡品味的人士擁有專屬的風格選擇。</p>
          <p className="text-gray-700 mb-6">經由建築工程設計讓空間的美學活現，且具備「普及性及共享化」提升居家質感多次贏得工程設計公司和建設公司的採用，將居住者所期待、嚮往的生活型態，配合設計巧妙融合，提供最貼近人心的空間規劃設計。</p>
          <p className="text-gray-500 mb-6">Today, in order to promote stone material culture, we enable more people to purchase stone products at affordable prices as building materials to beautify home decoration, such as TV walls, countertops, flooring, stairs, and more. We provide diversified stone designs, allowing people who pursue extraordinary taste to have their own exclusive style choices.</p>
          <p className="text-gray-500 mb-6">Through architectural and engineering design, we bring spatial aesthetics to life, featuring "accessibility and shareability" that enhances home quality. We have repeatedly won adoption by engineering design companies and construction companies, integrating the lifestyle that residents expect and aspire to with clever design fusion, providing the most heartfelt spatial planning and design.</p>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-8">
          <img 
              src="/pic/home/義大利灰珍珠_220524_8.jpg" 
              alt="石材設計" 
              className="w-full w-auto"
            />
            <img 
              src="/pic/home/義大利灰珍珠_220524_10.jpg" 
              alt="石材設計" 
              className="w-full w-auto"
            />
            <img 
              src="/pic/home/義大利灰珍珠_220524_0 (1).jpg" 
              alt="石材設計" 
              className="w-full w-auto"
            />
      
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionTitle chineseTitle="聯絡我們" englishTitle="Contact us" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-4 text-gray-700">
                <a 
                  href="tel:03-8235309" 
                  className="block hover:text-amber-700 cursor-pointer"
                  onClick={() => handleContactClick('phone')}
                >
                  03-8235309
                </a>
                <a 
                  href="tel:0918-140-700" 
                  className="block hover:text-amber-700 cursor-pointer"
                  onClick={() => handleContactClick('phone')}
                >
                  0918-140-700
                </a>
                <div className="block relative flex items-center">
                  {copiedEmail === 'huiyoustone@gmail.com' && (
                    <span className="absolute left-0 -top-8 bg-green-500 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                      已複製！
                    </span>
                  )}
                  <span className={`transition-colors duration-300 ${copiedEmail === 'huiyoustone@gmail.com' ? 'text-amber-700' : 'text-gray-700'}`}>
                    Email: huiyoustone@gmail.com
                  </span>
                  <Copy 
                    size={20} 
                    className={`ml-2 cursor-pointer p-1 transition-colors duration-300 ${copiedEmail === 'huiyoustone@gmail.com' ? 'text-amber-700' : 'text-gray-400 hover:text-amber-700'}`}
                    onClick={() => copyEmailToClipboard('huiyoustone@gmail.com')}
                  />
                </div>
                <div className="block relative flex items-center">
                  {copiedEmail === 'jinestone1118@gmail.com' && (
                    <span className="absolute left-0 -top-8 bg-green-500 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                      已複製！
                    </span>
                  )}
                  <span className={`transition-colors duration-300 ${copiedEmail === 'jinestone1118@gmail.com' ? 'text-amber-700' : 'text-gray-700'}`}>
                    Email: jinestone1118@gmail.com
                  </span>
                  <Copy 
                    size={20} 
                    className={`ml-2 cursor-pointer p-1 transition-colors duration-300 ${copiedEmail === 'jinestone1118@gmail.com' ? 'text-amber-700' : 'text-gray-400 hover:text-amber-700'}`}
                    onClick={() => copyEmailToClipboard('jinestone1118@gmail.com')}
                  />
                </div>
                <p>花蓮縣花蓮市美工六街20之6號</p>
              </div>
            </div>
            
            <div>
              <GoogleMap 
                address="花蓮縣花蓮市美工六街20之6號"
                latitude={23.9871}
                longitude={121.6014}
                zoom={15}
                className="w-full h-80"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;