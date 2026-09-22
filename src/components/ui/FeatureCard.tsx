import { motion, useReducedMotion } from "framer-motion"
import type { WhyOncoTargetItem } from "../../data/whyOncoTarget"

interface FeatureCardProps {
  item: WhyOncoTargetItem
  index: number
}

export function FeatureCard({ item, index }: FeatureCardProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
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
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="
        relative
        flex
        min-h-[250px]
        flex-col
        justify-end
        overflow-hidden
        bg-onco-light
        px-6
        py-7
        sm:min-h-[270px]
        sm:px-8
        sm:py-8
        lg:py-16
        lg:px-10
        lg:min-h-[400px]
      "
    >
      <img
        src={item.icon}
        alt=""
        aria-hidden="true"
        className="
          absolute
          right-5
          top-5
          h-auto
          w-[90px]
          object-contain
          sm:right-7
          sm:top-6
          sm:w-[105px]
          lg:w-[195px]
        "
        loading="lazy"
      />

      <div className="relative z-10 max-w-[90%]">
        <h3 className="text-2xl font-bold leading-tight text-white sm:text-[1.7rem] xl:text-5xl">
          {item.title}
        </h3>

        <p className="mt-4 max-w-[520px] text-base leading-[1] text-white sm:text-[1.05rem] xl:text-2xl">
          {item.description}
        </p>
      </div>
    </motion.article>
  )
}