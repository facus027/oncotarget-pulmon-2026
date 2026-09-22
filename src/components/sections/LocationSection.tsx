import { motion, useReducedMotion } from "framer-motion"

export function LocationSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="ubicacion" className="bg-onco-surface">
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
          mx-auto
          grid
          max-w-[1350px]
          items-center
          gap-10
          px-6
          py-16
          sm:px-8
          md:py-20
          lg:grid-cols-[1.05fr_1fr]
          lg:gap-12
          lg:px-6
          lg:py-24
        "
      >
        <div className="overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.330856926352!2d-68.8355567235698!3d-32.889419569001845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0922c3cf87df%3A0x1b4681810dc2d7ad!2sMod%20Hotels%20Mendoza!5e0!3m2!1ses-419!2sar!4v1789845951471!5m2!1ses-419!2sar"
            title="Ubicación de Mod Hotels Mendoza"
            className="h-[320px] w-full border-0 sm:h-[380px] lg:h-[450px]"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div>
          <h2
            className="
              text-3xl
              font-bold
              leading-[1.05]
              text-onco-primary
              sm:text-5xl
              xl:text-6xl
            "
          >
            Nos encontramos
            <br />
            en Mendoza
          </h2>

          <p
            className="
              mt-8
              text-xl
              leading-[1.3]
              text-onco-text
              sm:text-2xl
              lg:text-2xl
            "
          >
            Hotel Mod José Federico Moreno 1230
            <br />
            Ciudad de Mendoza
          </p>

          <a
            href="https://maps.app.goo.gl/ATYdDfDUJNibVZQM9"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-10
              inline-flex
              min-w-[270px]
              items-center
              justify-center
              rounded-full
              bg-onco-accent
              px-12
              py-2
              text-xl
              font-bold
              text-white
              transition-transform
              duration-200
              hover:scale-[1.02]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-onco-primary
              focus-visible:ring-offset-2
              sm:text-2xl
              lg:text-3xl
            "
          >
            Ver ubicación
          </a>
        </div>
      </motion.div>
    </section>
  )
}