#!/bin/bash

echo "開始部署蕙佑石材網站..."

# 清理舊的構建
echo "清理舊的構建..."
rm -rf dist

# 構建專案
echo "構建專案..."
npm run build

# 複製必要的檔案到 dist 目錄
echo "複製必要檔案..."
cp public/_redirects dist/
cp public/404.html dist/
cp public/.htaccess dist/
cp public/.nojekyll dist/
cp public/CNAME dist/

# 檢查是否成功構建
if [ -d "dist" ]; then
    echo "✅ 構建成功！"
    echo "📁 dist 目錄內容："
    ls -la dist/
    
    echo ""
    echo "🚀 部署說明："
    echo "1. 將 dist 目錄中的所有檔案上傳到您的網站根目錄"
    echo "2. 確保 .htaccess 檔案被正確上傳（如果使用 Apache 伺服器）"
    echo "3. 如果使用 GitHub Pages，將 dist 目錄內容推送到 gh-pages 分支"
    echo ""
    echo "💡 提示：使用 HashRouter 後，URL 會變成 #/cases 格式"
    echo "   這可以解決 GitHub Pages 的路由問題"
else
    echo "❌ 構建失敗！"
    exit 1
fi 