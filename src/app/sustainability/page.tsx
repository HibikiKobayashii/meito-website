

export default function SustainabilityPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-green-600 pl-4">
        地域貢献・サステナビリティ
      </h1>

      <p className="text-gray-700 leading-relaxed mb-8">
        株式会社めいとは、事業活動を通じて南魚沼市の持続可能な発展に貢献することを目指しています。環境への配慮、地域資源の活用、そして地域コミュニティとの共生を大切にします。
      </p>

      {/* 雪エネルギー */}
      <section className="mb-12 p-6 border rounded-lg shadow-sm">
         <h2 className="text-2xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655 9.75 21.75l3.745-4.032 4.125 4.032-1.662-6.095m.165-3.572 1.663 6.095M11.575 12.083l3.746-4.032 4.125 4.032L17.783 5.99a1.873 1.873 0 0 0-3.174 0l-1.663 6.095Z M9.75 21.75 3 15.375l1.662-6.095M9.75 21.75c-1.23 0-2.437-.39-3.443-1.155A8.98 8.98 0 0 1 3 15.375V9.75c0-1.23.39-2.438 1.155-3.443l.001-.001c1.006-.766 2.212-1.155 3.443-1.155h6c1.23 0 2.438.39 3.443 1.155l.001.001c.766 1.006 1.155 2.213 1.155 3.443v5.625c0 1.23-.39 2.438-1.155 3.443l-.001.001c-1.006.766-2.212 1.155-3.443 1.155H9.75Z" />
          </svg>
          雪エネルギーによる環境貢献
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          豊富な地域資源である雪を活用した「雪エネルギー」は、化石燃料の使用を削減し、CO2排出量を抑制します。施設の冷却に必要なエネルギーをクリーンに賄うことで、地球温暖化防止に貢献します。
        </p>
        {/* <Image src="/path/to/snow-cooling.jpg" alt="雪冷房" width={700} height={350} className="w-full h-auto object-cover my-4 rounded-lg shadow"/> */}
        <div className="w-full h-56 bg-gray-200 my-4 rounded-lg shadow flex items-center justify-center text-gray-500">（雪エネルギーによる冷却イメージ）</div>
      </section>

      {/* 空き家活用 */}
      <section className="mb-12 p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          空き家活用による地域活性化
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          南魚沼市内で増加する空き家を、カフェやアンテナショップ（直売所）として改修・活用します。これにより、空き家問題の解決に貢献するとともに、地域の景観維持や新たな賑わいの創出を目指します。
        </p>
        <p className="text-gray-700 leading-relaxed">
         アンテナショップは、地域住民や観光客の方々との交流拠点となり、私たちが生産した新鮮な野菜を直接お届けする場となります。
        </p>
         {/* <Image src="/path/to/shop-front.jpg" alt="アンテナショップ" width={700} height={350} className="w-full h-auto object-cover my-4 rounded-lg shadow"/> */}
         <div className="w-full h-56 bg-gray-200 my-4 rounded-lg shadow flex items-center justify-center text-gray-500">（空き家改修・アンテナショップイメージ）</div>
      </section>

      {/* 農家連携 */}
       <section className="mb-12 p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-orange-700 mb-4 flex items-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.94-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.06 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          </svg>
          地域農業との連携による共生
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          地域の農業を担ってきた農家の方々との連携は、私たちの事業の根幹です。水耕栽培の技術を提供し、栽培を委託することで、農家の方々の安定した収入と新たな活躍の機会を創出します。
        </p>
         <p className="text-gray-700 leading-relaxed">
          長年の経験と知識を持つ農家の方々と協力することで、地域農業全体の活性化と、次世代への技術継承にも貢献していきたいと考えています。
        </p>
        {/* <Image src="/path/to/farmer-hands.jpg" alt="農家との協力" width={700} height={350} className="w-full h-auto object-cover my-4 rounded-lg shadow"/> */}
        <div className="w-full h-56 bg-gray-200 my-4 rounded-lg shadow flex items-center justify-center text-gray-500">（農家との協力イメージ）</div>
      </section>
    </div>
  );
}