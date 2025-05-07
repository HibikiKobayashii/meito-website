
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* ヒーローセクション */}
      <section className="text-center py-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          南魚沼の恵みを、未来へ。
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          雪と、空き家と、人と、育む新しい農業のカタチ。
        </p>
        <Link
          href="/about"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          めいとについて知る
        </Link>
      </section>

      {/* 事業の柱 */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          私たちの取り組み
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* 水耕栽培と雪エネルギー */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            {/* <Image src="/path/to/hydroponics.jpg" alt="水耕栽培" width={500} height={300} className="w-full h-48 object-cover mb-4 rounded"/> */}
            <div className="w-full h-48 bg-gray-200 mb-4 rounded flex items-center justify-center text-gray-500">（水耕栽培イメージ）</div>
            <h3 className="text-xl font-semibold text-green-700 mb-2">先進技術と自然の融合</h3>
            <p className="text-gray-600">
              計画生産型の水耕栽培と、南魚沼の豊富な雪を活用した「雪エネルギー」により、高品質な野菜を通年安定供給。環境負荷低減にも貢献します。
            </p>
          </div>
          {/* 空き家活用 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
             {/* <Image src="/path/to/akiya.jpg" alt="空き家活用" width={500} height={300} className="w-full h-48 object-cover mb-4 rounded"/> */}
             <div className="w-full h-48 bg-gray-200 mb-4 rounded flex items-center justify-center text-gray-500">（空き家活用イメージ）</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">地域資源の新たな価値</h3>
            <p className="text-gray-600">
              増加する空き家をカフェや直売所として再生。地域課題の解決に貢献し、コミュニティとの接点を創出します。
            </p>
          </div>
          {/* 農家連携 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
             {/* <Image src="/path/to/collaboration.jpg" alt="農家連携" width={500} height={300} className="w-full h-48 object-cover mb-4 rounded"/> */}
             <div className="w-full h-48 bg-gray-200 mb-4 rounded flex items-center justify-center text-gray-500">（農家連携イメージ）</div>
            <h3 className="text-xl font-semibold text-orange-700 mb-2">地域との共生</h3>
            <p className="text-gray-600">
              地域の農家さんと連携し、栽培オペレーションを委託。技術と経験を活かし、共に発展するモデルを目指します。
            </p>
          </div>
        </div>
      </section>

      {/* 追加セクション（例：ミッション、ニュースなど） */}
      {/* ... */}
    </div>
  );
}