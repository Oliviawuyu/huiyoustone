import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <div>
      <HeroSection 
        backgroundImage="https://pic03.eapple.com.tw/huiyoustone/abg-02.png"
        height="h-[40vh]"
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">聯絡我們</h1>
        </div>
      </HeroSection>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionTitle chineseTitle="聯絡資訊" englishTitle="Contact Information" />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-lg font-bold mb-2">電話</h3>
                  <p className="text-gray-700">03-8235309</p>
                  <p className="text-gray-700">03-8246298</p>
                  <p className="text-gray-700">0978-218598</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <p className="text-gray-700">huiyoustone@gmail.com</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">地址</h3>
                  <p className="text-gray-700">花蓮縣花蓮市美工六街20之6號</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">營業時間</h3>
                  <p className="text-gray-700">週一至週五: 9:00 - 18:00</p>
                  <p className="text-gray-700">週六: 9:00 - 15:00</p>
                  <p className="text-gray-700">週日: 休息</p>
                </div>
              </div>
              
              <div className="mt-8">
                <img 
                  src="https://pic03.eapple.com.tw/huiyoustone/map.jpg" 
                  alt="地圖" 
                  className="w-full h-auto border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            
            <div>
              <SectionTitle chineseTitle="聯絡表單" englishTitle="Contact Form" />
              
              <form className="space-y-6 mt-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    姓名
                  </label>
                  <Input id="name" placeholder="請輸入您的姓名" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="請輸入您的Email" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    電話
                  </label>
                  <Input id="phone" placeholder="請輸入您的電話" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    主旨
                  </label>
                  <Input id="subject" placeholder="請輸入主旨" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    訊息
                  </label>
                  <Textarea id="message" placeholder="請輸入您的訊息" rows={5} />
                </div>
                
                <Button type="submit" className="bg-amber-700 hover:bg-amber-800">
                  送出
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;