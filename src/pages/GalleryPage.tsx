import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import SEOHead from '../components/SEOHead';
import { X } from 'lucide-react';
import { usePageEngagement, useGalleryTracking } from '../hooks/useGA4';

const GalleryPage = () => {
  // GA4 Hooks
  usePageEngagement('礦區實照頁面');
  const { trackGalleryView } = useGalleryTracking();

  // 結構化資料 - 圖片庫
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "蕙佑石材礦區實照",
    "description": "展示蕙佑石材礦區的真實照片，讓客戶了解我們的石材來源和品質",
    "creator": {
      "@type": "Organization",
      "name": "蕙佑石材"
    }
  };

  // 追蹤當前查看的大圖
  const [selectedImage, setSelectedImage] = useState(null);

  // 打開燈箱查看大圖
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
    
    // 追蹤圖片查看事件
    trackGalleryView('礦區實照', image.id.toString());
  };

  // 關閉燈箱
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // 相簿圖片 - 使用 public 目錄下的圖片
  const galleryImages = [
    {
      id: 1,
      src: "/pic/c/c7.jpg",
      alt: "礦區實照",
      title: ""
    },
    {
      id: 2,
      src: "/pic/c/c6.jpg",
      alt: "礦區實照",
      title: ""
    },
    {
      id: 3,
      src: "/pic/c/c5.jpg",
      alt: "礦區實照",
      title: ""
    },
    {
      id: 4,
      src: "/pic/c/c4.jpg",
      alt: "礦區實照",
      title: ""
    },
    {
      id: 5,
      src: "/pic/c/c3.jpg",
      alt: "礦區實照",
      title: ""
    },
    {
      id: 6,
      src: "/pic/c/c2.jpg",
      alt: "礦區實照",
      title: ""
    },
    {
      id: 7,
      src: "/pic/c/c1.jpg",
      alt: "礦區實照",
      title: ""
    }
  ];

  return (
    <div>
      <SEOHead 
        title="礦區實照 - 蕙佑石材 | 石材原產地照片 | 品質保證"
        description="查看蕙佑石材礦區的真實照片，了解我們的石材來源和開採過程。透明的供應鏈，確保為客戶提供最優質的天然石材。"
        keywords="石材礦區,石材原產地,天然石材開採,石材品質,石材來源,礦區照片,蕙佑石材礦區"
        ogImage="/pic/c/c1.jpg"
        canonical="https://huiyoustone.tw/gallery"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">礦區實照</h1>
            <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg">Gallery</p>
          </div>
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

      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle chineseTitle="礦區介紹" englishTitle="Our Quarry" />

          <div className="max-w-3xl mx-auto prose prose-lg">

          </div>
        </div>
      </section> */}

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