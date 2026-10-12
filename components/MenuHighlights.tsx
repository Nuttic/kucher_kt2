import Image from 'next/image';
import { coffee_cards } from '@/media/images/images_export';

export default function MenuHighlights() {
  const categories = [
    { 
      title: "Pumpkin Spice Latte with Whipped Cream", 
      // Замени на реальную рабочую ссылку, если это была заглушка
      img: coffee_cards?.autumn_coffee_one 
    },
    { 
      title: "Maple Pecan Raf with Sea Salt", 
      img: coffee_cards?.autumn_coffee_two 
    },
    { 
      title: "Autumn Chestnut Matcha Latte", 
       img: coffee_cards?.autumn_coffee_three 
    }
  ];

  return (
    <section className="w-full bg-[#fafaf7] py-16 text-stone-800">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col sm:flex-row justify-between items-baseline mb-10 gap-2">
          <h2 className="text-3xl font-serif text-stone-900">Menu Highlights</h2>
          <span className="text-xs text-stone-500 underline cursor-pointer hover:text-stone-800 transition-colors">
            Full menu available in store and online
          </span>
        </div>

        {/* Сетка карточек: 1 колонка на мобилках, 3 на десктопе */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer shadow-sm"
            >
              {/* Оптимизированный Image вместо обычного img */}
              <Image 
                src={cat.img} 
                alt={cat.title} 
                fill
                sizes="(max-w-768px) 100vw, 33vw" // 100% ширины на мобилке, 1/3 экрана на десктопе
                className="object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              
              {/* Затемняющий градиент снизу вверх (z-10, чтобы быть поверх картинки, но под текстом) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              
              {/* Текст поверх картинки */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                {/* Твой подключенный локальный шрифт font-serif */}
                <h3 className="text-2xl font-serif text-white leading-tight max-w-[200px]">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
