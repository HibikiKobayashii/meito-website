export default function ContactPage() {
    return (
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6 border-l-4 border-green-600 pl-4">
          お問い合わせ
        </h1>
  
        <p className="text-gray-700 leading-relaxed mb-8">
          株式会社めいとの事業や取り組みに関するご質問、ご相談、取材依頼などは、下記フォームよりお気軽にお問い合わせください。（現在準備中です）
        </p>
  
         {/* お問い合わせフォーム（例：実装は別途必要） */}
         <form className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
           <div className="mb-4">
             <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">お名前</label>
             <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="山田 太郎" disabled/>
           </div>
           <div className="mb-4">
             <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">メールアドレス</label>
             <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="your-email@example.com" disabled/>
           </div>
           <div className="mb-4">
             <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">件名</label>
             <input type="text" id="subject" name="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="事業に関するお問い合わせ" disabled/>
           </div>
           <div className="mb-6">
             <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">お問い合わせ内容</label>
             <textarea id="message" name="message" rows={5} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="具体的な内容をご記入ください..." disabled></textarea>
           </div>
           <div className="text-center">
             <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 disabled:opacity-50" disabled>
               送信（準備中）
             </button>
           </div>
         </form>
  
         <div className="mt-12 text-center text-gray-600">
           <p>お電話でのお問い合わせ（準備中）</p>
           {/* <p className="text-xl font-semibold">XXX-XXX-XXXX</p> */}
           <p>受付時間: 平日 9:00-17:00</p>
         </div>
      </div>
    );
  }