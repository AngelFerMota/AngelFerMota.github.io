import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
export const config: ApplicationConfig = {providers:[provideZonelessChangeDetection(), provideClientHydration(withEventReplay()), provideRouter([])]};
