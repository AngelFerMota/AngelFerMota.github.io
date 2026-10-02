export interface Project {
  name: string;
  repo: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  flow: string[];
}
export const projects: readonly Project[] = [
  {
    name: "Reddit-Brief",
    repo: "Reddit-Brief",
    category: "01 / FULL STACK",
    description: "De un flujo de publicaciones a un resumen relevante.",
    problem:
      "Seguir conversaciones en Reddit implica filtrar una gran cantidad de publicaciones.",
    solution:
      "Ingesta, puntuación de relevancia y generación de resúmenes con un backend modular y una interfaz React.",
    tech: ["NestJS", "React", "TypeScript", "Prisma"],
    flow: ["Publicaciones", "Relevancia", "Resumen"],
  },
  {
    name: "ToDoTareas",
    repo: "ToDoTareas-Angular-.NET",
    category: "02 / WEB APPLICATION",
    description: "Un ciclo completo entre interfaz, API y persistencia.",
    problem:
      "Organizar tareas requiere mantener sus cambios y estados de forma consistente.",
    solution:
      "Interfaz Angular conectada a una API REST .NET para crear, editar y organizar tareas con persistencia local.",
    tech: ["Angular", "C#", ".NET", "Entity Framework"],
    flow: ["Angular", "API REST", "Persistencia"],
  },
  {
    name: "Cestaria",
    repo: "TuCompra.Kcal",
    category: "03 / MOBILE APPLICATION",
    description: "La lista de la compra, con contexto nutricional.",
    problem:
      "Precio e información nutricional suelen estar separados al planificar una compra.",
    solution:
      "Aplicación Flutter que integra búsqueda y escaneo de productos, datos nutricionales, historial local y exportación PDF/CSV.",
    tech: ["Flutter", "Dart", "Riverpod", "SQLite"],
    flow: ["Productos", "Nutrición", "Lista local"],
  },
];
export const stack = [
  { name: "Backend", items: ["Python", "FastAPI", "C#", ".NET", "NestJS"] },
  { name: "Frontend", items: ["TypeScript", "Angular", "React", "Flutter"] },
  {
    name: "Data",
    items: ["SQL Server", "MySQL", "Cosmos DB", "Redis", "SQLite"],
  },
  {
    name: "Cloud & tooling",
    items: ["Azure", "Docker", "Git", "GitHub Actions"],
  },
];
