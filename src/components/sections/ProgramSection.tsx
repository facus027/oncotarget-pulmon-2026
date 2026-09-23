import { useState } from "react"
import {
  motion,
  useReducedMotion,
} from "framer-motion"

import { program } from "../../data/program"

const preparedProgram = (() => {
  let currentBlockIndex: number | null = null

  return program.map((row, index) => {
    if (row.type === "block") {
      currentBlockIndex = index
    }

    return {
      row,
      index,
      blockIndex: currentBlockIndex,
    }
  })
})()

export function ProgramSection() {
  const shouldReduceMotion = useReducedMotion()

  const [openBlocks, setOpenBlocks] = useState<Set<number>>(
    () => new Set()
  )

  const toggleBlock = (index: number) => {
    setOpenBlocks((current) => {
      const next = new Set(current)

      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }

      return next
    })
  }

  return (
    <section id="programa" className="bg-white">
      <div className="mx-auto max-w-[1350px] px-1 py-10 md:py-16">
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
          className="
            mb-8
            text-4xl
            font-bold
            text-onco-primary
            sm:text-5xl
            lg:text-6xl
          "
        >
          Programa
        </motion.h2>

        {/* DESKTOP */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[200px_280px_1fr] gap-3">
            <div className="bg-onco-light px-4 py-2 text-3xl font-bold text-white">
              Horario
            </div>

            <div className="bg-onco-light px-4 py-2 text-3xl font-bold text-white">
              Bloque
            </div>

            <div className="bg-onco-light px-4 py-2 text-3xl font-bold text-white">
              Charla
            </div>
          </div>

          <div className="mt-5 space-y-5">
            {preparedProgram.map(
              ({ row, index, blockIndex }) => {
                /*
                 * BLOQUE
                 */
                if (row.type === "block") {
                  const isOpen = openBlocks.has(index)

                  return (
                    <button
                      key={`${row.title}-${index}`}
                      type="button"
                      onClick={() => toggleBlock(index)}
                      aria-expanded={isOpen}
                      className="
                        w-full
                        bg-onco-accent
                        px-4
                        py-3
                        text-left
                        text-2xl
                        text-white
                        transition
                        duration-200
                        hover:brightness-95
                        focus-visible:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-onco-dark
                      "
                    >
                      <div className="flex items-center justify-between gap-6">
                        <div>
                          <p className="font-bold">
                            {row.title}
                          </p>

                          <p className="mt-1 text-sm lg:text-2xl">
                            {row.moderators}
                          </p>
                        </div>

                        <motion.span
                          aria-hidden="true"
                          animate={{
                            rotate: isOpen ? 180 : 0,
                          }}
                          transition={{
                            duration: shouldReduceMotion
                              ? 0
                              : 0.25,
                          }}
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            text-2xl
                          "
                        >
                          ▼
                        </motion.span>
                      </div>
                    </button>
                  )
                }

                /*
                 * ACTIVIDAD
                 *
                 * Inscripciones, Break, Almuerzo y Cena
                 * siempre quedan visibles.
                 */
                if (row.type === "activity") {
                  return (
                    <div
                      key={`${row.time}-${index}`}
                      className="
                        grid
                        grid-cols-[200px_1fr]
                        bg-onco-gray
                        px-4
                        py-3
                        text-2xl
                        text-white
                        
                      "
                    >
                      <span>
                        {row.time}
                      </span>

                      <strong>
                        {row.title}
                      </strong>
                    </div>
                  )
                }

                /*
                 * CHARLA
                 *
                 * Solo aparece si el último bloque
                 * anterior está abierto.
                 */
                if (
                  blockIndex === null ||
                  !openBlocks.has(blockIndex)
                ) {
                  return null
                }

                return (
                  <motion.div
                    key={`${row.time}-${index}`}
                    initial={
                      shouldReduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: -8,
                          }
                    }
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: shouldReduceMotion
                        ? 0
                        : 0.22,
                    }}
                    className="
                      grid
                      grid-cols-[200px_290px_1fr]
                      bg-onco-surface
                      px-4
                      py-4
                      text-2xl
                      text-onco-text
                    "
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
                  </motion.div>
                )
              }
            )}
          </div>
        </div>

        {/* MOBILE */}
        <div className="space-y-6 md:hidden">
          {preparedProgram.map(
            ({ row, index, blockIndex }) => {
              /*
               * BLOQUE
               */
              if (row.type === "block") {
                const isOpen = openBlocks.has(index)

                return (
                  <button
                    key={`${row.title}-${index}`}
                    type="button"
                    onClick={() => toggleBlock(index)}
                    aria-expanded={isOpen}
                    className="
                      w-full
                      rounded-sm
                      bg-onco-accent
                      px-5
                      py-4
                      text-left
                      text-white
                      transition
                      duration-200
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-onco-dark
                    "
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-bold">
                          {row.title}
                        </p>

                        <p className="mt-2 text-sm leading-snug">
                          {row.moderators}
                        </p>
                      </div>

                      <motion.span
                        aria-hidden="true"
                        animate={{
                          rotate: isOpen ? 180 : 0,
                        }}
                        transition={{
                          duration: shouldReduceMotion
                            ? 0
                            : 0.25,
                        }}
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          text-xl
                        "
                      >
                        ▼
                      </motion.span>
                    </div>
                  </button>
                )
              }

              /*
               * ACTIVIDAD
               */
              if (row.type === "activity") {
                return (
                  <div
                    key={`${row.time}-${index}`}
                    className="
                      flex
                      items-center
                      justify-between
                      gap-4
                      bg-onco-gray
                      px-5
                      py-4
                      text-white
                    "
                  >
                    <span className="font-medium">
                      {row.time}
                    </span>

                    <strong className="text-right">
                      {row.title}
                    </strong>
                  </div>
                )
              }

              /*
               * CHARLA
               */
              if (
                blockIndex === null ||
                !openBlocks.has(blockIndex)
              ) {
                return null
              }

              return (
                <motion.article
                  key={`${row.time}-${index}`}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: -8,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: shouldReduceMotion
                      ? 0
                      : 0.22,
                  }}
                  className="
                    border
                    border-black/5
                    bg-onco-surface
                    p-5
                  "
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
                </motion.article>
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}