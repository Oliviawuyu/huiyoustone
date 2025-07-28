import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import SEOHead from '../components/SEOHead';
import { usePageEngagement } from '../hooks/useGA4';

const CasesPage = () => {
  // GA4 Hooks
  usePageEngagement('案例分享頁面');

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

      <section className="py-16">
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle chineseTitle="客戶見證" englishTitle="Testimonials" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">王先生</h4>
                  <p className="text-sm text-gray-500">台北市</p>
                </div>
              </div>
              <p className="text-gray-700">
                "蕙佑石材提供的大理石地板質量非常好，安裝團隊也很專業。整個過程非常順利，我對最終效果非常滿意。"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">陳小姐</h4>
                  <p className="text-sm text-gray-500">花蓮市</p>
                </div>
              </div>
              <p className="text-gray-700">
                "我們公司辦公室的石材牆面由蕙佑石材提供，不僅美觀大方，還提升了整個空間的檔次。非常感謝蕙佑石材的專業服務。"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">林設計師</h4>
                  <p className="text-sm text-gray-500">台中市</p>
                </div>
              </div>
              <p className="text-gray-700">
                "作為一名室內設計師，我經常與蕙佑石材合作。他們提供的石材品質一流，種類豐富，能夠滿足各種設計需求。"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">張總經理</h4>
                  <p className="text-sm text-gray-500">高雄市</p>
                </div>
              </div>
              <p className="text-gray-700">
                "我們飯店大廳的石材地板由蕙佑石材提供，不僅美觀耐用，還為我們的客人留下了深刻的印象。非常感謝蕙佑石材的優質服務。"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CasesPage;