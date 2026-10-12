import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import MenuHighlights from '@/components/MenuHighlights';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    // flex flex-col и min-h-screen в связке с mt-auto у футера прижимают его к низу
    <div className="min-h-screen flex flex-col bg-[#1c261e]">
      <Header />
      
      {/* Основной контент страницы */}
      <main className="flex-grow">
        <Hero />
        <Features />
        <MenuHighlights />
        <About />
      </main>
      
      <Footer />
    </div>
  );
}
