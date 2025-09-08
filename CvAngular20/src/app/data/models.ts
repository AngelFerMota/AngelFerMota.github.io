// Modelos de datos para el CV

export interface WorkExperience {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface TechnicalSkill {
  name: string;
  level: string;
}

export interface SoftSkill {
  name: string;
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface PersonalStrength {
  name: string;
}

export interface Course {
  name: string;
  institution: string;
  year: string;
}

export interface Project {
  name: string;
  description: string;
  link?: string;
}
