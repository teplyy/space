import React from "react";
import { motion } from "motion/react";
import { Info, VolumeX, ThermometerSun, Hexagon, Fingerprint, Gem } from "lucide-react";

const facts = [
  {
    icon: VolumeX,
    title: "Абсолютная тишина",
    desc: "Звуку нужна среда для распространения, например воздух или вода. Космос — это вакуум, поэтому в нем совершенно тихо.",
  },
  {
    icon: ThermometerSun,
    title: "Экстремальные температуры",
    desc: "На солнце температура на МКС может достигать 121°C. В тени она резко падает до -157°C.",
  },
  {
    icon: Hexagon,
    title: "Миллион планет Земля",
    desc: "Наше Солнце настолько велико, что внутри него могло бы поместиться примерно 1,3 миллиона планет размером с Землю.",
  },
  {
    icon: Fingerprint,
    title: "Следы на Луне",
    desc: "Поскольку на Луне нет ни ветра, ни воды, следы астронавтов миссии «Аполлон» сохранятся там на протяжении 100 миллионов лет.",
  },
  {
    icon: Gem,
    title: "Алмазная планета",
    desc: "Считается, что планета 55 Рака e, расположенная в 40 световых годах от нас, в значительной степени состоит из алмазов из-за высоких температур и давления.",
  },
  {
    icon: Info,
    title: "Деревья против звезд",
    desc: "На Земле насчитывается около 3 триллионов деревьев, но в галактике Млечный Путь всего от 100 до 400 миллиардов звезд.",
  },
];

export function Facts() {
  return (
    <section className="py-32 bg-black px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Удивительные факты</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Небольшие порции знаний, которые показывают, насколько странной и невероятной на самом деле является наша Вселенная.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, i) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-colors"
              >
                <div className="w-12 h-12 bg-indigo-500/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{fact.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {fact.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
