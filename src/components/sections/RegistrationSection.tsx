import { useState } from "react"
import type { SubmitEvent } from "react"
import { motion, useReducedMotion } from "framer-motion"

type SubmitStatus = "idle" | "loading" | "success" | "error"

interface RegistrationData {
  fullName: string
  dni: string
  specialty: string
  institution: string
  province: string
  city: string
  email: string
  phone: string
  observations: string
  website: string
}

export function RegistrationSection() {
  const shouldReduceMotion = useReducedMotion()

  const [status, setStatus] = useState<SubmitStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const inputClasses =
    "w-full rounded-full border-0 bg-white px-5 py-3 text-base text-onco-text outline-none placeholder:text-onco-text/80 focus:ring-2 focus:ring-onco-dark"

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (status === "loading") return

    const form = event.currentTarget
    const formData = new FormData(form)

    const data: RegistrationData = {
    fullName: String(formData.get("fullName") ?? "").trim(),
    dni: String(formData.get("dni") ?? "").trim(),
    specialty: String(formData.get("specialty") ?? "").trim(),
    institution: String(formData.get("institution") ?? "").trim(),
    province: String(formData.get("province") ?? "").trim(),
    city: String(formData.get("city") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    observations: String(formData.get("observations") ?? "").trim(),
    website: String(formData.get("website") ?? "").trim(),
  }


    const scriptUrl = import.meta.env.VITE_REGISTRATION_SCRIPT_URL

    if (!scriptUrl) {
      console.error("VITE_REGISTRATION_SCRIPT_URL no está configurada.")
      setErrorMessage(
        "No pudimos procesar tu preinscripción. Intentá nuevamente."
      )
      setStatus("error")
      return
    }

    try {
      setStatus("loading")
      setErrorMessage("")

      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const result = await response.json()

      if (!result.success) {
        throw new Error(
          result.message || "No se pudo registrar la preinscripción."
        )
      }

      setStatus("success")
      form.reset()
    } catch (error) {
      console.error("Error enviando preinscripción:", error)

      setErrorMessage(
        "No pudimos registrar tu preinscripción. Por favor, intentá nuevamente."
      )

      setStatus("error")
    }
  }

  return (
    <section id="preinscripcion" className="bg-white py-10 md:py-20">
      <motion.div
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
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="
          mx-auto
          max-w-[1350px]
          bg-onco-accent
          px-6
          py-10
          sm:px-10
          md:px-14
          lg:px-20
          lg:py-14
        "
      >
        <div className="mx-auto max-w-[1050px]">
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
            Preinscripción
          </h2>

          <p className="mt-5 text-xl leading-tight text-white sm:text-2xl lg:text-4xl">
            Sé parte de ONCO-TARGET PULMÓN 2026
          </p>

          <p className="mt-1 text-xl font-medium italic text-white sm:text-2xl lg:text-4xl">
            Cupos limitados.
          </p>

          <p className="mt-6 text-base text-white sm:text-lg lg:text-2xl">
            Completá tus datos para solicitar tu preinscripción al encuentro.
          </p>
        </div>

        {status === "success" ? (
          <div
            className="
              mx-auto
              mt-8
              max-w-[1050px]
              rounded-3xl
              bg-white
              px-6
              py-8
              text-center
              text-onco-dark
              sm:px-10
            "
            role="status"
          >
            <h3 className="text-2xl font-bold sm:text-3xl">
              ¡Recibimos tu preinscripción!
            </h3>

            <p className="mt-3 text-base sm:text-lg">
              Te enviamos un correo electrónico con la información necesaria
              para continuar con tu inscripción.
            </p>
          </div>
        ) : (
          <form
            className="mx-auto mt-8 max-w-[1050px] space-y-4"
            onSubmit={handleSubmit}
          >
            {/* Honeypot antispam */}
            <div
              className="absolute -left-[9999px]"
              aria-hidden="true"
            >
              <label htmlFor="website">Sitio web</label>
              <input
                id="website"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <input
              type="text"
              name="fullName"
              placeholder="Nombre y apellido"
              autoComplete="name"
              maxLength={120}
              required
              className={inputClasses}
            />

            <input
              type="text"
              name="dni"
              placeholder="DNI"
              inputMode="numeric"
              maxLength={15}
              required
              className={inputClasses}
            />

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="specialty"
                placeholder="Especialidad"
                maxLength={100}
                required
                className={inputClasses}
              />

              <input
                type="text"
                name="institution"
                placeholder="Institución"
                maxLength={150}
                required
                className={inputClasses}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="province"
                placeholder="Provincia"
                autoComplete="address-level1"
                maxLength={100}
                required
                className={inputClasses}
              />

              <input
                type="text"
                name="city"
                placeholder="Ciudad"
                autoComplete="address-level2"
                maxLength={100}
                required
                className={inputClasses}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                autoComplete="email"
                maxLength={150}
                required
                className={inputClasses}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                autoComplete="tel"
                maxLength={30}
                required
                className={inputClasses}
              />
            </div>

            <input
              type="text"
              name="observations"
              placeholder="Observaciones"
              maxLength={500}
              className={inputClasses}
            />

            {status === "error" && (
              <p
                className="rounded-2xl bg-white/15 px-5 py-3 text-center text-sm font-medium text-white sm:text-base"
                role="alert"
              >
                {errorMessage}
              </p>
            )}

            <div className="pt-5 text-center">
              <button
                type="submit"
                disabled={status === "loading"}
                className="
                  rounded-full
                  bg-onco-dark
                  px-8
                  py-4
                  text-lg
                  font-bold
                  text-white
                  transition
                  duration-200
                  hover:scale-[1.02]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-white
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-onco-accent
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  disabled:hover:scale-100
                  sm:px-12
                  sm:text-xl
                  lg:min-w-[500px]
                  lg:text-2xl
                "
              >
                {status === "loading"
                  ? "ENVIANDO..."
                  : "QUIERO PREINSCRIBIRME"}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  )
}