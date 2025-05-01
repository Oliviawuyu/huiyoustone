import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';

const AboutPage = () => {
  return (
    <div>
      <HeroSection 
        backgroundImage="https://pic03.eapple.com.tw/huiyoustone/about-03.png"
        height="h-[40vh]"
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">公司簡介</h1>
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
                src="/src/assets/pic/about-01.jpg" 
                alt="蕙佑石材" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionTitle chineseTitle="我們的優勢" englishTitle="Our Advantages" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">優質石材</h3>
                <p className="text-gray-700">
                  我們嚴選來自世界各地的優質石材，確保每一塊石材都具有獨特的紋理和高品質的質感。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">專業團隊</h3>
                <p className="text-gray-700">
                  我們擁有經驗豐富的專業團隊，能夠提供從選材到安裝的全方位服務。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">客製化服務</h3>
                <p className="text-gray-700">
                  根據客戶的需求，提供客製化的石材解決方案，滿足不同空間和風格的需求。
                </p>
              </div>
              
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;