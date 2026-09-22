import { motion, useReducedMotion } from "framer-motion"
import { program } from "../../data/program"

export function ProgramSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="programa" className="bg-white">
      <div className="mx-auto max-w-[1350px] py-10 md:py-16 px-1">
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
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-8 text-4xl font-bold text-onco-primary sm:text-5xl lg:text-6xl"
        >
          Programa
        </motion.h2>

        {/* DESKTOP */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[200px_280px_1fr] gap-3">
            <div className="bg-onco-light px-4 py-2 font-bold text-white text-3xl">
              Horario
            </div>

            <div className="bg-onco-light px-4 py-2 font-bold text-white text-3xl">
              Bloque
            </div>

            <div className="bg-onco-light px-4 py-2 font-bold text-white text-3xl">
              Charla
            </div>
          </div>

          <div className="mt-5 space-y-2">
            {program.map((row, index) => {
              if (row.type === "block") {
                return (
                  <div
                    key={`${row.title}-${index}`}
                    className="bg-onco-accent px-4 py-3 text-white text-2xl"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-bold">
                          {row.title}
                        </p>

                        <p className="mt-1 text-sm lg:text-2xl">
                          {row.moderators}
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        className="text-xl"
                      >
                        ▼
                      </span>
                    </div>
                  </div>
                )
              }

              if (row.type === "activity") {
                return (
                  <div
                    key={`${row.time}-${index}`}
                    className="grid grid-cols-[200px_1fr] bg-onco-gray px-4 py-3 text-white text-2xl"
                  >
                    <span>{row.time}</span>

                    <strong>{row.title}</strong>
                  </div>
                )
              }

              return (
                <div
                  key={`${row.time}-${index}`}
                  className="grid grid-cols-[200px_290px_1fr] bg-onco-surface px-4 py-4 text-onco-text text-2xl"
                >
                  <div className="pr-4">
                    {row.time}
                  </div>

                  <div className="pr-6">
                    {row.area}
                  </div>

                  <div>
                    {row.content}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* MOBILE */}
        <div className="space-y-4 md:hidden">
          {program.map((row, index) => {
            if (row.type === "block") {
              return (
                <div
                  key={`${row.title}-${index}`}
                  className="rounded-sm bg-onco-accent px-5 py-4 text-white"
                >
                  <p className="font-bold">
                    {row.title}
                  </p>

                  <p className="mt-2 text-sm leading-snug">
                    {row.moderators}
                  </p>
                </div>
              )
            }

            if (row.type === "activity") {
              return (
                <div
                  key={`${row.time}-${index}`}
                  className="flex items-center justify-between gap-4 bg-onco-gray px-5 py-4 text-white"
                >
                  <span className="font-medium">
                    {row.time}
                  </span>

                  <strong>{row.title}</strong>
                </div>
              )
            }

            return (
              <article
                key={`${row.time}-${index}`}
                className="border border-black/5 bg-onco-surface p-5"
              >
                <p className="font-bold text-onco-primary">
                  {row.time}
                </p>

                <p className="mt-2 font-medium text-onco-text">
                  {row.area}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-onco-text">
                  {row.content}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}