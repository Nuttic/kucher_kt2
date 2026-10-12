import Image from 'next/image';
import bage_img from '@/media/images/bake_oliv.jpeg'
import coffee_img from '@/media/images/coffee_oliv.jpeg'


export default function Hero() {
  return (
    <section className="w-full bg-[#3d4a3e] pt-8 pb-16 lg:py-20 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Левая часть: Текст */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-serif font-light leading-tight tracking-tight max-w-md">
            Fresh Coffee & Pastries, Every Day
          </h1>
          <p className="mt-6 text-sm text-white/70 max-w-sm leading-relaxed font-light">
            A cozy neighborhood spot where specialty espresso meets warm flaky croissants. Order ahead, skip the line, and savor the moment.
          </p>
          <button className="mt-8 px-6 py-3 text-xs font-medium tracking-wider uppercase text-[#3d4a3e] bg-[#f4ebd0] rounded-full hover:bg-[#eae0c2] transition-colors">
            Order online
          </button>
        </div>

        {/* Правая часть: Визуальный коллаж */}
        <div className="flex-1 relative w-full max-w-md lg:max-w-none flex justify-center">
          <div className="grid grid-cols-2 gap-4 w-full">
            
            {/* Первая картинка (сверху скругленная) */}
            {/* Добавили relative, чтобы fill работал корректно внутри этого контейнера */}
            <div className="relative rounded-t-full overflow-hidden bg-stone-800 aspect-[3/4] shadow-md">
              <Image 
                src={coffee_img}
                alt="Coffee" 
                fill
                priority // Загружает главное изображение страницы в первую очередь
                sizes="(max-w-768px) 50vw, 33vw" // Оптимизирует размер скачиваемого файла под экран
                className="object-cover"
              />
            </div>
            
            {/* Вторая картинка (снизу скругленная) */}
            <div className="relative rounded-b-full overflow-hidden bg-stone-800 aspect-[3/4] mt-8 shadow-md">
              <Image 
                src={bage_img} 
                alt="Bakery" 
                fill
                sizes="(max-w-768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
