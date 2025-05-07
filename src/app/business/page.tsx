

export default function BusinessPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-green-600 pl-4">
        事業内容
      </h1>

      {/* 主たる事業: 水耕栽培 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">計画生産型 水耕栽培事業</h2>
        <div className="md:flex gap-8 items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
            {/* <Image src="/path/to/factory.jpg" alt="水耕栽培工場" width={600} height={400} className="w-full h-auto object-cover rounded-lg shadow"/> */}
            <div className="w-full h-64 bg-gray-200 rounded-lg shadow flex items-center justify-center text-gray-500">（新築工場イメージ）</div>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed mb-4">
              南魚沼市内に新設する専用工場にて、年間を通じた計画生産型の水耕栽培を行います。天候の影響を受けずに、安定した品質と量を確保します。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              主力の生産品目は、市場性の高い葉物野菜やハーブなどの高付加価値野菜です。清潔な環境で栽培管理を行い、安全・安心な食を提供します。
            </p>
            <p className="text-gray-700 leading-relaxed">
              将来的には、市場ニーズや技術革新に応じて、米などの新たな作物の研究・生産にも挑戦していきます。
            </p>
          </div>
        </div>
      </section>

      {/* 地域資源の活用: 雪エネルギー */}
      <section className="mb-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">地域資源の活用：雪エネルギー</h2>
         <div className="md:flex gap-8 items-center">
           <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed mb-4">
              南魚沼の豊富な雪を貴重な地域資源「雪エネルギー」として捉え、雪氷熱エネルギーシステムを導入します。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              貯蔵した雪や氷を活用し、栽培施設や貯蔵庫の冷熱源として利用。特に夏季の冷房コストを大幅に削減し、化石燃料の使用を抑制することで、カーボンニュートラルにも貢献します。
            </p>
           </div>
           <div className="md:w-1/2 mb-4 md:mb-0 order-first md:order-last">
              {/* <Image src="/path/to/snow-energy.jpg" alt="雪エネルギーシステム" width={600} height={400} className="w-full h-auto object-cover rounded-lg shadow"/> */}
              <div className="w-full h-64 bg-gray-200 rounded-lg shadow flex items-center justify-center text-gray-500">（雪エネルギー活用イメージ）</div>
           </div>
        </div>
      </section>

      {/* 独自の運営モデル: 農家連携 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-orange-700 mb-4">独自の運営モデル：地域農家との連携</h2>
         <div className="md:flex gap-8 items-center">
          <div className="md:w-1/2 mb-4 md:mb-0">
              {/* <Image src="/path/to/farmer-meeting.jpg" alt="農家との連携" width={600} height={400} className="w-full h-auto object-cover rounded-lg shadow"/> */}
              <div className="w-full h-64 bg-gray-200 rounded-lg shadow flex items-center justify-center text-gray-500">（農家連携イメージ）</div>
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed mb-4">
              私たちは、地域の農業を支えてこられた既存の農家さんとの連携を重視します。栽培オペレーションの一部または大部分を、経験豊富な農家さんに委託するモデルを目指します。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              株式会社めいとは、最新の施設・システムの提供、水耕栽培に関する技術サポート、資材供給、品質管理基準の設定、そして生産物の販売・マーケティング、事業全体の経営管理を担当します。
            </p>
             <p className="text-gray-700 leading-relaxed">
              これにより、農家さんの新たな活躍の場を創出し、地域農業の活性化と持続可能性に貢献します。
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}