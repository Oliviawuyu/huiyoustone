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

  // 相簿圖片
  const galleryImages = [
    {
      id: 1,
      src: "/src/assets/pic/c/c7.jpg",
      alt: "礦區實照",
      title: ""
    },
    {
      id: 2,
      src: "/src/assets/pic/c/c6.jpg",
      alt: "礦區實照",
      title: ""
    },
    {
      id: 3,
      src: "/src/assets/pic/c/c5.jpg",
      alt: "礦區實照",
      title: ""
    },
    {
      id: 4,
      src: "/src/assets/pic/c/c4.jpg",
      alt: "礦區實照",
      title: ""
    },
    {
      id: 5,
      src: "/src/assets/pic/c/c3.jpg",
      alt: "礦區實照",
      title: ""
    },
    {
      id: 6,
      src: "/src/assets/pic/c/c2.jpg",
      alt: "礦區實照",
      title: ""
    },
    {
      id: 7,
      src: "/src/assets/pic/c/c1.jpg",
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
                  {/* 移除了 hover 深色層 */}
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
            {/* 礦區介紹內容 */}
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