import React from "react";
import { motion } from "motion/react";
import { Sparkles, Atom, Zap, CircleDashed } from "lucide-react";

const theories = [
  {
    title: "Теория Мультивселенной",
    description: "Наша Вселенная может быть лишь одной из бесконечного множества вселенных, бурлящих в гораздо большей космической ткани. В каждой из них могут быть совершенно другие законы физики.",
    icon: Sparkles,
    image: "https://images.unsplash.com/flagged/photo-1578306036170-5400700bc45b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aXZlcnNlJTIwY29zbWljJTIwd2ViJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzczOTk2MDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Теория Струн",
    description: "Теоретическая концепция, в которой точечные частицы заменяются одномерными «струнами». Она пытается примирить общую теорию относительности с квантовой механикой.",
    icon: Atom,
  },
  {
    title: "Темная материя и энергия",
    description: "Обычная материя составляет всего 5% Вселенной. Остальное — это темная материя (27%), удерживающая галактики вместе, и темная энергия (68%), ускоряющая расширение.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1710678245392-6c540003805a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbWF0dGVyJTIwZW5lcmd5JTIwbmVidWxhfGVufDF8fHx8MTc3Mzk5NjAzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Конец: Большой разрыв, замерзание или сжатие",
    description: "В зависимости от плотности Вселенной и темной энергии, она может расширяться вечно, пока не погаснут звезды (замерзание), разорвать саму себя (разрыв) или коллапсировать обратно в сингулярность (сжатие).",
    icon: CircleDashed,
  }
];

export function Theories() {
  return (
    <section className="py-32 bg-slate-950 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Умопомрачительные теории
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Чем больше мы узнаем о космосе, тем больше возникает вопросов. Вот некоторые из самых известных теоретических моделей в современной астрофизике.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {theories.map((theory, i) => {
            const Icon = theory.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors overflow-hidden flex flex-col"
              >
                {theory.image && (
                  <div className="h-48 w-full overflow-hidden">
                    <img 
                      src={theory.image} 
                      alt={theory.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                
                <div className="relative z-10 p-8 flex-1 flex flex-col">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-indigo-400" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{theory.title}</h3>
                  <p className="text-slate-400 leading-relaxed mt-auto">
                    {theory.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
