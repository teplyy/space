import React from "react";
import { motion } from "motion/react";
import { Rocket, Satellite, Moon, Star, Orbit } from "lucide-react";

const milestones = [
  {
    year: "1957",
    title: "Спутник-1",
    description: "Советский Союз запустил первый искусственный спутник Земли, положив начало Космической гонке.",
    icon: Satellite,
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1554668125-ffae9502cac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHBsYW5ldCUyMHN1cmZhY2UlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3Mzk5NjA0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    year: "1961",
    title: "Первый человек в космосе",
    description: "Юрий Гагарин стал первым человеком, совершившим полет в космическое пространство, облетев Землю по орбите.",
    icon: Rocket,
    color: "bg-red-500",
  },
  {
    year: "1969",
    title: "Высадка Аполлона-11 на Луну",
    description: "Нил Армстронг и Базз Олдрин стали первыми людьми, ступившими на поверхность Луны.",
    icon: Moon,
    color: "bg-slate-300",
    image: "https://images.unsplash.com/photo-1601852863985-fff524e8b351?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjB3YWxraW5nJTIwb24lMjBtb29uJTIwc3VyZmFjZXxlbnwxfHx8fDE3NzM5OTYwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    year: "1990",
    title: "Космический телескоп «Хаббл»",
    description: "Выведенный на низкую околоземную орбиту, он произвел революцию в астрономии, позволив заглянуть в глубокий космос.",
    icon: Star,
    color: "bg-indigo-400",
    image: "https://images.unsplash.com/photo-1706562018449-80798c031923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodWJibGUlMjBzcGFjZSUyMHRlbGVzY29wZXxlbnwxfHx8fDE3NzM5OTYwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    year: "1998",
    title: "Строительство МКС",
    description: "На орбиту был выведен первый модуль Международной космической станции, что стало началом новой эры сотрудничества.",
    icon: Orbit,
    color: "bg-emerald-500",
    image: "https://images.unsplash.com/photo-1614314007212-0257d6e2f7d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJU1MlMjBpbnRlcm5hdGlvbmFsJTIwc3BhY2UlMjBzdGF0aW9uJTIwb3JiaXR8ZW58MXx8fHwxNzczOTk2MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    year: "2021",
    title: "Телескоп «Джеймс Уэбб»",
    description: "Самый мощный космический телескоп из когда-либо созданных, предназначенный для наблюдения за самыми ранними галактиками во Вселенной.",
    icon: Star,
    color: "bg-amber-400",
    image: "https://images.unsplash.com/photo-1707589026900-cf2f31c44c89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYW1lcyUyMHdlYmIlMjBzcGFjZSUyMHRlbGVzY29wZSUyMHVuaXZlcnNlfGVufDF8fHx8MTc3Mzk5NjA0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
];

export function History() {
  return (
    <section className="py-32 bg-slate-900 px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">История освоения космоса</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Путь человечества к звездам был отмечен невероятными достижениями и беспрецедентной отвагой.
          </p>
        </motion.div>

        {/* Timeline Desktop/Tablet */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2" />
          
          <div className="space-y-16">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={item.year} className={`flex items-center justify-between w-full ${isEven ? 'flex-row-reverse' : ''}`}>
                  <div className="w-[45%] flex justify-end">
                    {item.image && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className={`w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10 ${isEven ? 'mr-auto' : 'ml-auto'}`}
                      >
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </motion.div>
                    )}
                  </div>
                  
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className={`w-12 h-12 rounded-full border-4 border-slate-900 ${item.color} flex items-center justify-center z-10 shadow-xl`}
                    >
                      <Icon className="w-5 h-5 text-slate-900" />
                    </motion.div>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`w-[45%] ${isEven ? 'text-right' : 'text-left'}`}
                  >
                    <div className="bg-slate-800/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm hover:bg-slate-800/80 transition-colors duration-300">
                      <span className={`text-sm font-bold tracking-widest ${item.color.replace('bg-', 'text-')} mb-2 block`}>
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Mobile */}
        <div className="md:hidden space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
          {milestones.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex flex-col gap-4 pl-14"
              >
                <div className={`absolute left-0 top-0 flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 ${item.color} shadow z-10`}>
                  <Icon className="w-4 h-4 text-slate-900" />
                </div>
                
                <div className="p-5 rounded-2xl bg-slate-800/50 border border-white/5 backdrop-blur-sm">
                  <span className={`text-sm font-bold tracking-widest ${item.color.replace('bg-', 'text-')} mb-2 block`}>
                    {item.year}
                  </span>
                  <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                  <div className="text-slate-400 text-sm leading-relaxed mb-4">{item.description}</div>
                  
                  {item.image && (
                    <div className="rounded-xl overflow-hidden border border-white/10 mt-4">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-32 object-cover"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
