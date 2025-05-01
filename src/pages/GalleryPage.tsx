import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { X } from 'lucide-react';

const GalleryPage = () => {
  // 追蹤當前查看的大圖
  const [selectedImage, setSelectedImage] = useState(null);

  // 打開燈箱查看大圖
  const openLightbox = (image) => {
    setSelectedImage(image);
    // 禁止背景滾動
    document.body.style.overflow = 'hidden';
  };

  // 關閉燈箱
  const closeLightbox = () => {
    setSelectedImage(null);
    // 恢復背景滾動
    document.body.style.overflow = 'auto';
  };

  // 相簿圖片 - 使用 public 目錄下的圖片
  const galleryImages = [
    {
      id: 1,
      src: "/huiyoustone/pic/c/c7.jpg",
      alt: "礦區實照",
      title: ""
    },
    {
      id: 2,
      src: "/huiyoustone/pic/c/c6.jpg",
      alt: "礦區實照",
      title: ""
    },
    {
      id: 3,
      src: "/huiyoustone/pic/c/c5.jpg",
      alt: "礦區實照",
      title: ""
    },
    {
      id: 4,
      src: "/huiyoustone/pic/c/c4.jpg",
      alt: "礦區實照",
      title: ""
    },
    {
      id: 5,
      src: "/huiyoustone/pic/c/c3.jpg",
      alt: "礦區實照",
      title: ""
    },
    {
      id: 6,
      src: "/huiyoustone/pic/c/c2.jpg",
      alt: "礦區實照",
      title: ""
    },
    {
      id: 7,
      src: "/huiyoustone/pic/c/c1.jpg",
      alt: "礦區實照",
      title: ""
    }
  ];

  return (
      <div>
        <HeroSection
            backgroundImage="https://pic03.eapple.com.tw/huiyoustone/abg-02.png"
            height="h-[40vh]"
        >
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">礦區實照</h1>
          </div>
        </HeroSection>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <SectionTitle chineseTitle="礦區實照" englishTitle="Gallery" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                  <div
                      key={image.id}
                      className="overflow-hidden rounded-lg shadow-md cursor-pointer"
                      onClick={() => openLightbox(image)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <SectionTitle chineseTitle="礦區介紹" englishTitle="Our Quarry" />

            <div className="max-w-3xl mx-auto prose prose-lg">
              <p>
                我們的礦區位於精心挑選的地質區域，擁有豐富優質的石材資源。這些礦區經過嚴格的環境評估和規劃，
                確保我們能以可持續和負責任的方式開採石材。我們使用先進的採礦技術，不僅提高效率，
                還能最大程度地減少對環境的影響。
              </p>
              <p>
                每個礦區都由經驗豐富的專業團隊管理，他們確保採礦過程符合最高的安全和質量標準。
                從礦區開採的石材經過嚴格的品質檢驗，只有符合我們高標準的石材才會被送往加工廠，
                進行進一步的切割、打磨和加工，最終成為您看到的優質成品。
              </p>
            </div>
          </div>
        </section>

        {/* 燈箱 - 大圖查看器 */}
        {selectedImage && (
            <div
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                onClick={closeLightbox}
            >
              <div
                  className="relative max-w-5xl w-full"
                  onClick={(e) => e.stopPropagation()} // 防止點擊圖片時關閉燈箱
              >
                <button
                    className="absolute top-2 right-2 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
                    onClick={closeLightbox}
                >
                  <X size={24} className="text-white" />
                </button>
                <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-h-[85vh] w-auto max-w-full mx-auto object-contain"
                />
                {selectedImage.title && (
                    <div className="mt-4 text-center text-white text-xl">
                      {selectedImage.title}
                    </div>
                )}
              </div>
            </div>
        )}
      </div>
  );
};

export default GalleryPage;