import { motion, useReducedMotion } from "framer-motion"

export function InterdisciplinarySection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="w-full bg-onco-dark">
      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                y: 24,
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
          duration: 0.6,
          ease: "easeOut",
        }}
        className="
          w-full
          px-4
          py-14

          sm:px-8
          md:py-16

          lg:ml-[14.3vw]
          lg:w-[calc(100%-14.3vw)]
          lg:max-w-[1350px]
          lg:px-0
          lg:py-28
        "
      >
        <div className="w-full min-w-0">
          <h2
            className="
              text-[30px]
              font-bold
              leading-[1.05]
              text-onco-light

              sm:text-4xl

              lg:text-6xl
            "
          >
            Una mirada interdisciplinaria
          </h2>

          <p
            className="
              mt-4
              text-[20px]
              font-medium
              italic
              leading-[1.15]
              text-onco-light

              sm:text-2xl

              lg:text-4xl
              lg:leading-[1.1]
            "
          >
            El abordaje del cáncer de pulmón requiere la participación{" "}
            <br className="hidden md:block" />
            de distintas disciplinas médicas.
          </p>

          <p
            className="
              mt-7
              max-w-[1100px]
              text-[15px]
              leading-[1.45]
              text-white

              sm:text-[17px]

              lg:text-2xl
              lg:leading-[1.4]
            "
          >
            ONCO-TARGET PULMÓN 2026 reúne a profesionales de diferentes
            especialidades para generar un espacio de diálogo y construcción
            colectiva.
          </p>

          <div
            className="
              mt-10
              flex
              flex-col
              gap-1
              text-[22px]
              font-medium
              leading-tight
              tracking-[0.04em]
              text-white

              sm:text-3xl

              md:flex-row
              md:flex-wrap
              md:items-center
              md:gap-x-2
              md:gap-y-1

              lg:mt-12
              lg:text-5xl
            "
          >
            <span>30 ESPECIALISTAS</span>

            <span className="hidden md:inline" aria-hidden="true">
              ·
            </span>

            <span>REGIÓN DE CUYO</span>

            <span className="hidden md:inline" aria-hidden="true">
              ·
            </span>

            <span>1 JORNADA</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}