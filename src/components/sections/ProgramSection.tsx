import { useState } from "react"
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion"

import { program } from "../../data/program"

type ProgramRow = (typeof program)[number]

interface ProgramGroup {
  block: Extract<ProgramRow, { type: "block" }>
  rows: ProgramRow[]
  index: number
}

type ProgramItem =
  | {
      type: "group"
      group: ProgramGroup
    }
  | {
      type: "activity"
      row: Extract<ProgramRow, { type: "activity" }>
      index: number
    }

function createProgramItems(): ProgramItem[] {
  const items: ProgramItem[] = []

  let currentGroup: ProgramGroup | null = null

  program.forEach((row, index) => {
    if (row.type === "block") {
      currentGroup = {
        block: row,
        rows: [],
        index,
      }

      items.push({
        type: "group",
        group: currentGroup,
      })

      return
    }

    if (row.type === "activity") {
      currentGroup = null

      items.push({
        type: "activity",
        row,
        index,
      })

      return
    }

    if (currentGroup) {
      currentGroup.rows.push(row)
    }
  })

  return items
}

const programItems = createProgramItems()

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

          <div className="mt-5 space-y-7">
            {programItems.map((item) => {
              if (item.type === "activity") {
                return (
                  <div
                    key={`${item.row.time}-${item.index}`}
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
                    <span>{item.row.time}</span>

                    <strong>{item.row.title}</strong>
                  </div>
                )
              }

              const { group } = item
              const isOpen = openBlocks.has(group.index)

              return (
                <div key={`${group.block.title}-${group.index}`}>
                  <button
                    type="button"
                    onClick={() => toggleBlock(group.index)}
                    aria-expanded={isOpen}
                    aria-controls={`program-block-${group.index}`}
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
                          {group.block.title}
                        </p>

                        <p className="mt-1 text-sm lg:text-2xl">
                          {group.block.moderators}
                        </p>
                      </div>

                      <motion.span
                        aria-hidden="true"
                        animate={{
                          rotate: isOpen ? 180 : 0,
                        }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.25,
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

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`program-block-${group.index}`}
                        initial={
                          shouldReduceMotion
                            ? false
                            : {
                                height: 0,
                                opacity: 0,
                              }
                        }
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={
                          shouldReduceMotion
                            ? undefined
                            : {
                                height: 0,
                                opacity: 0,
                              }
                        }
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.3,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 pt-2">
                          {group.rows.map((row, rowIndex) => {
                            if (
                              row.type === "block" ||
                              row.type === "activity"
                            ) {
                              return null
                            }

                            return (
                              <div
                                key={`${row.time}-${rowIndex}`}
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
                              </div>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

        {/* MOBILE */}
        <div className="space-y-4 md:hidden">
          {programItems.map((item) => {
            if (item.type === "activity") {
              return (
                <div
                  key={`${item.row.time}-${item.index}`}
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
                    {item.row.time}
                  </span>

                  <strong>
                    {item.row.title}
                  </strong>
                </div>
              )
            }

            const { group } = item
            const isOpen = openBlocks.has(group.index)

            return (
              <div key={`${group.block.title}-${group.index}`}>
                <button
                  type="button"
                  onClick={() => toggleBlock(group.index)}
                  aria-expanded={isOpen}
                  aria-controls={`program-mobile-block-${group.index}`}
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
                        {group.block.title}
                      </p>

                      <p className="mt-2 text-sm leading-snug">
                        {group.block.moderators}
                      </p>
                    </div>

                    <motion.span
                      aria-hidden="true"
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.25,
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

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`program-mobile-block-${group.index}`}
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              height: 0,
                              opacity: 0,
                            }
                      }
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={
                        shouldReduceMotion
                          ? undefined
                          : {
                              height: 0,
                              opacity: 0,
                            }
                      }
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.3,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 pt-3">
                        {group.rows.map((row, rowIndex) => {
                          if (
                            row.type === "block" ||
                            row.type === "activity"
                          ) {
                            return null
                          }

                          return (
                            <article
                              key={`${row.time}-${rowIndex}`}
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
                            </article>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}