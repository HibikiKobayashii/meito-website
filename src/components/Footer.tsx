export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="bg-gray-100 mt-12 py-6">
        <div className="container mx-auto px-6 text-center text-gray-600 text-sm">
          &copy; {currentYear} 株式会社めいと. All rights reserved.
          {/* 住所や追加情報など */}
        </div>
      </footer>
    );
  }