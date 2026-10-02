export interface Project {
  id: string;
  name: string;
  repo: string;
  category: string;
  filters: readonly string[];
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  flow: string[];
  contribution: string;
  decision: string;
  evidence: { label: string; path: string }[];
}
export const projects: readonly Project[] = [
  {
    id: "reddit",
    name: "Reddit-Brief",
    repo: "Reddit-Brief",
    category: "01 / FULL STACK",
    filters: ["Web", "Backend"],
    description: "De un flujo de publicaciones a un resumen relevante.",
    problem:
      "Seguir conversaciones en Reddit implica filtrar una gran cantidad de publicaciones.",
    solution:
      "Ingesta, puntuación de relevancia y generación de resúmenes con un backend modular y una interfaz React.",
    tech: ["NestJS", "React", "TypeScript", "Prisma"],
    flow: ["Publicaciones", "Relevancia", "Resumen"],
    contribution:
      "Integración de una interfaz React con una API NestJS que organiza intereses, publicaciones y resúmenes persistidos con Prisma.",
    decision:
      "El generador depende de una interfaz de proveedor de resúmenes. La implementación se puede sustituir sin mezclarla con la selección y persistencia de publicaciones.",
    evidence: [
      {
        label: "Servicio de resúmenes",
        path: "apps/api/src/digests/digests.service.ts",
      },
      {
        label: "Pruebas del servicio",
        path: "apps/api/src/digests/digests.service.spec.ts",
      },
      { label: "Modelo de datos", path: "apps/api/prisma/schema.prisma" },
    ],
  },
  {
    id: "todo",
    name: "ToDoTareas",
    repo: "ToDoTareas-Angular-.NET",
    category: "02 / WEB APPLICATION",
    filters: ["Web", "Backend"],
    description: "Un ciclo completo entre interfaz, API y persistencia.",
    problem:
      "Organizar tareas requiere mantener sus cambios y estados de forma consistente.",
    solution:
      "Interfaz Angular conectada a una API REST .NET para crear, editar y organizar tareas, con Entity Framework y un proveedor MySQL.",
    tech: ["Angular", "C#", ".NET", "Entity Framework", "MySQL"],
    flow: ["Angular", ".NET API", "MySQL"],
    contribution:
      "Conexión entre la gestión de tareas en Angular, los contratos de la API y un servicio de datos con estados y fechas de seguimiento.",
    decision:
      "Los endpoints delegan la lógica en un servicio y devuelven respuestas HTTP tipadas. Las consultas de lectura utilizan AsNoTracking para evitar seguimiento innecesario.",
    evidence: [
      {
        label: "Endpoints y contratos HTTP",
        path: "TareasApi/Endpoints/TareasEndpoints.cs",
      },
      {
        label: "Servicio de datos",
        path: "TareasApi/Services/TareasService.cs",
      },
    ],
  },
  {
    id: "cestaria",
    name: "Cestaria",
    repo: "TuCompra.Kcal",
    category: "03 / MOBILE APPLICATION",
    filters: ["Móvil"],
    description: "La lista de la compra, con contexto nutricional.",
    problem:
      "Precio e información nutricional suelen estar separados al planificar una compra.",
    solution:
      "Aplicación Flutter que integra búsqueda y escaneo de productos, datos nutricionales, historial local y exportación PDF/CSV.",
    tech: ["Flutter", "Dart", "Riverpod", "SQLite"],
    flow: ["Productos", "Nutrición", "Lista local"],
    contribution:
      "Un recorrido de compra que reúne búsqueda y escaneo, información nutricional, gestión del carrito e historial con exportación PDF y CSV.",
    decision:
      "SQLite conserva la lista y el historial en el dispositivo; la búsqueda externa se separa de la consulta de datos ya guardados. Riverpod organiza el estado de la aplicación.",
    evidence: [{ label: "Funcionalidades y arquitectura", path: "README.md" }],
  },
  {
    id: "weather",
    name: "Weather App",
    repo: "flutter_weather_app",
    category: "04 / FLUTTER & APIs",
    filters: ["Móvil"],
    description: "El tiempo de tu ciudad, en una interfaz multiplataforma.",
    problem:
      "Consultar el clima requiere integrar datos externos y gestionar ubicación, preferencias y errores de red.",
    solution:
      "Aplicación Flutter con OpenWeatherMap, búsqueda de ciudades, geolocalización, pronóstico y preferencias de idioma y tema.",
    tech: ["Flutter", "Riverpod", "Dio", "OpenWeatherMap"],
    flow: ["Ubicación", "API meteorológica", "Pronóstico"],
    contribution:
      "Integración de consultas por ciudad o coordenadas, estado reactivo y preferencias persistidas para una experiencia en español e inglés.",
    decision:
      "Los contratos de repositorio separan clima, ubicación y ajustes. La implementación transforma las respuestas de la API y Riverpod coordina consultas y actualización periódica.",
    evidence: [
      {
        label: "Contratos de repositorio",
        path: "lib/features/weather/domain/repositories.dart",
      },
      {
        label: "Integración y mapeo de datos",
        path: "lib/features/weather/application/weather_repository_impl.dart",
      },
      {
        label: "Estado y actualización",
        path: "lib/features/weather/application/providers.dart",
      },
    ],
  },
];
export const capabilities = [
  {
    name: "Interfaces + APIs",
    description: "Angular y .NET conectados mediante contratos HTTP.",
    project: "ToDoTareas",
    target: "todo",
  },
  {
    name: "Servicios + datos",
    description: "NestJS, Prisma y pruebas del generador de resúmenes.",
    project: "Reddit-Brief",
    target: "reddit",
  },
  {
    name: "Producto + móvil",
    description: "Flutter, integración de APIs e historial en SQLite.",
    project: "Cestaria",
    target: "cestaria",
  },
];
export const stack = [
  {
    name: "Backend & APIs",
    items: [
      "Python / FastAPI",
      "C# / .NET / ASP.NET",
      "NestJS",
      "Entity Framework",
      "SQLAlchemy / Pydantic",
    ],
  },
  {
    name: "Frontend & móvil",
    items: [
      "React / TypeScript",
      "Angular",
      "Flutter / Dart",
      "Riverpod",
      "Vite / TanStack Query",
      "Tailwind CSS",
    ],
  },
  {
    name: "Datos",
    items: [
      "MySQL / MariaDB",
      "SQL Server",
      "SQLite / Prisma",
      "Alembic",
      "Cosmos DB / Redis",
    ],
  },
  {
    name: "DevOps & herramientas",
    items: ["Azure / Azure DevOps", "Docker", "Git / GitHub Actions", "Scrum"],
  },
];
