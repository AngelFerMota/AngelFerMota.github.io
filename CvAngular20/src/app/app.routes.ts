import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./sections/home/home').then(m => m.Home) },
  { path: 'contact', loadComponent: () => import('./sections/contact/contact').then(m => m.Contact) },
  { path: 'work-experience', loadComponent: () => import('./sections/work-experience/work-experience').then(m => m.WorkExperience) },
  { path: 'technical-skills', loadComponent: () => import('./sections/technical-skills/technical-skills').then(m => m.TechnicalSkills) },
  { path: 'soft-skills', loadComponent: () => import('./sections/soft-skills/soft-skills').then(m => m.SoftSkills) },
  { path: 'education', loadComponent: () => import('./sections/education/education').then(m => m.Education) },
  { path: 'languages', loadComponent: () => import('./sections/languages/languages').then(m => m.Languages) },
  { path: 'personal-strengths', loadComponent: () => import('./sections/personal-strengths/personal-strengths').then(m => m.PersonalStrengths) },
  { path: 'courses', loadComponent: () => import('./sections/courses/courses').then(m => m.Courses) },
  { path: 'downloads', loadComponent: () => import('./sections/downloads/downloads').then(m => m.Downloads) },
  { path: '**', redirectTo: '' }
];
