
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
      <div className="xl:py-8 py-4 bg-onco-light text-center ">
        <h1 className="text-white text-xs leading-5 xl:text-4xl">Organiza: Comité de Docencia e Investigación · Fundación Oncológica Mendoza</h1>
      </div>
    </section>
  )
}