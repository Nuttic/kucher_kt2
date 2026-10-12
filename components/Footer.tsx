export default function Footer() {
  return (
    // mt-auto гарантирует, что если контента мало, футер прыгнет вниз
    <footer className="w-full bg-[#3d4a3e] text-white/60 py-8 border-t border-white/5 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="font-serif text-white text-base">Bakery & Café</div>
        <p className="text-xs">
          © 2026 Bakery & Café. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
