import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import SEOHead from '../components/SEOHead';
import { usePageEngagement, useContactTracking } from '../hooks/useGA4';

const AboutPage = () => {
  // GA4 Hooks
  usePageEngagement('公司簡介頁面');
  const { trackContact } = useContactTracking();

  // 聯絡互動追蹤函數
  const handleContactClick = (method: 'phone' | 'line' | 'facebook') => {
    trackContact(method);
  };

  // 結構化資料 - 關於我們頁面
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "蕙佑石材公司簡介",
      "description": "蕙佑石材成立於2008年，專營各種石材批售，提供大理石、花崗岩、石英石等優質石材。從選購、切割、加工到安裝，提供一站式專業服務。",
      "mainEntity": {
        "@type": "Organization",
        "name": "蕙佑石材",
        "alternateName": "Huiyou Stone",
        "foundingDate": "2008",
        "description": "蕙佑石材經營團隊於2008年成立，專營各種石材批售。秉持著服務至上的理念，並配合流行趨勢及建築設計業者之需求。",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "美工六街20之6號",
          "addressLocality": "花蓮市",
          "addressRegion": "花蓮縣",
          "addressCountry": "TW"
        },
        "telephone": "+886-3-8235309",
        "email": "huiyoustone@gmail.com",
        "url": "https://huiyoustone.tw",
        "logo": "https://huiyoustone.tw/logo1.png"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "蕙佑石材",
      "alternateName": "Huiyou Stone",
      "description": "蕙佑石材經營團隊於2008年成立，專營各種石材批售。秉持著服務至上的理念，並配合流行趨勢及建築設計業者之需求。",
      "url": "https://huiyoustone.tw",
      "logo": "https://huiyoustone.tw/logo1.png",
      "telephone": "+886-3-8235309",
      "email": "huiyoustone@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "美工六街20之6號",
        "addressLocality": "花蓮市",
        "addressRegion": "花蓮縣",
        "addressCountry": "TW"
      },
      "foundingDate": "2008"
    }
  ];

  return (
      <div>
        <SEOHead 
          title="公司簡介 - 蕙佑石材 | 2008年成立專業石材公司"
          description="蕙佑石材成立於2008年，專營各種石材批售，提供大理石、花崗岩、石英石等優質石材。從選購、切割、加工到安裝，提供一站式專業服務。"
          keywords="蕙佑石材公司簡介,石材公司歷史,專業石材團隊,石材批售,大理石公司,花崗岩供應商,石材加工廠"
          ogImage="/pic/about-01.jpg"
          canonical="https://huiyoustone.tw/about"
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
              <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">公司簡介</h1>
              <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg">About Us</p>
            </div>
          </div>
        </HeroSection>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <SectionTitle chineseTitle="關於蕙佑石材" englishTitle="About Us" />

              <div className="prose prose-lg max-w-none">
                <p>
                  蕙佑石材經營團隊於2008年成立，專營各種石材批售。秉持著服務至上的理念，並配合流行趨勢及建築設計業者之需求。
                </p>

                <p>
                  我們提供多樣化的石材選擇，包括大理石、花崗岩、石英石等，適用於各種室內外裝修需求。無論是地板、牆面、檯面或是藝術裝飾品，我們都能提供高品質的石材產品。
                </p>

                <p>
                  蕙佑石材擁有專業的團隊，從石材選購、切割、加工到安裝，提供一站式的服務。我們注重每一個細節，確保每一塊石材都能展現其獨特的紋理和質感。
                </p>

                <p>
                  我們的目標是透過優質的石材，為客戶打造舒適、美觀且耐用的生活空間。無論是住宅、商業空間還是公共建築，蕙佑石材都能滿足您的需求。
                </p>
              </div>
              <div className="mt-12">
                <img
                    src="/pic/logo/logo1去背.png"
                    alt="蕙佑石材"
                    className="w-1/2 md:w-1/3 h-auto rounded-lg shadow-lg p-10"
                />
              </div>
              <div className="mt-12">
                <img
                    src="/pic/home/義大利灰珍珠_220524_8.jpg"
                    alt="義大利灰珍珠"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="mt-12">
                <img
                    src="/pic/about-01.jpg"
                    alt="義大利灰珍珠"
                    className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>


        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <SectionTitle chineseTitle="聯絡我們" englishTitle="Contact Us" />

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">聯絡資訊</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                          <span className="font-semibold mr-2">電話：</span>
                          <a 
                            href="tel:0918-140700" 
                            className="hover:text-blue-600"
                            onClick={() => handleContactClick('phone')}
                          >
                            0918-140-700
                          </a>
                      </li>
                      <li className="flex items-start">
                        <span className="font-semibold mr-2">LINE：</span>
                        <span>jine1118</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">服務地區</h3>
                    <p className="text-gray-700 mb-4">
                      我們的服務遍及全台灣，包括台北、新北、桃園、新竹、台中、台南、高雄等地區。無論您在哪裡，我們都能提供專業的石材服務。
                    </p>
                    <div className="flex space-x-4 mt-6">
                      <a
                          href="https://www.facebook.com/huiyoustone/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                          onClick={() => handleContactClick('facebook')}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                        </svg>
                      </a>
                      <a
                          href="line://ti/p/~jine1118"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#06C755] text-white p-2 rounded-full hover:bg-[#05b44c] transition-colors"
                          onClick={() => handleContactClick('line')}
                      >
                        <img src="/icon/icon-line.png" alt="LINE" className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default AboutPage;