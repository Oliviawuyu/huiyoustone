#!/bin/bash

echo "🚀 開始部署到 GitHub Pages..."

# 清理舊的構建
echo "🧹 清理舊的構建..."
rm -rf dist

# 構建專案
echo "🔨 構建專案..."
npm run build

# 複製 GitHub Pages 專用檔案到 dist 目錄
echo "📋 複製 GitHub Pages 專用檔案..."
cp public/.nojekyll dist/
cp public/CNAME dist/

# 檢查是否成功構建
if [ -d "dist" ]; then
    echo "✅ 構建成功！"
    echo "📁 dist 目錄內容："
    ls -la dist/
    
    echo ""
    echo "🚀 GitHub Pages 部署說明："
    echo "1. 確保您的專案已連接到 GitHub 倉庫"
    echo "2. 執行以下命令部署到 GitHub Pages："
    echo "   npm run deploy"
    echo ""
    echo "💡 重要提示："
    echo "   - 使用 HashRouter 後，URL 會變成 #/cases 格式"
    echo "   - 例如：https://Oliviawuyu.github.io/huiyoustone/#/cases"
    echo "   - 這可以解決 GitHub Pages 的路由問題"
    echo ""
    echo "🔧 如果遇到問題，請檢查："
    echo "   - GitHub 倉庫設定中的 Pages 設定"
    echo "   - 確保 gh-pages 分支被正確創建"
    echo "   - 檢查 Actions 頁面是否有部署錯誤"
else
    echo "❌ 構建失敗！"
    exit 1
fi 