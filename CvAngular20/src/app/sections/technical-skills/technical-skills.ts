import { Component } from '@angular/core';

@Component({
  selector: 'app-technical-skills',
  standalone: true,
  imports: [],
  templateUrl: './technical-skills.html',
  styleUrls: ['./technical-skills.css'],
})
export class TechnicalSkills{
  skills = [
    // Lenguajes de programación
    { name: 'C#', level: 75 },
    { name: '.NET Framework/Core', level: 70 },
    { name: 'TypeScript', level: 60 },
    { name: 'JavaScript', level: 55 },
    { name: 'Java', level: 50 },
    { name: 'Python', level: 35 },
    { name: 'Flutter/Dart', level: 40 },
    
    // Desarrollo Frontend
    { name: 'Angular', level: 55 },
    { name: 'HTML5', level: 70 },
    { name: 'CSS3/SCSS', level: 65 },
    { name: 'Bootstrap', level: 60 },
    { name: 'Responsive Design', level: 60 },
    
    // Bases de datos
    { name: 'SQL Server', level: 65 },
    { name: 'MySQL', level: 50 },
    { name: 'CosmosDB', level: 55 },
    { name: 'Entity Framework', level: 65 },
    
    // Frameworks y librerías
    { name: 'ASP.NET Core', level: 70 },
    { name: 'Web APIs REST', level: 65 },
    { name: 'Django', level: 40 },
    { name: 'Node.js', level: 35 },
    
    // Herramientas y DevOps
    { name: 'Git', level: 70 },
    { name: 'GitHub', level: 65 },
    { name: 'Azure DevOps', level: 45 },
    { name: 'Visual Studio', level: 75 },
    { name: 'VS Code', level: 70 },
    
    // Cloud y servicios
    { name: 'Microsoft Azure', level: 40 },
    { name: 'AWS', level: 30 },
    { name: 'Docker', level: 35 },
    
    // Testing y calidad
    { name: 'Unit Testing', level: 50 },
    { name: 'Postman', level: 60 },
    { name: 'Swagger', level: 55 },
    
    // Metodologías
    { name: 'Scrum/Agile', level: 55 },
    { name: 'Clean Architecture', level: 45 },
    { name: 'SOLID Principles', level: 50 },
  ];
  
}