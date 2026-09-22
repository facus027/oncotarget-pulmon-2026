import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const navigation = [
  { label: "El encuentro", href: "#encuentro" },
  { label: "Ejes", href: "#ejes" },
  { label: "Patrocinadores", href: "#patrocinadores" },
  { label: "Programa", href: "#programa" },
  { label: "Ubicación", href: "#ubicacion" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  const handleMobileNavigation = (
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string
) => {
  event.preventDefault()

  setIsOpen(false)

  setTimeout(() => {
    const target = document.querySelector(href)

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, 220)
}

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-50
        w-full
        bg-onco-surface
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[88px]
          max-w-[1440px]
          items-center
          justify-between
          gap-4
          px-5
          py-3

          lg:gap-3
          lg:px-6

          xl:gap-6
          xl:px-10
        "
      >
        <a
          href="#encuentro"
          aria-label="Ir al inicio de ONCO-TARGET PULMÓN 2026"
          className="shrink-0"
          onClick={closeMenu}
        >
          <img
            src="/assets/logos/logo-oncotarget.png"
            alt="ONCO-TARGET PULMÓN 2026"
            className="
              h-auto
              w-[145px]

              lg:w-[150px]

              xl:w-[195px]
            "
          />
        </a>

        <nav
          aria-label="Navegación principal"
          className="
            hidden
            items-center
            whitespace-nowrap

            lg:flex
            lg:gap-0

            xl:gap-0.5
          "
        >
          {navigation.map((item, index) => (
            <div
              key={item.href}
              className="flex items-center"
            >
              <a
                href={item.href}
                className="
                  px-1
                  py-2
                  text-[14px]
                  font-medium
                  text-onco-dark
                  transition-colors

                  hover:text-onco-accent

                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-onco-accent

                  xl:px-1.5
                  xl:text-[18px]

                  2xl:text-[23px]
                "
              >
                {item.label}
              </a>

              {index < navigation.length - 1 && (
                <span
                  aria-hidden="true"
                  className="
                    text-[14px]
                    text-onco-dark

                    xl:text-[17px]

                    2xl:text-[20px]
                  "
                >
                  |
                </span>
              )}
            </div>
          ))}
        </nav>

        <a
          href="#preinscripcion"
          className="
            hidden
            shrink-0
            whitespace-nowrap
            rounded-full
            bg-onco-accent
            px-4
            py-2
            text-center
            text-[14px]
            font-bold
            text-white
            transition-transform
            duration-200

            hover:scale-[1.02]

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-onco-accent
            focus-visible:ring-offset-2

            lg:block

            xl:px-7
            xl:text-[18px]

            2xl:min-w-[245px]
            2xl:px-12
            2xl:py-1.5
            2xl:text-[26px]
          "
        >
          PREINSCRIBITE
        </a>

        <button
          type="button"
          aria-label={
            isOpen
              ? "Cerrar menú de navegación"
              : "Abrir menú de navegación"
          }
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-md
            text-onco-dark

            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-onco-accent

            lg:hidden
          "
        >
          <span className="sr-only">Menú</span>

          <div className="flex w-6 flex-col gap-1.5">
            <span
              className={`
                h-0.5
                w-full
                bg-current
                transition-transform

                ${isOpen ? "translate-y-2 rotate-45" : ""}
              `}
            />

            <span
              className={`
                h-0.5
                w-full
                bg-current
                transition-opacity

                ${isOpen ? "opacity-0" : ""}
              `}
            />

            <span
              className={`
                h-0.5
                w-full
                bg-current
                transition-transform

                ${isOpen ? "-translate-y-2 -rotate-45" : ""}
              `}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              max-h-[calc(100vh-88px)]
              overflow-y-auto
              border-t
              border-black/5
              bg-onco-surface

              lg:hidden
            "
          >
            <nav
              aria-label="Navegación móvil"
              className="
                flex
                flex-col
                px-6
                py-5
              "
            >
           {navigation.map((item) => (
  <a
    key={item.href}
    href={item.href}
    onClick={(event) =>
      handleMobileNavigation(event, item.href)
    }
    className="
      border-b
      border-black/5
      py-3
      font-medium
      text-onco-dark
      transition-colors
      hover:text-onco-accent
    "
  >
    {item.label}
  </a>
))}

              <a
  href="#preinscripcion"
  onClick={(event) =>
    handleMobileNavigation(event, "#preinscripcion")
  }
  className="
    mt-5
    rounded-full
    bg-onco-accent
    px-6
    py-3
    text-center
    font-bold
    text-white
  "
>
  PREINSCRIBITE
</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}