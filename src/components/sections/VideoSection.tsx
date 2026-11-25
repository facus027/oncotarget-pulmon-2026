import { motion, useReducedMotion } from "framer-motion"

interface VideoSectionProps {
  src: string
  poster?: string
}

export function VideoSection({
  src,
  poster,
}: VideoSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="resumen-2026" className="bg-white py-12 md:py-20">
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
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="
          mx-auto
          grid
          max-w-[1350px]
          items-center
          gap-8
          px-4
          sm:px-6
          md:grid-cols-[0.85fr_1.4fr]
          md:gap-12
          lg:px-8
        "
      >
        <div>
          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.18em]
              text-onco-accent
              sm:text-base
            "
          >
            ONCO-TARGET PULMÓN 2026
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              leading-tight
              text-onco-primary
              sm:text-4xl
              lg:text-5xl
            "
          >
            Reviví esta edición
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-relaxed
              text-onco-text
              sm:text-lg
            "
          >
            Un encuentro interdisciplinario que reunió profesionales,
            especialistas y referentes para compartir conocimiento,
            experiencias y nuevas perspectivas en cáncer de pulmón.
          </p>

          <div
            className="
              mt-6
              h-1
              w-20
              bg-onco-accent
            "
          />
        </div>

        <div
          className="
            overflow-hidden
            bg-black
            shadow-lg
          "
        >
          <video
            controls
            playsInline
            preload="metadata"
            poster={poster}
            className="
              block
              aspect-video
              h-auto
              w-full
              object-cover
            "
          >
            <source
              src={src}
              type="video/mp4"
            />

            Tu navegador no puede reproducir este video.
          </video>
        </div>
      </motion.div>
    </section>
  )
}