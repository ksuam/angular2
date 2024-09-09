import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async" //esta linea se agrego para que funcionase el dropdown
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync()]
};
