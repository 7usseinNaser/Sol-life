import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen flex items-center justify-center bg-[#F6FAF9] text-[#0F2A3A] p-4">
        <div className="max-w-md text-center bg-white p-8 rounded-2xl shadow-lg border border-[#0D5260]/10">
          <h1 className="text-4xl font-extrabold text-[#08324A] mb-2">404</h1>
          <p className="text-lg font-medium text-[#0D5260] mb-4">الصفحة المطلوبة غير موجودة</p>
          <p className="text-sm text-[#4A6572] mb-6">
            عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها.
          </p>
          <Link
            href="/ar"
            className="inline-block px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#08324A] hover:bg-[#40A39C] transition-colors"
          >
            العودة للرئيسية
          </Link>
        </div>
      </body>
    </html>
  );
}
