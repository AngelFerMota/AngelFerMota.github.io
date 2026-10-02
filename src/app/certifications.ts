// Public LinkedIn profile inspected on 2026-10-02. Suggested courses excluded.
const credential = (id: string) =>
  `https://www.linkedin.com/learning/certificates/${id}`;
export const certifications = [
  {
    name: "Domina Python: FastAPI",
    issuer: "LinkedIn Learning",
    date: "Jul 2024",
    url: credential(
      "fd00797512a23ed42041a75897dd609d67c299272efd87ceb713f3b579b8ca39",
    ),
  },
  {
    name: "Python esencial",
    issuer: "LinkedIn Learning",
    date: "Jul 2024",
    url: credential(
      "1132136c2861d836bc8a4b77fdd5350e5cf16427eae17a6c7e9b97548c2dfb22",
    ),
  },
  {
    name: "GitHub para programadores",
    issuer: "LinkedIn Learning",
    date: "Jun 2024",
    url: credential(
      "3e4ef456410dffc0617c7f7dd58f0ebf5af7f4f166a30b3db966281550fb40b2",
    ),
  },
  {
    name: "Scrum esencial",
    issuer: "LinkedIn Learning",
    date: "Jun 2024",
    url: credential(
      "8b3799ee7dc3b9019543f78e71304c7b210b925d69d279f103901556791771b4",
    ),
  },
  {
    name: "Curso Online de Big Data",
    issuer: "CCC Centro de Estudios Profesionales",
    date: "Jun 2024",
    url: "",
  },
  {
    name: "Aprende análisis de datos",
    issuer: "LinkedIn Learning",
    date: "Jun 2024",
    url: credential(
      "af1afd2f506fbac6ee4d4e068c82a119f8a0328aa5f5e704ae1013d37390f2cc",
    ),
  },
  {
    name: "Aprende data science: Conceptos básicos",
    issuer: "LinkedIn Learning",
    date: "Jun 2024",
    url: credential(
      "3451cd9e5b354c862e18c7e0288dfe9c483875bdca83a71a913815e0c4ae3a16",
    ),
  },
  {
    name: "Conviértete en data scientist",
    issuer: "LinkedIn Learning",
    date: "Jun 2024",
    url: credential(
      "07a5a770ba8a622f6052013ede5c323b2c0ce2dab2069616c2560f9fb181aa66",
    ),
  },
  {
    name: "Data scientist: Minería de datos esencial",
    issuer: "LinkedIn Learning",
    date: "Jun 2024",
    url: credential(
      "a3f0cb46405e80d716062798840c38231d3bef716c705432d88f95b9dbb7db81",
    ),
  },
  {
    name: "Cómo administrar por objetivos",
    issuer: "LinkedIn Learning",
    date: "Jun 2024",
    url: credential(
      "b7798fd44171fb1c91105ee1554a76e4ee5b71836b3e67b02c9bc77755935b90",
    ),
  },
  {
    name: "Acondicionamiento de modelos en sistemas de inteligencia artificial (IA)",
    issuer: "Instituto Europeo",
    date: "Certificado de asistencia",
    url: "",
  },
] as const;
