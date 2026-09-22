import { motion, useReducedMotion } from "framer-motion"
import { FeatureCard } from "../ui/FeatureCard"
import { whyOncoTargetItems } from "../../data/whyOncoTarget"

export function WhyOncoTarget() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="ejes" className="bg-white px-4 py-10 mt-1 sm:px-8 md:py-16 xl:mt-8">
      <div className="mx-auto max-w-[1350px]">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
        >
          <h2 className="text-3xl font-bold leading-tight text-onco-primary sm:text-4xl lg:text-6xl">
            ¿Por qué ONCO-TARGET PULMÓN?
          </h2>

          <p className="mt-5 text-xl font-medium italic text-onco-light sm:text-2xl lg:text-4xl">
            Porque la oncología está en constante evolución.
          </p>

          <div className="mt-5 w-full text-justify text-base leading-[1.45] text-onco-text sm:text-[1.05rem] xl:text-2xl">
            <p>
              Nuevos conocimientos, herramientas diagnósticas y alternativas
              terapéuticas plantean desafíos que requieren actualización
              permanente y trabajo interdisciplinario.
            </p>

            <p>
              ONCO-TARGET busca generar un espacio donde los profesionales
              puedan compartir experiencias, debatir perspectivas y mantenerse
              cerca de los avances que están transformando el abordaje del
              cáncer de pulmón.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-9 md:grid-cols-2">
          {whyOncoTargetItems.map((item, index) => (
            <FeatureCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}