import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection backgroundImage="https://pic03.eapple.com.tw/huiyoustone/abg-04.jpg">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">HUIYOU</h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">STONE</h2>
          <p className="text-xl mb-2">天然的石材</p>
          <div className="flex justify-center items-center">
            <div className="w-12 h-0.5 bg-white"></div>
            <p className="mx-2 text-lg">造就完美的居家生活</p>
            <div className="w-12 h-0.5 bg-white"></div>
          </div>
        </div>
      </HeroSection>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <SectionTitle chineseTitle="關於我們" englishTitle="About" />
              <p className="text-gray-700 mb-4">2008</p>
              <p className="text-gray-700 mb-6">
                蕙佑石材經營團隊於2008年成立，專營各種石材批售。秉持著服務至上的理念，並配合流行趨勢及建築設計業者之需求。
              </p>
              <p className="text-sm text-gray-500">Start a new life & get a pretty style in front of the city</p>
            </div>
            <div>
              <img 
                src="https://pic03.eapple.com.tw/huiyoustone/about-01.jpg" 
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
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <img 
              src="https://pic03.eapple.com.tw/huiyoustone/about-05.jpg" 
              alt="石材設計" 
              className="w-full h-auto"
            />
            <img 
              src="https://pic03.eapple.com.tw/huiyoustone/about-06.jpg" 
              alt="石材設計" 
              className="w-full h-auto"
            />
            <img 
              src="https://pic03.eapple.com.tw/huiyoustone/about-07.jpg" 
              alt="石材設計" 
              className="w-full h-auto"
            />
            <img 
              src="https://pic03.eapple.com.tw/huiyoustone/about-08.jpg" 
              alt="石材設計" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Residence Section */}
      <section 
        className="py-16 bg-cover bg-center"
        style={{ backgroundImage: `url(https://pic03.eapple.com.tw/huiyoustone/about-09.png)` }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://pic03.eapple.com.tw/huiyoustone/about-010.jpg" 
                alt="石材設計" 
                className="w-full h-auto rounded-md shadow-lg"
              />
            </div>
            <div className="md:w-1/2 flex items-end">
              <div className="bg-amber-700 text-white px-6 py-3 inline-block">
                WE HAVE A COMFORTABLE NEW RESIDENCE
              </div>
            </div>
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
                <p>03-8235309</p>
                <p>0978-218-598</p>
                <p>Email: huiyoustone@gmail.com</p>
                <p>花蓮縣花蓮市美工六街20之6號</p>
              </div>
              
              <div className="mt-6">
                <img 
                  src="https://pic03.eapple.com.tw/huiyoustone/map.jpg" 
                  alt="地圖" 
                  className="w-full h-auto border border-gray-300"
                />
              </div>
            </div>
            
            <div>
              <img 
                src="https://www.mit-machining.com/store_image/huiyoustone/B2165396665433.jpg" 
                alt="石材設計" 
                className="w-full h-auto rounded-md"
              />
              <p className="text-center mt-4 text-amber-700">LIFE IS ALL ABOUT HAVING A GOOD TIME</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;