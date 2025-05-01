import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import { X, Phone } from 'lucide-react';

const ProductsPage = () => {
  // 控制彈窗顯示
  const [selectedProduct, setSelectedProduct] = useState(null);
  // 控制當前顯示的大圖
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // 控制當前標籤
  const [activeTab, setActiveTab] = useState('info');

  // 產品資料
  const products = [
    {
      id: 1,
      name: "比利時木紋",
      image: "/src/assets/pic/product/p1/A01-01.jpg",
      description: "比利時進口高級木紋石材，紋理自然優美，適合用於高檔室內裝潢。",
      detailImages: [
        "/src/assets/pic/product/p1/A01-01.jpg",
        "/src/assets/pic/product/p1/A01-02.jpg",
        "/src/assets/pic/product/p1/A01-03.jpg",
        "/src/assets/pic/product/p1/A01-04.jpg",
        "/src/assets/pic/product/p1/A01-05.jpg"
      ],
      specifications: {
        origin: "",
        size: "標準板材尺寸：240 x 120 公分",
        thickness: "可選厚度：2cm、3cm",
        finish: "拋光、平光、仿古",
        application: "地板、牆面、檯面等"
      }
    },
    {
      id: 2,
      name: "白海棠(蘇非亞)",
      image: "https://pic03.eapple.com.tw/huiyoustone/about-06.jpg",
      description: "源自義大利的高級白色大理石，帶有典雅的灰色紋路，是豪宅和高級商業空間的首選。",
      detailImages: [
        "https://pic03.eapple.com.tw/huiyoustone/about-06.jpg",
        "https://pic03.eapple.com.tw/huiyoustone/about-07.jpg",
        "https://pic03.eapple.com.tw/huiyoustone/about-08.jpg",
        "https://pic03.eapple.com.tw/huiyoustone/about-010.jpg"
      ],
      specifications: {
        origin: "義大利",
        size: "標準板材尺寸：240 x 120 公分",
        thickness: "可選厚度：1.5cm、2cm、3cm",
        finish: "拋光、磨砂、亞光",
        application: "地板、牆面、檯面等"
      }
    },
    // 其他產品...
  ];

  // 開啟產品詳情彈窗
  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0); // 重置為第一張圖
    setActiveTab('info'); // 預設顯示商品資訊標籤
    // 禁止背景滾動
    document.body.style.overflow = 'hidden';
  };

  // 關閉產品詳情彈窗
  const closeProductDetail = () => {
    setSelectedProduct(null);
    setCurrentImageIndex(0);
    // 恢復背景滾動
    document.body.style.overflow = 'auto';
  };

  // 切換大圖
  const changeMainImage = (index) => {
    setCurrentImageIndex(index);
  };

  // 切換標籤
  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  // 聯絡資訊
  const phoneNumber = '0978-218598';
  const lineId = 'bosen0529';
  const facebookUrl = 'https://www.facebook.com/huiyoustone/';

  return (
    <div>
      <HeroSection 
        backgroundImage="https://pic03.eapple.com.tw/huiyoustone/abg-04.jpg"
        height="h-[40vh]"
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">嚴選石材</h1>
        </div>
      </HeroSection>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle chineseTitle="嚴選石材" englishTitle="Products" />
          
          {/* 產品陳列 - 使用圖片格柵方式 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col">
                {/* 產品圖片 */}
                <div 
                  className="overflow-hidden cursor-pointer rounded-lg shadow-md mb-3"
                  onClick={() => openProductDetail(product)}
                >
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                {/* 產品名稱 */}
                <h3 className="text-center text-lg font-bold mb-2">{product.name}</h3>
                
                {/* 詳細資料按鈕 */}
                <button 
                  className="text-center text-gray-600 border border-gray-300 py-2 px-4 rounded hover:bg-gray-50 transition-colors mt-auto mx-auto"
                  onClick={() => openProductDetail(product)}
                >
                  詳細資料
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 產品詳情彈窗 - 改良版 */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeProductDetail}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // 防止點擊內容時關閉彈窗
          >
            {/* 關閉按鈕 */}
            <button 
              className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 z-10"
              onClick={closeProductDetail}
            >
              <X size={24} className="text-gray-700" />
            </button>
            
            <div className="p-3">
              {/* 產品標題 */}
              <h2 className="text-2xl font-bold mb-6 text-center">{selectedProduct.name}</h2>

              {/* 大圖展示 */}
              <div className="mb-3 overflow-hidden rounded-lg">
                <img 
                  src={selectedProduct.detailImages[currentImageIndex]} 
                  alt={`${selectedProduct.name} - 主圖`} 
                  className="w-full h-auto object-contain max-h-[600px]"
                />
              </div>

              {/* 縮略圖列表 */}
              <div className="mb-8 overflow-x-auto">
                <div className="flex space-x-4 py-2">
                  {selectedProduct.detailImages.map((img, index) => (
                    <div 
                      key={index} 
                      className={`rounded-md overflow-hidden cursor-pointer border-2 ${
                        index === currentImageIndex ? 'border-blue-600' : 'border-transparent'
                      }`}
                      onClick={() => changeMainImage(index)}
                    >
                      <img 
                        src={img} 
                        alt={`${selectedProduct.name} - 縮略圖 ${index + 1}`} 
                        className="w-24 h-24 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* 商品資訊標籤 - 符合圖片樣式 */}
              <div className="border-b border-gray-200 mb-6">
                <div className="flex">
                  <button 
                    className={`px-8 py-3 font-medium text-lg ${
                      activeTab === 'info' 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-600'
                    }`}
                    onClick={() => changeTab('info')}
                  >
                    商品資訊
                  </button>
                  <button 
                    className={`px-8 py-3 font-medium text-lg ${
                      activeTab === 'qa' 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-gray-600'
                    }`}
                    onClick={() => changeTab('qa')}
                  >
                    Q&A
                  </button>
                </div>
              </div>
              
              {/* 產品詳情內容 */}
              {activeTab === 'info' && (
                <div className="grid grid-cols-1 gap-6 mb-8">                
                  {/* 產品規格 - 直接用文字方式呈現 */}
                  <div className="text-lg space-y-5 text-gray-700">
                    {/*<p>產地：{selectedProduct.specifications.origin}</p>*/}
                    <p>尺寸：{selectedProduct.specifications.size}</p>
                    <p>厚度：{selectedProduct.specifications.thickness}</p>
                    <p>表面處理：{selectedProduct.specifications.finish}</p>
                    <p>適用範圍：{selectedProduct.specifications.application}</p>
                  </div>
                </div>
              )}
              
              {activeTab === 'qa' && (
                <div className="grid grid-cols-1 gap-6 mb-8">
                  <p className="text-lg text-gray-700">若有任何產品相關問題，歡迎聯絡我們。</p>
                </div>
              )}
              
              {/* 聯絡按鈕區 - 置中水平排列 */}
              <div className="flex flex-col items-center space-y-6">
                {/* 社交媒體/聯絡按鈕 - 水平排列 */}
                <div className="flex justify-center space-x-4">
                  {/* Facebook 按鈕 */}
                  <a 
                    href={facebookUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="white"
                    >
                      <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                    </svg>
                  </a>
                  {/* LINE 按鈕 */}
                  <a  target='_blank'
                    href={`https://line.me/ti/p/~${lineId}`}
                    className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition-colors shadow-md"
                  >
                    <img src="/src/assets/icon/icon-line.png" alt="LINE" className="w-6 h-6 object-contain" />

                    {/* <span className="text-white font-bold text-sm">LINE</span> */}
                  </a>
                  
                  {/* 電話按鈕 */}
                  <a 
                    href={`tel:${phoneNumber}`} 
                    className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md"
                  >
                    <Phone className="text-white" size={14} />
                  </a>
                </div>
                
                {/* 返回列表按鈕 */}
                <button 
                  onClick={closeProductDetail}
                  className="border border-gray-300 text-gray-700 py-3 px-10 rounded-lg hover:bg-gray-50 transition-colors mx-auto"
                >
                  返回列表
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle chineseTitle="石材應用" englishTitle="Applications" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">室內地板</h3>
              <p className="text-gray-700 mb-4">
                石材地板不僅美觀耐用，還具有良好的保溫性能，適合各種室內空間。
              </p>
            </div>
            
            {/* 其他應用卡片... */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;