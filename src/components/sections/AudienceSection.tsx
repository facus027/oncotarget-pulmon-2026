import { motion, useReducedMotion } from "framer-motion"
import { specialties } from "../../data/specialties"

export function AudienceSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1350px] py-16 md:py-24 lg:py-28 lg:px-6 px-4">
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 24 }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <h2 className="text-4xl font-bold leading-tight text-onco-primary sm:text-5xl lg:text-6xl">
            ¿A quién está dirigido?
          </h2>

          <p className="mt-6 max-w-[1280px] text-lg leading-[1.4] text-onco-text sm:text-xl lg:text-2xl">
            A profesionales de distintas disciplinas médicas vinculados al
            abordaje integral del cáncer de pulmón y a quienes buscan
            mantenerse actualizados sobre los avances en diagnóstico y
            tratamiento.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 xl:grid-cols-7 lg:gap-x-8">
          {specialties.map((specialty, index) => (
            <motion.article
              key={specialty.name}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 18 }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: "easeOut",
              }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={specialty.icon}
                alt=""
                aria-hidden="true"
                className="h-auto w-[125px] object-contain sm:w-[135px] lg:w-[150px]"
                loading="lazy"
              />

              <h3 className="mt-4 text-lg font-normal leading-[1.15] text-onco-text sm:text-xl lg:text-2xl">
                {specialty.name}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}