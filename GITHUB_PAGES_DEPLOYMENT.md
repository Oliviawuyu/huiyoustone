# GitHub Pages 部署說明

## 🚀 解決路由 404 問題

您的專案已經配置為使用 `HashRouter`，這可以解決 GitHub Pages 的路由問題。

## 📋 部署步驟

### 1. 構建專案
```bash
npm run build
```

### 2. 部署到 GitHub Pages
```bash
npm run deploy
```

### 3. 等待部署完成
- 檢查 GitHub 倉庫的 Actions 頁面
- 等待 gh-pages 分支更新完成

## 🔗 URL 格式變化

使用 `HashRouter` 後，您的 URL 會變成：

- 主頁：`https://Oliviawuyu.github.io/huiyoustone/`
- 關於我們：`https://Oliviawuyu.github.io/huiyoustone/#/about`
- 案例分享：`https://Oliviawuyu.github.io/huiyoustone/#/cases`
- 產品展示：`https://Oliviawuyu.github.io/huiyoustone/#/products`
- 聯絡我們：`https://Oliviawuyu.github.io/huiyoustone/#/contact`

## ⚠️ 重要注意事項

1. **不要刪除 `.nojekyll` 檔案** - 這個檔案告訴 GitHub Pages 不要使用 Jekyll 處理
2. **確保 CNAME 檔案正確** - 如果您有自定義域名
3. **檢查 GitHub Pages 設定** - 確保來源分支是 `gh-pages`

## 🔧 故障排除

### 如果仍然出現 404 錯誤：
1. 檢查 GitHub 倉庫設定中的 Pages 設定
2. 確保 gh-pages 分支存在且包含最新內容
3. 清除瀏覽器快取
4. 等待幾分鐘讓 GitHub Pages 更新

### 如果部署失敗：
1. 檢查 Actions 頁面的錯誤訊息
2. 確保 GitHub Token 有正確權限
3. 檢查專案依賴是否正確安裝

## 📱 測試

部署完成後，請測試以下連結：
- [主頁](https://Oliviawuyu.github.io/huiyoustone/)
- [案例分享](https://Oliviawuyu.github.io/huiyoustone/#/cases)
- [關於我們](https://Oliviawuyu.github.io/huiyoustone/#/about)

## 🎯 預期結果

使用 `HashRouter` 後，直接訪問 `https://Oliviawuyu.github.io/huiyoustone/#/cases` 應該可以正常顯示案例分享頁面，不再出現 404 錯誤。 