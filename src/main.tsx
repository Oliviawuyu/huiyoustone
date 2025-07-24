import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import { initWebVitalsTracking } from './utils/webVitals'
import { initGA4, checkGA4Status } from './utils/analytics'

// 初始化 Google Analytics 4
if (import.meta.env.PROD) {
  // 生產環境初始化GA4
  initGA4();
  
  // 初始化性能監控
  initWebVitalsTracking();
  
  // 檢查GA4狀態
  setTimeout(() => {
    checkGA4Status();
  }, 1000);
} else {
  // 開發環境也可以初始化GA4進行測試 (可選)
  console.log('Development mode: Analytics disabled');
  // 如果要在開發環境測試GA4，取消下面的註釋
  // initGA4();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)