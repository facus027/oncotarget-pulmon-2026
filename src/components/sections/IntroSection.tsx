import { motion, useReducedMotion } from "framer-motion"

export function IntroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="w-full bg-[#f3f3f3]">
      <div
        className="
          w-full
          lg:ml-[8.3vw]
          xl:ml-[14.3vw]
          lg:w-[calc(100%-14.3vw)]
          xl:mt-16
          lg:mt-10
          mt-1
        "
      >
        <div className="flex w-full flex-col lg:flex-row">
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
            className="
              flex
              w-full
              min-w-0
              items-center
              px-4
              py-10

              sm:px-8

              lg:w-[54%]
              lg:px-0
              lg:py-[8px]
              lg:pr-[clamp(20px,4vw,30px)]
            "
          >
            <div className="w-full min-w-0">
              <h2
                className="
                  max-w-[1360px]
                  text-[30px]
                  font-bold
                  leading-[1.05]
                  text-onco-primary

                  sm:text-[38px]
                  lg:text-[40px]
                  xl:text-[56px]
                  lg:leading-[1.02]
                "
              >
                Una jornada para actualizar,{" "}
                <br className="hidden lg:block" />
                compartir y transformar
              </h2>

              <div
                className="
                  mt-6
                  max-w-[1060px]
                  space-y-5
                  text-[15px]
                  leading-[1.5]
                  text-onco-text

                  sm:text-[17px]
                  text-justify
                  lg:mt-7
                  lg:space-y-7
                  lg:text-xl
                  xl:text-2xl
                  lg:leading-[1.28]
                "
              >
                <p>
                  ONCO-TARGET PULMÓN 2026 llega a su segunda edición como un
                  espacio científico pensado para reunir a especialistas de la
                  Región de Cuyo en torno a los principales avances en el
                  diagnóstico y tratamiento del cáncer de pulmón.
                </p>

                <p>
                  Una jornada donde la ciencia, la práctica clínica y la
                  industria se encuentran para generar intercambio,
                  actualización y nuevas perspectivas en beneficio de los
                  pacientes y del desarrollo de la oncología en nuestra región.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, scale: 0.985 }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, scale: 1 }
            }
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="
              w-full
              min-w-0
              overflow-hidden
              min-h-[280px]

              sm:min-h-[380px]

              lg:w-[46%]
              lg:min-h-[445px]
            "
          >
            <img
              src="/assets/actualizacion-oncotarget.webp"
              alt="Profesional de salud analizando una imagen de tórax"
              className="
                block
                h-full
                w-full
                object-cover
                object-center
              "
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}