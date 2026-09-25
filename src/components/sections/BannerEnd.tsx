
import { images } from "../../data/images"

export function BannerEnd() {
  

  return (
   <section
  id="encuentro"
  aria-label="ONCO-TARGET PULMÓN 2026"
  className="relative overflow-hidden bg-onco-dark"
>
  <div className="relative mx-auto w-full">
    <picture>
      <source
        media="(max-width: 640px)"
        srcSet={images.ends.mobile}
      />

      <img
        src={images.ends.desktop}
        alt="ONCO-TARGET PULMÓN 2026, Segunda Edición del Encuentro Interdisciplinario de Oncología Clínica"
        className="block h-auto w-full"
        fetchPriority="high"
      />
    </picture>
  </div>

  <div
    className="
      relative
      bg-onco-light
      px-4
      py-5
      text-center

      sm:px-6
      sm:py-6

      xl:px-10
      xl:py-8
    "
  >
    <h1
      className="
        pr-16
        text-xs
        leading-5
        text-white

        sm:pr-20
        sm:text-sm

        lg:pr-24
        lg:text-lg

        xl:text-4xl
      "
    >
      Organiza: Comité de Docencia e Investigación · Fundación Oncológica Mendoza
    </h1>

    <a
      href="https://linktr.ee/viralmk?fbclid=PAZXh0bgNhZW0CMTEAAaaDt0GRMewRaznFlWYwXoXmAf8DphiWiZ3Cdi0Kn-YCgwNpNZ7Lz0743UM_aem_Vzxh6uCC7RpCbm0sA08zgA"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Viral Marketing"
      className="
        absolute
        bottom-2
        right-3

        sm:bottom-3
        sm:right-4

        lg:bottom-4
        lg:right-6
      "
    >
      <img
        src="/assets/Marca viral-03.png"
        alt="Logo Viral Marketing"
        className="
          h-5
          w-auto
          opacity-80
          transition-opacity
          duration-300

          hover:opacity-100

          sm:h-6
          lg:h-8
        "
      />
    </a>
  </div>
</section>
  )
}