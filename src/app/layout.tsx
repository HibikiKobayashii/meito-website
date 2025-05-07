// src/components/Header.tsx
// レスポンシブ対応（ハンバーガーメニュー）

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react'; // useState, useEffect をインポート

// ナビゲーションリンクのデータ
const navLinks = [
  { href: '/', label: 'トップ' },
  { href: '/about', label: '私たちについて' },
  { href: '/business', label: '事業内容' },
  { href: '/sustainability', label: '地域貢献' },
  { href: '/sns', label: 'SNS' },
  { href: '/contact', label: 'お問い合わせ' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // メニューの開閉状態

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-[#98fb98] shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-3"> {/* 横パディングを調整 */}
        <div className="flex items-center justify-between h-16"> {/* 高さを固定 */}
          {/* ロゴと会社名 */}
          <div className="flex-shrink-0"> {/* ロゴが縮まないように */}
            <Link href="/" className="flex items-center space-x-3 group">
              <Image
                src="/1.png"
                alt="株式会社めいと ロゴ"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-xl sm:text-2xl font-bold text-green-900 group-hover:text-black transition-colors"> {/* スマホ用に文字サイズ調整 */}
                株式会社めいと
              </span>
            </Link>
          </div>

          {/* デスクトップ用ナビゲーション */}
          <div className="hidden md:block"> {/* md (768px) 以上で表示 */}
            <ul className="ml-10 flex items-baseline space-x-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`
                        px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out block shadow-sm
                        ${
                          isActive
                            ? 'bg-green-700 text-white'
                            : 'bg-white text-green-800 hover:bg-green-100'
                        }
                      `}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ハンバーガーメニューボタン (md未満で表示) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-green-900 hover:text-black hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              aria-label="メインメニューを開閉"
            >
              <span className="sr-only">メインメニューを開閉</span>
              {isMenuOpen ? (
                // 閉じるアイコン (X)
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // ハンバーガーアイコン (三本線)
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* モバイル用ドロップダウンメニュー */}
        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      // onClick={() => setIsMenuOpen(false)} // リンククリックでメニューを閉じる (useEffectで対応)
                      className={`
                        block px-3 py-2 rounded-md text-base font-medium
                        ${
                          isActive
                            ? 'bg-green-700 text-white'
                            : 'text-green-900 hover:bg-green-200 hover:text-green-800'
                        }
                      `}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}