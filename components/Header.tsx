import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-[#3d4a3e] text-white">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Логотип */}
        <Link href="/" className="text-xl font-serif tracking-wide font-medium">
          Bakery & Café
        </Link>

        {/* Навигация — на мобильных скрыта (hidden), на экранах md и больше — flex */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase opacity-80">
          <Link href="/" className="hover:opacity-100 transition-opacity">Home</Link>
          <Link href="/menu" className="hover:opacity-100 transition-opacity">Menu</Link>
          <Link href="/contacts" className="hover:opacity-100 transition-opacity">Contact us</Link>
        </nav>

        {/* Кнопка заказа — округлая, молочного цвета */}
        <div>
          <button className="px-5 py-2 text-xs font-medium tracking-wider uppercase text-[#3d4a3e] bg-[#f4ebd0] rounded-full hover:bg-[#eae0c2] transition-colors shadow-sm">
            Order online
          </button>
        </div>

      </div>
    </header>
  );
}
