import { Injectable } from '@angular/core';
import {
  WorkExperience,
  TechnicalSkill,
  SoftSkill,
  Education,
  Language,
  PersonalStrength,
  Course,
  Project
} from './models';

@Injectable({ providedIn: 'root' })
export class DataService {
  // Métodos para obtener datos de cada sección
  getWorkExperience(): WorkExperience[] {
    return [];
  }
  getTechnicalSkills(): TechnicalSkill[] {
    return [];
  }
  getSoftSkills(): SoftSkill[] {
    return [];
  }
  getEducation(): Education[] {
    return [];
  }
  getLanguages(): Language[] {
    return [];
  }
  getPersonalStrengths(): PersonalStrength[] {
    return [];
  }
  getCourses(): Course[] {
    return [];
  }
  getProjects(): Project[] {
    return [];
  }
}
