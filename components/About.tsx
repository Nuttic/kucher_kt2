import Image from 'next/image';
import cafe_img from '@/media/images/cafe.jpeg'


export default function About() {
  return (
    <section className="w-full bg-[#fafaf7] pb-24 pt-8 text-stone-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Картинка интерьера — Добавили relative для работы fill */}
        <div className="relative w-full md:w-1/2 aspect-[4/5] rounded-2xl overflow-hidden shadow-sm">
          <Image 
            src={cafe_img}
            alt="Our Bakery Interior"
            fill
            sizes="(max-w-768px) 100vw, 50vw" // На мобилках картинка на весь экран, на десктопе занимает половину
            className="object-cover"
          />
        </div>
        
        {/* Текст про кофейню */}
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <h2 className="text-4xl font-serif text-stone-900 mb-6">About Our Bakery & Café</h2>
          <p className="text-sm text-stone-600 leading-relaxed font-light mb-6">
            We are a local bakery-cafe serving our neighborhood since 2018. Every morning we bake in-house and pull carefully dialed shots of specialty coffee. We lean on local, seasonal ingredients and keep quality consistent.
          </p>
          <ul className="text-xs text-stone-700 space-y-2 mb-8 font-medium">
            <li>• In-house bakery</li>
            <li>• Partner roasters & single-origin beans</li>
            <li>• Warm service and a calm atmosphere</li>
          </ul>
          <button className="px-6 py-3 text-xs font-medium tracking-wider uppercase text-white bg-[#3d4a3e] rounded-full hover:bg-[#2f3a30] transition-colors">
            Order online
          </button>
        </div>

      </div>
    </section>
  );
}
