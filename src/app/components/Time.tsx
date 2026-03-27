import React from "react";
import { motion } from "motion/react";
import { Clock, Orbit, Infinity as InfinityIcon } from "lucide-react";

export function Time() {
  return (
    <section className="relative py-32 bg-black overflow-hidden px-6 sm:px-12 lg:px-24 border-y border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Как работает время в космосе</h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              В космосе время не абсолютно. Альберт Эйнштейн изменил наше понимание реальности своей теорией относительности, доказав, что пространство и время сплетены в единую ткань, называемую пространством-временем.
            </p>

            <div className="space-y-8">
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-indigo-500/20 rounded-lg">
                    <Clock className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Замедление времени (Скорость)</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Чем быстрее вы движетесь в пространстве, тем медленнее вы движетесь во времени относительно неподвижного наблюдателя. Если космонавт будет путешествовать со скоростью, близкой к скорости света, он будет стареть медленнее, чем люди на Земле — этот феномен известен как Парадокс близнецов.
                </p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Orbit className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Гравитационное замедление времени</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Гравитация также искривляет время. Массивные объекты искажают ткань пространства-времени, заставляя время замедляться рядом с ними. Часы на поверхности Земли идут немного медленнее, чем часы в глубоком космосе. Вблизи сверхмассивной черной дыры этот эффект становится колоссальным.
                </p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-rose-500/20 rounded-lg">
                    <InfinityIcon className="w-5 h-5 text-rose-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Горизонт событий</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  На краю черной дыры (горизонте событий) гравитационное притяжение настолько велико, что время по сути останавливается с точки зрения стороннего наблюдателя. Если бы вы смотрели, как кто-то падает туда, он бы казался застывшим во времени навсегда.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative h-[600px] rounded-[2rem] overflow-hidden group z-10 hidden lg:block"
          >
            <img 
              src="https://images.unsplash.com/photo-1750967332174-661e239ce20b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvbGUlMjBzcGFjZSUyMHRpbWV8ZW58MXx8fHwxNzczOTk0NDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Пространство и Время"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/30" />
            
            <div className="absolute bottom-8 left-8 right-8 text-center p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/10">
              <p className="text-sm font-medium text-slate-300 italic">
                «Различие между прошлым, настоящим и будущим — это лишь упрямо стойкая иллюзия.»
              </p>
              <p className="mt-2 text-xs text-slate-400">— Альберт Эйнштейн</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
