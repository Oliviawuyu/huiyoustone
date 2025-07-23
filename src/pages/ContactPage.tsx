import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import GoogleMap from '../components/GoogleMap';

const ContactPage = () => {
  return (
    <div>
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
                    <p className="text-gray-700">03-8235309</p>
                    <p className="text-gray-700">03-8246298</p>
                    <p className="text-gray-700">0978-218598</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-700">
                  <h3 className="text-lg font-bold mb-3 text-amber-700">Email</h3>
                  <p className="text-gray-700">huiyoustone@gmail.com</p>
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