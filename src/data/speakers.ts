export interface Speaker {
  name: string
  institution: string[]
  image: string
}

export const speakers: Speaker[] = [
  {
    name: "Dr. Emiliano Zani",
    institution: ["Fundación Oncológica Mendoza"],
    image: "/assets/speakers/emiliano-zani.png",
  },
  {
    name: "Dr. Jorge Abdala",
    institution: [
      "Fundación Oncológica Mendoza",
      "Universidad Nacional de Cuyo",
    ],
    image: "/assets/speakers/jorge-abdala.png",
  },
  {
    name: "Dr. Juan Manuel Carmona",
    institution: [
      "Fundación Oncológica Mendoza",
      "Universidad de Mendoza",
    ],
    image: "/assets/speakers/juan-manuel-carmona.png",
  },
]