# Google Maps 設置說明

## 1. 申請 Google Maps API Key

1. 前往 [Google Cloud Console](https://console.cloud.google.com/)
2. 創建新專案或選擇現有專案
3. 啟用以下 API：
   - Maps JavaScript API
   - Places API (可選，用於地點搜尋功能)
4. 在「憑證」頁面創建 API Key

## 2. 設置環境變數

在專案根目錄創建 `.env` 文件：

```env
VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

## 3. 安全設置

在 Google Cloud Console 中設置 API Key 的限制：

1. **應用程式限制**：
   - 選擇「HTTP 參照網址」
   - 添加您的網域（例如：`https://yourdomain.com/*`）
   - 開發時可添加 `http://localhost:3000/*`

2. **API 限制**：
   - 只啟用必要的 API（Maps JavaScript API）
   - 避免啟用不必要的 API 以控制成本

## 4. 功能說明

GoogleMap 組件提供以下功能：

- 互動式地圖顯示
- 自定義標記點
- 點擊標記顯示資訊視窗
- 響應式設計
- 載入狀態提示
- 錯誤處理

## 5. 使用範例

```tsx
import GoogleMap from '../components/GoogleMap';

<GoogleMap 
  address="花蓮縣花蓮市美工六街20之6號"
  latitude={23.9871}
  longitude={121.6014}
  zoom={15}
  className="w-full h-80"
/>
```

## 6. 注意事項

- API Key 請妥善保管，不要提交到版本控制系統
- 建議設置使用量限制以控制成本
- 在生產環境中務必設置適當的網域限制 