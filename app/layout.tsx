import './globals.css';
import localFont from "next/font/local";

const titleFont = localFont({
  src: "../media/fonts/Madame_Donatella.ttf", // Точный относительный путь к твоему файлу
  variable: "--font-serif",         // CSS-переменная для Tailwind
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      {/* text-stone-700 задает темно-серый цвет для обычного текста */}
      <body className={`${titleFont.variable} bg-[#fafaf7] text-stone-700 min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
