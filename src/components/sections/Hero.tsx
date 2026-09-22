import { motion, useReducedMotion } from "framer-motion"
import { images } from "../../data/images"

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="encuentro"
      aria-label="ONCO-TARGET PULMÓN 2026"
      className="relative overflow-hidden bg-onco-dark xl:mt-24 mt-20"
    >
      <div className="relative mx-auto w-full">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet={images.hero.mobile}
          />

          <source
            media="(max-width: 1280px)"
            srcSet={images.hero.desktop}
          />

          <img
            src={images.hero.desktop}
            alt="ONCO-TARGET PULMÓN 2026, Segunda Edición del Encuentro Interdisciplinario de Oncología Clínica"
            className="block h-auto w-full"
            fetchPriority="high"
          />
        </picture>

        <motion.a
          href="#preinscripcion"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 10,
                }
          }
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          transition={{
            duration: 0.65,
            delay: 0.35,
            ease: "easeOut",
          }}
          whileHover={
            shouldReduceMotion
              ? undefined
              : {
                  scale: 1.025,
                }
          }
          whileTap={
            shouldReduceMotion
              ? undefined
              : {
                  scale: 0.98,
                }
          }
       className="
  absolute
  left-[38%]
  top-[73.5%]
  z-20
  -translate-x-1/2
  -translate-y-1/2
  whitespace-nowrap
  rounded-full
  bg-onco-accent
  px-[2.1vw]
  py-[0.8vw]
  text-[1.5vw]
  font-bold
  text-white
  shadow-sm
  transition-shadow
  hover:shadow-md
  cursor-pointer
  md:left-[65%]
  md:top-[73%]
  
  max-sm:left-[25%]
  max-sm:top-[72%]
  max-sm:px-3
  max-sm:py-1.5
  max-sm:text-[11px]
"
        >
          PREINSCRIBITE AHORA
        </motion.a>
      </div>
    </section>
  )
}