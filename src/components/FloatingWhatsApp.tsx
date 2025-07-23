import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const FloatingContactButtons = () => {
    // 聯絡資訊
    const phoneNumber = '0978-218-598';
    const lineId = '~jine1118';
    const facebookUrl = 'https://www.facebook.com/huiyoustone/';

    return (
        <div className="fixed bottom-24 right-6 z-40 flex flex-col space-y-3">
            {/* Facebook 按鈕 */}
            <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <button
                    className={cn(
                        "p-3 rounded-full shadow-lg transition-all",
                        "bg-blue-900 text-white hover:bg-blue-800"
                    )}
                    aria-label="Facebook 專頁"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
                    </svg>
                </button>
            </a>

            {/* Line 按鈕 - 更新了href和圖片路徑 */}
            <a
                href={`https://line.me/ti/p/${lineId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <button
                    className={cn(
                        "p-3 rounded-full shadow-lg transition-all",
                        "bg-[#06C755] text-white hover:bg-[#05b44c]"
                    )}
                    aria-label="LINE 聊天"
                >
                    <img src="/icon/icon-line.png" alt="LINE" className="w-6 h-6 object-contain" />
                </button>
            </a>

            {/* 電話按鈕 */}
            <a
                href={`tel:${phoneNumber}`}
                className="block"
            >
                <button
                    className={cn(
                        "p-3 rounded-full shadow-lg transition-all",
                        "bg-blue-900 text-white hover:bg-blue-800"
                    )}
                    aria-label="撥打電話"
                >
                    <Phone size={24} />
                </button>
            </a>
        </div>
    );
};

export default FloatingContactButtons;