// src/app/sns/page.tsx
// 修正済みコード (クライアントコンポーネント化)

'use client'; // ← ファイルの一番上にこれを追加してエラーを解消

import Link from 'next/link';
// アイコンを使いたい場合は react-icons などをインストールしてインポートします
// import { FaTwitter, FaInstagram, FaFacebook, FaLine } from 'react-icons/fa';

export default function SnsPage() {

  // =============================================
  //  ↓ 各SNSのURLをここに入力してください ↓
  // =============================================
  // URLがまだない場合は、 '#' のままにしておくと「準備中」と表示されます。
  // URLを入力すると、自動的にリンクが有効になります。

  const twitterUrl: string = '#'; // 例: 'https://twitter.com/your_account'
  const instagramUrl: string = '#'; // 例: 'https://www.instagram.com/your_account/'
  const facebookUrl: string = '#'; // 例: 'https://www.facebook.com/your_page'
  const lineUrl: string = '#'; // 例: 'https://line.me/R/ti/p/%40your_line_id'
  // 他のSNSアカウントがあれば、同様に下のリストに追加してください。

  // =============================================
  //  ↑ URLの入力はここまで ↑
  // =============================================


  // --- 表示するSNSのリスト ---
  const snsList = [
    {
      name: 'X (Twitter)',
      url: twitterUrl,
      description: '最新のお知らせや速報などを発信します。',
      // icon: FaTwitter, // アイコンを使う場合
      buttonLabel: 'X でフォロー',
      buttonClasses: 'bg-black text-white hover:bg-gray-700', // ボタンの色など
    },
    {
      name: 'Instagram',
      url: instagramUrl,
      description: '農場の様子や野菜の写真を投稿します。',
      // icon: FaInstagram,
      buttonLabel: 'Instagram でフォロー',
      buttonClasses: 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white hover:opacity-90',
    },
    {
      name: 'Facebook',
      url: facebookUrl,
      description: 'イベント情報や地域連携についてお知らせします。',
      // icon: FaFacebook,
      buttonLabel: 'Facebook でフォロー',
      buttonClasses: 'bg-blue-700 text-white hover:bg-blue-800',
    },
    {
      name: 'LINE公式アカウント',
      url: lineUrl,
      description: 'お得な情報や直売所の案内などを配信予定です。',
      // icon: FaLine,
      buttonLabel: 'LINE で友だち追加',
      buttonClasses: 'bg-green-500 text-white hover:bg-green-600',
    },
    // 他のSNSを追加する場合は、この形式で要素を追加
  ];


  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-green-600 pl-4">
        SNSアカウント
      </h1>

      <p className="text-gray-700 leading-relaxed mb-10">
        株式会社めいとの最新情報や、日々の栽培の様子などを発信しています。ぜひフォローをお願いします！
      </p>

      <div className="space-y-8"> {/* 各SNS間のスペース */}
        {snsList
          .filter(sns => sns.url) // URLが空でないものだけ表示（念のため）
          .map((sns) => (
          <div key={sns.name}>
            <h2 className="text-xl font-semibold text-gray-700 mb-2 flex items-center gap-2">
              {/* {sns.icon && <sns.icon />} */} {/* アイコン表示 */}
              {sns.name}
            </h2>
            <p className="text-gray-600 mb-3">
              {sns.description}
            </p>
            {/* onClick を含む Link はクライアントコンポーネント内で使う必要がある */}
            <Link
              href={sns.url}
              target={sns.url !== '#' ? '_blank' : undefined} // URLが#でなければ別タブで開く
              rel="noopener noreferrer"
              className={`inline-block px-5 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out shadow-sm ${
                sns.url === '#'
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' // URL未設定時のスタイル
                  : sns.buttonClasses // URL設定時のスタイル
              }`}
              aria-disabled={sns.url === '#'}
              onClick={(e) => { if (sns.url === '#') e.preventDefault(); }} // URL未設定時はクリック無効
            >
              {sns.url === '#' ? '準備中' : sns.buttonLabel}
            </Link>
            {sns.url === '#' && (
              <p className="text-xs text-red-500 mt-1">
                {/* URL未設定時に表示される注意書き (より汎用的に) */}
                ※ URLを `src/app/sns/page.tsx` の `{
                  Object.keys({twitterUrl, instagramUrl, facebookUrl, lineUrl}).find(key => eval(key) === sns.url) || '該当変数'
                 }` に入力してください。
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}