import Image from 'next/image';
import {icons} from '@/media/images/images_export';

export default function Features() {
  const items = [
    { icon: icons.coffee_icon, title: "Specialty Coffee", desc: "Partner roasters • 100% Arabica • precise extraction." },
    { icon: icons.bake_icon, title: "Morning Bakery", desc: "Croissants, danishes, tarts & focaccia baked in-house." },
    { icon: icons.breakfast_icon, title: "All-day Breakfast", desc: "Stretch your morning — classics served until closing." },
    { icon: icons.location_icon, title: "Fast Pickup", desc: "Order ahead; be on your way in 15 minutes." }
  ];

  return (
    <section className="w-full bg-[#fafaf7] py-16 text-stone-800 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Адаптивная сетка: 1 колонка на смартфонах, 2 на планшетах, 4 на десктопах */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center p-2">
              
              {/* Контейнер для иконки с отступом снизу */}
              <div className="mb-4">
                <Image 
                  src={item.icon}
                  alt={item.title}
                  width={120}  
                  height={120} 
                  // МЫ ИЗМЕНИЛИ ЗДЕСЬ: w-16 h-16 сделает иконки крупными (64x64px). 
                  // Если нужно еще больше, поставь w-20 h-20 (80x80px).
                  // Также исправили скругление на rounded-xl для мягких уголков.
                  className="w-20 h-20 object-contain rounded-xl" 
                />
              </div>

              <h3 className="font-serif text-lg font-medium text-stone-900">{item.title}</h3>
              <p className="mt-2 text-xs text-stone-500 leading-relaxed max-w-[200px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
