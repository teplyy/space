import React from "react";
import { motion } from "motion/react";
import { Telescope, Maximize2, Globe2 } from "lucide-react";

export function Concept() {
  return (
    <section className="py-32 bg-slate-950 text-slate-200 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Что такое космос?</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Космос — это безграничное трехмерное пространство, в котором объекты и события имеют относительные координаты и направление. Но это не пустая пустота. Это динамичная, расширяющаяся ткань, полная материи, темной материи и темной энергии.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1602403110084-dae09492be83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNwYWNlJTIwZXhwYW5zaW9uJTIwdW5pdmVyc2V8ZW58MXx8fHwxNzczOTk0NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Расширение Вселенной"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center">
                  <Maximize2 className="w-6 h-6 text-indigo-400" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">Расширяющаяся Вселенная</h3>
                <p className="text-slate-400 leading-relaxed">
                  Вселенная не расширяется *во что-то*; само пространство растягивается. Согласно закону Хаббла, галактики удаляются от нас со скоростью, пропорциональной их расстоянию. Скорость этого расширения известна как постоянная Хаббла и оценивается примерно в 70-73 км/с на мегапарсек.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-fuchsia-500/10 flex items-center justify-center">
                  <Globe2 className="w-6 h-6 text-fuchsia-400" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">Наблюдаемая Вселенная</h3>
                <p className="text-slate-400 leading-relaxed">
                  Поскольку свету требуется время, чтобы добраться до нас, глядя вглубь космоса, мы смотрим в прошлое. «Наблюдаемая Вселенная» — это сферическая область, включающая всю материю, которую можно наблюдать с Земли в данный момент. Ее диаметр составляет около 93 миллиардов световых лет.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Telescope className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">Быстрее света?</h3>
                <p className="text-slate-400 leading-relaxed">
                  Кажется, что очень далекие галактики удаляются быстрее скорости света. Это не нарушает теорию относительности, потому что объекты не движутся *сквозь* пространство быстрее света; скорее, расширяется само пространство *между* ними.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
