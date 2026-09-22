export type ProgramRow =
  | {
      type: "activity"
      time: string
      title: string
    }
  | {
      type: "block"
      title: string
      moderators: string
    }
  | {
      type: "talk"
      time: string
      area: string
      content: string
    }

export const program: ProgramRow[] = [
  {
    type: "activity",
    time: "08:00 – 08:30",
    title: "Inscripciones",
  },

  {
    type: "block",
    title: "BLOQUE 1 · DIAGNÓSTICO",
    moderators:
      "MODERADORES: Dr. Juan Carmona – Dr. Emiliano Zani – Dr. Cristian Fazio",
  },

  {
    type: "talk",
    time: "08:40 – 09:00",
    area: "Imágenes",
    content:
      "Cribaje Cáncer de Pulmón - Utilidad de PET en estadificación. Dr. Facundo Fernández (Fuesmen)",
  },
  {
    type: "talk",
    time: "09:10 – 09:30",
    area: "Neumonología",
    content:
      "EPOC y cáncer de pulmón - métodos diagnóstico EBUS CRIOBIOPSIA – Dr. A. Chirino",
  },

  {
    type: "activity",
    time: "09:45 – 10:30",
    title: "Break",
  },

  {
    type: "block",
    title: "BLOQUE 2 · ABORDAJE QUIRÚRGICO Y RESPIRATORIO",
    moderators:
      "MODERADORES: Dr. Juan Carmona – Dr. Jorge Abdala – Dr. Leonardo Barbato",
  },

  {
    type: "talk",
    time: "10:30 – 10:50",
    area: "Cirugía Torácica",
    content:
      "Estadificación prequirúrgica (N2). Dr. Mario Bustos – Hospital Privado Córdoba",
  },
  {
    type: "talk",
    time: "10:50 – 11:10",
    area: "Cirugía Torácica",
    content:
      "Cirugía Robótica: mito o realidad. Dr. Matías Nicolas – HPC Mar del Plata",
  },
  {
    type: "talk",
    time: "11:10 – 11:30",
    area: "Cirugía Torácica",
    content:
      "Cirugía Robótica y Cáncer de pulmón: Experiencia. Dr. Mario Bustos – Hospital Privado Córdoba",
  },
  {
    type: "talk",
    time: "11:30 – 11:50",
    area: "Cirugía Torácica",
    content:
      "Segmentectomía anatómica robótica en Cáncer de Pulmón. Dr. Matías Nicolas – HPC Mar del Plata",
  },
  {
    type: "talk",
    time: "11:50 – 12:10",
    area: "Discusión caso clínico",
    content:
      "Panelistas: Dr. Lucía Gonzales – Dr. Leonardo Barbato – Dr. Mario Bustos – Dr. Gustavo Perone – Dr. Matías Nicolas",
  },

  {
    type: "activity",
    time: "12:10 – 14:10",
    title: "Almuerzo",
  },

  {
    type: "block",
    title: "BLOQUE 3 · TRATAMIENTO ONCOLÓGICO",
    moderators:
      "MODERADORES: Dra. Mirian Rogel – Dr. Emiliano Zani – Dr. Jonathan Cuadrado",
  },

  {
    type: "talk",
    time: "14:10 – 14:30",
    area: "Oncología Clínica",
    content:
      "Quimioterapia perioperatoria - Actualidad y Futuro. Dr. Omar Carranza (HPC Mar del Plata)",
  },
  {
    type: "talk",
    time: "14:30 – 14:50",
    area: "Oncología Clínica",
    content:
      "Adyuvancia en cáncer de pulmón: ¿a quién, cuándo y con qué? Dra. Mara Bonet – Hosp. Roffo UBA",
  },
  {
    type: "talk",
    time: "14:50 – 15:10",
    area: "Oncología Clínica",
    content:
      "SIMPOSIO ROCHE. Más allá del Platino: Redefiniendo el estándar en primera línea para el paciente frágil con NSCLC. Dr. Aldo Perfetti",
  },
  {
    type: "talk",
    time: "15:10 – 15:40",
    area: "Oncología Clínica",
    content:
      "SIMPOSIO PFIZER – Actualidad estudio CROWN. Cáncer de pulmón ALK+: definición de la mejor estrategia terapéutica. Dr. Jorge Hidalgo",
  },

  {
    type: "activity",
    time: "16:00 – 16:30",
    title: "Break",
  },

  {
    type: "talk",
    time: "16:40 – 17:00",
    area: "Oncología Clínica",
    content:
      "Resumen cáncer de pulmón avanzado – ASCO / ESMO 2026 – Dr. Jorge Hidalgo",
  },
  {
    type: "talk",
    time: "17:15",
    area: "Cierre",
    content:
      "Síntesis y conclusiones. Dr. Emiliano Zani",
  },

  {
    type: "activity",
    time: "21:00",
    title: "Cena de clausura — Networking y cierre institucional",
  },
]