import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill, Experience, DownloadLink } from './models';
import { map } from 'rxjs/operators';

@Injectable({ providedIn:'root' })
export class DataService {
  private http = inject(HttpClient);
  skills$ = this.http.get<Skill[]>('assets/data/skills.json')
    .pipe(map(arr => [...arr].sort((a,b)=>b.level-a.level)));
  experience$ = this.http.get<Experience[]>('assets/data/experience.json');
  downloads$ = this.http.get<DownloadLink[]>('assets/data/downloads.json');
}
