import { motion, useReducedMotion } from "framer-motion"
import { speakers } from "../../data/speakers"

export function SponsorsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="patrocinadores"
      className="bg-onco-surface"
    >
      <div className="mx-auto max-w-[1350px] py-10 md:py-24 lg:py-28 lg:px-0 px-4">
        <motion.h2
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          className="text-center text-4xl font-bold leading-tight text-onco-primary sm:text-5xl lg:text-6xl"
        >
          Patrocinadores que nos acompañan
        </motion.h2>

        <div className="mt-8 grid gap-7 lg:gap-10 md:grid-cols-3 lg:mt-20">
          {speakers.map((speaker, index) => (
            <motion.article
              key={speaker.name}
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 22 }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="h-[165px] w-[165px] object-contain sm:h-[180px] sm:w-[180px] lg:h-[290px] lg:w-[290px]"
                loading="lazy"
              />

              <h3 className="mt-5 text-xl font-medium text-onco-text lg:text-3xl">
                {speaker.name}
              </h3>

              <div className="mt-1 text-lg leading-[1.15] text-onco-text lg:text-2xl">
                {speaker.institution.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className=" mt-14 lg:mt-20 grid items-center gap-10 md:grid-cols-3">
          <p className="text-center text-xl font-bold leading-tight text-black lg:text-2xl">
            COMITÉ DE DOCENCIA
            <br />
            E INVESTIGACIÓN
          </p>

          <div className="flex justify-center">
            <img
              src="/assets/logos/fundacion-oncologica-mendoza.png"
              alt="Fundación Oncológica Mendoza"
              className="w-[220px] object-contain lg:w-[340px]"
              loading="lazy"
            />
          </div>

          <p className="text-center text-xl font-bold leading-tight text-black lg:text-2xl">
            COORDINACIÓN
            <br />
            CIENTÍFICA
          </p>
        </div>

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0 }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : { opacity: 1 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="lg:mt-24 mt-10 flex justify-center"
        >
          <img
            src="/assets/sponsors/patrocinadores.png"
            alt="Patrocinadores de ONCO-TARGET PULMÓN 2026"
            className="w-full max-w-[1350px] object-contain"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}