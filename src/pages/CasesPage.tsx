import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import SEOHead from '../components/SEOHead';
import { usePageEngagement } from '../hooks/useGA4';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const CasesPage = () => {
  // GA4 Hooks
  usePageEngagement('案例分享頁面');

  // 燈箱狀態
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCaseSeries, setCurrentCaseSeries] = useState('belgian'); // 'belgian' 或 'italian'

  // 結構化資料 - 作品集
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "蕙佑石材案例分享",
    "description": "展示蕙佑石材的專業施工案例，包括商業空間、住宅裝潢、飯店大廳等各類石材工程項目",
    "creator": {
      "@type": "Organization",
      "name": "蕙佑石材"
    },
    "workExample": [
      {
        "@type": "CreativeWork",
        "name": "商業空間石材牆面",
        "description": "為高級商業空間設計並安裝石材牆面，提升空間質感和品味"
      },
      {
        "@type": "CreativeWork", 
        "name": "飯店大廳地板",
        "description": "為五星級飯店大廳提供精美的大理石地板，展現高貴典雅的氛圍"
      }
    ]
  };

  // Sample case studies
  const cases = [
    {
      id: 2,
      title: "商業空間石材牆面",
      image: "/pic/home/LINE_ALBUM_義大利灰珍珠_220524_5.jpg",
      description: "為高級商業空間設計並安裝石材牆面，提升空間質感和品味。",
      location: "",
      year: ""
    },
    {
      id: 3,
      title: "飯店大廳地板",
      image: "/pic/home/義大利灰珍珠_220524_10.jpg",
      description: "為五星級飯店大廳提供精美的大理石地板，展現高貴典雅的氛圍。",
      location: "",
      year: "2020"
    },
    {
      id: 4,
      title: "住宅廚房檯面",
      image: "/pic/case/雕刻綠704.jpg",
      description: "為住宅廚房提供耐用美觀的石英石檯面，兼具實用性和美觀性。",
      location: "",
      year: ""
    },
    {
      id: 5,
      title: "辦公室接待區",
      image: "/pic/home/義大利灰珍珠_220524_0 (1).jpg",
      description: "為企業辦公室接待區設計並安裝石材地板和牆面，展現企業形象。",
      location: "",
      year: ""
    },
    {
      id: 6,
      title: "別墅浴室",
      image: "/pic/case/義大利灰珍珠1.jpg",
      description: "為豪華別墅浴室提供全套石材解決方案，包括地板、牆面和洗手台。",
      location: "",
      year: ""
    }
  ];

  // 比利時木紋案例照片
  const belgianWoodGrainCases = [
    {
      id: 1,
      title: "比利時木紋案例10",
      image: "/pic/case/比利時木紋/案例1.jpg",
      description: "比利時木紋石材應用實例"
    },
    {
      id: 2,
      title: "比利時木紋案例11",
      image: "/pic/case/比利時木紋/案例2.jpg",
      description: "比利時木紋石材施工過程"
    },
    {
      id: 3,
      title: "比利時木紋案例12",
      image: "/pic/case/比利時木紋/案例3.jpg",
      description: "比利時木紋石材完工展示"
    },
    {
      id: 4,
      title: "比利時木紋案例13",
      image: "/pic/case/比利時木紋/案例4.jpg",
      description: "比利時木紋石材空間應用"
    },
    {
      id: 5,
      title: "比利時木紋案例14",
      image: "/pic/case/比利時木紋/這張當封面.jpg",
      description: "比利時木紋石材封面展示"
    },
    {
      id: 6,
      title: "比利時木紋案例6",
      image: "/pic/case/比利時木紋/比利時木紋案例8.jpg",
      description: "比利時木紋石材空間設計"
    },
    {
      id: 7,
      title: "比利時木紋案例7",
      image: "/pic/case/比利時木紋/比利時木紋案例9.jpg",
      description: "比利時木紋石材細節展示"
    },
    {
      id: 8,
      title: "比利時木紋案例8",
      image: "/pic/case/比利時木紋/比利時木紋案例11.jpg",
      description: "比利時木紋石材完工效果"
    },
    {
      id: 9,
      title: "比利時木紋案例9",
      image: "/pic/case/比利時木紋/比利時木紋案例12.jpg",
      description: "比利時木紋石材整體呈現"
    },
    {
      id: 10,
      title: "比利時木紋案例1",
      image: "/pic/case/比利時木紋/比利時木紋案例1.jpg",
      description: "比利時木紋石材應用案例展示"
    },
    {
      id: 11,
      title: "比利時木紋案例2",
      image: "/pic/case/比利時木紋/比利時木紋案例3.jpg",
      description: "比利時木紋石材牆面施工實例"
    },
    {
      id: 12,
      title: "比利時木紋案例3",
      image: "/pic/case/比利時木紋/比利時木紋案例4.jpg",
      description: "比利時木紋石材地板鋪設案例"
    },
    {
      id: 13,
      title: "比利時木紋案例4",
      image: "/pic/case/比利時木紋/比利時木紋案例5.jpg",
      description: "比利時木紋石材檯面應用"
    },
    {
      id: 14,
      title: "比利時木紋案例5",
      image: "/pic/case/比利時木紋/比利時木紋案例6.jpg",
      description: "比利時木紋石材裝飾效果"
    }
  ];

  // 義大利灰珍珠案例照片
  const italianGrayPearlCases = [
    {
      id: 1,
      title: "義大利灰珍珠案例1",
      image: "/pic/case/義大利灰珍珠/義大利灰珍珠案例1.jpg",
      description: "義大利灰珍珠石材牆面施工"
    },
    {
      id: 2,
      title: "義大利灰珍珠案例2",
      image: "/pic/case/義大利灰珍珠/義大利灰珍珠案例2.jpg",
      description: "義大利灰珍珠石材地板鋪設"
    },
    {
      id: 3,
      title: "義大利灰珍珠案例3",
      image: "/pic/case/義大利灰珍珠/義大利灰珍珠案例3.jpg",
      description: "義大利灰珍珠石材檯面應用"
    },
    {
      id: 4,
      title: "義大利灰珍珠案例4",
      image: "/pic/case/義大利灰珍珠/義大利灰珍珠案例.jpg",
      description: "義大利灰珍珠石材整體設計"
    },
    {
      id: 5,
      title: "義大利灰珍珠案例5",
      image: "/pic/case/義大利灰珍珠/義大利灰珍珠.jpg",
      description: "義大利灰珍珠石材細節展示"
    },
    {
      id: 6,
      title: "義大利灰珍珠案例6",
      image: "/pic/case/義大利灰珍珠/義大利灰珍珠實例.jpg",
      description: "義大利灰珍珠石材完工效果"
    },
    {
      id: 7,
      title: "義大利灰珍珠案例7",
      image: "/pic/case/義大利灰珍珠/電視牆3.jpg",
      description: "義大利灰珍珠電視牆設計"
    },
    {
      id: 8,
      title: "義大利灰珍珠案例8",
      image: "/pic/case/義大利灰珍珠/義大利灰珍珠_220524_0.jpg",
      description: "義大利灰珍珠石材空間應用"
    },
    {
      id: 9,
      title: "義大利灰珍珠案例8",
      image: "/pic/case/義大利灰珍珠/義大利灰珍珠_220524_1.jpg",
      description: "義大利灰珍珠石材空間應用"
    },
    {
      id: 10,
      title: "義大利灰珍珠案例8",
      image: "/pic/case/義大利灰珍珠/義大利灰珍珠_220524_2.jpg",
      description: "義大利灰珍珠石材空間應用"
    },
    {
      id: 11,
      title: "義大利灰珍珠案例8",
      image: "/pic/case/義大利灰珍珠/義大利灰珍珠_220524_8.jpg",
      description: "義大利灰珍珠石材空間應用"
    },
    {
      id: 12,
      title: "義大利灰珍珠案例8",
      image: "/pic/case/義大利灰珍珠/義大利灰珍珠_220524_9.jpg",
      description: "義大利灰珍珠石材空間應用"
    },
    {
      id: 13,
      title: "義大利灰珍珠案例8",
      image: "/pic/case/義大利灰珍珠/義大利灰珍珠_220524_10.jpg",
      description: "義大利灰珍珠石材空間應用"
    },
    {
      id: 14,
      title: "義大利灰珍珠案例10",
      image: "/pic/case/義大利灰珍珠/LINE_ALBUM_義大利灰珍珠_220524_7.jpg",
      description: "義大利灰珍珠石材完工展示"
    },
    {
      id: 15,
      title: "義大利灰珍珠案例11",
      image: "/pic/case/義大利灰珍珠/LINE_ALBUM_義大利灰珍珠_220524_4.jpg",
      description: "義大利灰珍珠石材裝飾效果"
    },
    {
      id: 16,
      title: "義大利灰珍珠案例12",
      image: "/pic/case/義大利灰珍珠/LINE_ALBUM_義大利灰珍珠_220524_5.jpg",
      description: "義大利灰珍珠石材整體呈現"
    },
    {
      id: 17,
      title: "義大利灰珍珠案例13",
      image: "/pic/case/義大利灰珍珠/LINE_ALBUM_義大利灰珍珠_220524_6.jpg",
      description: "義大利灰珍珠石材應用實例"
    },
  
  ];

  // 打開燈箱
  const openLightbox = (series = 'belgian', index = 0) => {
    setCurrentCaseSeries(series);
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // 關閉燈箱
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // 下一張圖片
  const nextImage = () => {
    const currentCases = currentCaseSeries === 'belgian' ? belgianWoodGrainCases : italianGrayPearlCases;
    setCurrentImageIndex((prev) => 
      prev === currentCases.length - 1 ? 0 : prev + 1
    );
  };

  // 上一張圖片
  const prevImage = () => {
    const currentCases = currentCaseSeries === 'belgian' ? belgianWoodGrainCases : italianGrayPearlCases;
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentCases.length - 1 : prev - 1
    );
  };

  // 鍵盤事件處理
  const handleKeyDown = (e) => {
    if (!isLightboxOpen) return;
    
    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowRight':
        nextImage();
        break;
      case 'ArrowLeft':
        prevImage();
        break;
    }
  };

  // 添加鍵盤事件監聽
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <div>
      <SEOHead 
        title="案例分享 - 蕙佑石材 | 石材工程實績 | 專業施工案例"
        description="查看蕙佑石材的專業施工案例，包括商業空間、住宅裝潢、飯店大廳等各類石材工程項目。展現我們在大理石、花崗岩施工方面的專業技術。"
        keywords="石材工程案例,大理石施工實績,商業空間裝潢,住宅石材工程,飯店大廳地板,石材牆面施工,蕙佑石材案例"
        ogImage="/pic/home/LINE_ALBUM_義大利灰珍珠_220524_5.jpg"
        canonical="https://huiyoustone.tw/cases"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">案例分享</h1>
            <p className="text-xl md:text-2xl opacity-90 drop-shadow-lg">Case Studies</p>
          </div>
        </div>
      </HeroSection>

      {/* 比利時木紋案例專區 */}
      <section className="py-8 bg-gray-50 pt-16">
        <div className="container mx-auto px-4">
      
          {/* 比利時木紋主展示區塊 */}
          <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">比利時木紋  <span className="text-amber-700 font-normal">Belgian Wood Grain</span></h3>
              <p className="mx-auto text-gray-600">
              比利時木紋石材以其獨特的木質紋理和優雅的色澤，為空間帶來自然溫馨的氛圍。
              以下展示我們在比利時木紋石材施工方面的專業案例。
            </p>
            </div>
            
            {/* 主圖展示區域 */}
            <div className="relative bg-gray-100 p-8">
              <div className="max-w-4xl mx-auto">
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="/pic/case/比利時木紋/這張當封面.jpg"
                    alt="比利時木紋 - 主展示圖"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    比利時木紋
                  </div>
                </div>
              </div>
            </div>

            {/* 縮略圖列表 */}
            <div className="p-6 bg-gray-50">
              <div className="max-w-4xl mx-auto">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">相關案例照片</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {belgianWoodGrainCases.slice(0, 5).map((caseItem, index) => (
                    <div 
                      key={caseItem.id}
                      className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === 0 ? 'border-blue-500' : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => {
                        openLightbox('belgian', index);
                      }}
                    >
                      <img 
                        src={caseItem.image} 
                        alt={caseItem.title} 
                        className="w-full h-24 object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <button 
                    onClick={() => openLightbox('belgian', 0)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    查看全部照片 ({belgianWoodGrainCases.length} 張)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 義大利灰珍珠案例專區 */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
      

          {/* 義大利灰珍珠主展示區塊 */}
          <div className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">義大利灰珍珠   <span className="text-amber-700 font-normal">Italian Gray Pearl</span></h3>
              <p className="text-gray-600">義大利灰珍珠石材以其獨特的灰色調和優雅的紋理，為空間帶來低調奢華的氛圍。
              以下展示我們在義大利灰珍珠石材施工方面的專業案例。</p>
            </div>
            
            {/* 主圖展示區域 */}
            <div className="relative bg-gray-100 p-8">
              <div className="max-w-4xl mx-auto">
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="/pic/case/義大利灰珍珠/封面照.jpg"
                    alt="義大利灰珍珠 - 主展示圖"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    義大利灰珍珠
                  </div>
                </div>
              </div>
            </div>

            {/* 縮略圖列表 */}
            <div className="p-6 bg-gray-50">
              <div className="max-w-4xl mx-auto">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">相關案例照片</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {italianGrayPearlCases.slice(0, 5).map((caseItem, index) => (
                    <div 
                      key={caseItem.id}
                      className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === 0 ? 'border-blue-500' : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => {
                        openLightbox('italian', index);
                      }}
                    >
                      <img 
                        src={caseItem.image} 
                        alt={caseItem.title} 
                        className="w-full h-24 object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <button 
                    onClick={() => openLightbox('italian', 0)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    查看全部照片 ({italianGrayPearlCases.length} 張)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 案例分享區塊 - 移到最下面 */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle chineseTitle="案例分享" englishTitle="Case Studies" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {cases.map((caseItem) => (
              <div key={caseItem.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold">{caseItem.title}</h3>
                    <span className="text-sm text-gray-500">{caseItem.year}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{caseItem.description}</p>
                  {/* <p className="text-sm text-gray-500">地點: {caseItem.location}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 燈箱 - 圖片輪播 */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-6xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 關閉按鈕 */}
            <button
              className="absolute top-4 right-4 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors duration-200 z-10"
              onClick={closeLightbox}
            >
              <X size={24} className="text-white" />
            </button>

            {/* 上一張按鈕 */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors duration-200 z-10"
              onClick={prevImage}
            >
              <ChevronLeft size={24} className="text-white" />
            </button>

            {/* 下一張按鈕 */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors duration-200 z-10"
              onClick={nextImage}
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* 主圖片 */}
            <div className="relative max-h-[85vh] max-w-full">
              <img
                src={currentCaseSeries === 'belgian' ? belgianWoodGrainCases[currentImageIndex].image : italianGrayPearlCases[currentImageIndex].image}
                alt={currentCaseSeries === 'belgian' ? belgianWoodGrainCases[currentImageIndex].title : italianGrayPearlCases[currentImageIndex].title}
                className="max-h-[85vh] w-auto max-w-full object-contain"
              />
              
              {/* 圖片資訊 */}
              {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg">
                <div className="text-center">
                  <div className="text-lg font-semibold">
                    {currentCaseSeries === 'belgian' ? belgianWoodGrainCases[currentImageIndex].title : italianGrayPearlCases[currentImageIndex].title}
                  </div>
                  <div className="text-sm opacity-90">
                    {currentImageIndex + 1} / {currentCaseSeries === 'belgian' ? belgianWoodGrainCases.length : italianGrayPearlCases.length}
                  </div>
                </div>
              </div> */}
            </div>

            {/* 縮略圖預覽 */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black/30 rounded-lg p-2">
              <div className="flex space-x-2 overflow-x-auto w-[90vw] max-w-4xl">
                {currentCaseSeries === 'belgian' ? (
                  belgianWoodGrainCases.map((caseItem, index) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 cursor-pointer rounded border-2 transition-all duration-200 ${
                        index === currentImageIndex ? 'border-white' : 'border-transparent'
                      }`}
                      onClick={() => openLightbox('belgian', index)}
                    >
                      <img
                        src={caseItem.image}
                        alt={caseItem.title}
                        className="w-20 h-16 object-cover rounded"
                      />
                    </div>
                  ))
                ) : (
                  italianGrayPearlCases.map((caseItem, index) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 cursor-pointer rounded border-2 transition-all duration-200 ${
                        index === currentImageIndex ? 'border-white' : 'border-transparent'
                      }`}
                      onClick={() => openLightbox('italian', index)}
                    >
                      <img
                        src={caseItem.image}
                        alt={caseItem.title}
                        className="w-20 h-16 object-cover rounded"
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CasesPage;