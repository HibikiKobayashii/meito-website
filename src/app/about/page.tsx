import Image from 'next/image';

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-green-600 pl-4">
        私たちについて
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">株式会社めいとの使命</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          株式会社めいとは、新潟県南魚沼市が直面する人口減少、高齢化、農業の担い手不足、空き家問題といった複合的な地域課題に対し、革新的な農業技術と地域資源の活用を通じて貢献することを使命としています。
        </p>
        <p className="text-gray-700 leading-relaxed">
          私たちは、「南魚沼産」というブランドが持つ価値と、先進的な水耕栽培技術、そして地域固有の資源である「雪」を結びつけ、「伝統×革新」による新しい食の価値を創造し、持続可能な地域社会の実現を目指します。
        </p>
         {/* <Image src="/path/to/minamiuonuma.jpg" alt="南魚沼の風景" width={800} height={400} className="w-full h-auto object-cover my-6 rounded-lg shadow"/> */}
         <div className="w-full h-64 bg-gray-200 my-6 rounded-lg shadow flex items-center justify-center text-gray-500">（南魚沼の風景イメージ）</div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">めざす未来</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>最新の水耕栽培技術と雪エネルギー活用による、環境負荷の少ない高効率な食料生産。</li>
          <li>空き家の再生・活用を通じた、地域景観の保全と新たなコミュニティ拠点の創出。</li>
          <li>地域の既存農家との連携による、農業技術の継承と新たな雇用の創出。</li>
          <li>天候に左右されない安定供給体制による、食の安定確保への貢献。</li>
          <li>「南魚沼ブランド」の価値向上と、地域経済の活性化。</li>
        </ul>
      </section>

      {/* 会社概要などを追加 */}
      <section>
        <h2 className="text-2xl font-semibold text-green-700 mb-4">会社概要</h2>
        <table className="w-full border-collapse border border-gray-300">
          <tbody>
            <tr className="border border-gray-300">
              <th className="bg-gray-100 p-3 text-left w-1/4">会社名</th>
              <td className="p-3">株式会社めいと</td>
            </tr>
            <tr className="border border-gray-300">
              <th className="bg-gray-100 p-3 text-left">所在地</th>
              <td className="p-3">新潟県南魚沼市（予定）</td>
            </tr>
            <tr className="border border-gray-300">
              <th className="bg-gray-100 p-3 text-left">事業内容</th>
              <td className="p-3">水耕栽培事業、雪エネルギー活用、空き家活用、地域連携事業</td>
            </tr>
             {/* 他の項目（設立年月日、代表者名、資本金など）を追加 */}
          </tbody>
        </table>
      </section>
    </div>
  );
}