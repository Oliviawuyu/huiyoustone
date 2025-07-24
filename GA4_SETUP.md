# Google Analytics 4 設置指南

## 🎯 概述
本專案已完整集成 Google Analytics 4 (GA4)，包含頁面追蹤、事件追蹤、Core Web Vitals 監控等功能。

## 📋 設置步驟

### 1. 獲取 GA4 測量 ID

1. 前往 [Google Analytics](https://analytics.google.com/)
2. 登入您的 Google 帳戶
3. 創建新的 GA4 屬性或使用現有屬性
4. 在「資料串流」中設置網站串流
5. 複製測量 ID（格式：`G-XXXXXXXXXX`）

### 2. 更新測量 ID

在 `src/utils/analytics.ts` 檔案中，將測量 ID 替換為您的實際 ID：

```typescript
// GA4 測量 ID - 請替換為您的實際 GA4 測量 ID
export const GA4_MEASUREMENT_ID = 'G-YOUR_ACTUAL_ID'; // 替換為您的實際ID
```

### 3. 驗證設置

1. 執行 `npm run build && npm run preview` 建置並預覽網站
2. 在瀏覽器開發者工具的 Console 中查看是否出現：
   - `GA4 initialized successfully`
   - `GA4 Status: Initialized and ready`
3. 在 GA4 即時報表中檢查是否有數據流入

## 📊 已集成的追蹤功能

### 基本追蹤
- ✅ 頁面瀏覽追蹤
- ✅ 路由變化自動追蹤
- ✅ 頁面停留時間追蹤

### 業務事件追蹤
- ✅ **產品查看**：用戶點擊產品詳情
- ✅ **聯絡互動**：電話、Email、LINE、Facebook 點擊
- ✅ **產品詢價**：在產品頁面進行聯絡互動
- ✅ **圖片庫瀏覽**：查看礦區實照大圖
- ✅ **服務興趣**：根據頁面瀏覽判斷用戶興趣

### 性能監控
- ✅ **Core Web Vitals**：CLS, FID, FCP, LCP, TTFB
- ✅ **頁面載入時間**：DOM 載入、完整載入時間
- ✅ **圖片載入性能**：平均圖片載入時間

## 🛠️ 自訂事件追蹤

### 使用 Hooks
```typescript
import { useProductTracking, useContactTracking } from '../hooks/useGA4';

const MyComponent = () => {
  const { trackProductView } = useProductTracking();
  const { trackContact } = useContactTracking();
  
  const handleProductClick = () => {
    trackProductView('產品名稱', '產品類別');
  };
  
  const handleContactClick = () => {
    trackContact('phone'); // 'phone' | 'email' | 'line' | 'facebook'
  };
};
```

### 使用工具函數
```typescript
import { trackEvent, trackBusinessEvent } from '../utils/analytics';

// 自訂事件
trackEvent('custom_event', {
  category: 'engagement',
  label: '事件標籤',
  value: 100
});

// 業務事件
trackBusinessEvent.viewProduct('產品名稱', '類別');
trackBusinessEvent.contactUs('phone');
```

## 🚨 調試模式

開啟調試模式來查看詳細的追蹤資訊：

```typescript
import { enableDebugMode } from '../utils/analytics';

// 在開發環境中啟用
if (process.env.NODE_ENV === 'development') {
  enableDebugMode();
}
```

## 📈 GA4 報表建議

### 建議設置的自訂報表

1. **轉換漏斗**
   - 頁面瀏覽 → 產品查看 → 聯絡互動

2. **產品分析**
   - 各產品的查看次數
   - 產品查看到詢價的轉換率

3. **聯絡管道效果**
   - 不同聯絡方式的使用頻率
   - 各頁面的聯絡互動率

4. **用戶行為分析**
   - 平均頁面停留時間
   - 用戶瀏覽路徑分析

## 🔒 隱私合規

本設置已包含基本的隱私保護措施：
- IP 地址匿名化
- 適當的 Cookie 設置
- 符合 GDPR 基本要求

如需更嚴格的隱私合規，請考慮：
- 添加 Cookie 同意橫幅
- 實施用戶選擇退出機制
- 設置資料保留政策

## ❓ 故障排除

### 常見問題

**Q: GA4 未收到數據**
- 檢查測量 ID 是否正確
- 確認網站是 HTTPS
- 檢查瀏覽器是否阻擋追蹤

**Q: 事件未正常追蹤**
- 在開發者工具 Console 查看錯誤訊息
- 使用 GA4 的 DebugView 檢查即時事件

**Q: Core Web Vitals 數據異常**
- 確認 `web-vitals` 套件已安裝
- 檢查網路狀況和伺服器回應時間

## 📞 技術支援

如遇到設置問題，請檢查：
1. 瀏覽器開發者工具的 Console 錯誤
2. GA4 的即時報表
3. 網路連線狀況

---
**最後更新**：2024年1月
**版本**：1.0 