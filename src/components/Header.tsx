// src/components/Header.tsx
// SNSリンク追加後の全文

'use client'; // クライアントコンポーネントにする (usePathname を使うため)

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // 現在のパスを取得するためにインポート

// ナビゲーションリンクのデータを配列化（管理しやすくするため）
const navLinks = [
  { href: '/', label: 'トップ' },
  { href: '/about', label: '私たちについて' },
  { href: '/business', label: '事業内容' },
  { href: '/sustainability', label: '地域貢献' },
  { href: '/sns', label: 'SNS' }, // ← SNSページへのリンクを追加しました
  { href: '/contact', label: 'お問い合わせ' },
];

export default function Header() {
  const pathname = usePathname(); // 現在のページのパスを取得

  return (
    // header タグ: 背景色を #98fb98 (PaleGreen) に変更
    <header className="bg-[#98fb98] shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* ロゴと会社名 */}
        <Link href="/" className="flex items-center space-x-3 group">
          <Image
            src="/1.png" // publicフォルダからのパス
            alt="株式会社めいと ロゴ"
            width={40}   // 画像の幅 (必須) - 必要に応じて調整
            height={40}  // 画像の高さ (必須) - 必要に応じて調整
            className="h-10 w-10" // Tailwindでのサイズ指定 (任意)
          />
          {/*
            ↓ ヘッダー背景色変更に伴う文字色調整例 (任意)
            元の色は text-green-700 group-hover:text-green-800 でした。
            背景が明るい緑になったため、濃い色へ変更しています。
          */}
          <span className="text-2xl font-bold text-green-900 group-hover:text-black transition-colors">
            株式会社めいと
          </span>
        </Link>

        {/* ナビゲーションボタン */}
        <ul className="flex space-x-2"> {/* ボタン間のスペース */}
          {navLinks.map((link) => {
            // 現在のパスとリンクのhrefが一致するかどうかでアクティブ状態を判定
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  // ボタンのスタイル
                  className={`
                    px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out block shadow-sm
                    ${ // isActiveの値に応じてスタイルを切り替え
                      isActive
                        ? 'bg-green-700 text-white' // アクティブなリンクのスタイル
                        : 'bg-white text-green-800 hover:bg-green-100' // 通常・ホバー時のスタイル
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}