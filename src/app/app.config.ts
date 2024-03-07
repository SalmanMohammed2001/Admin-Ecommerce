import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgApexchartsModule } from "ng-apexcharts";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {httManagerInterceptor} from "./components/interceptors/htt-manager.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(
    withInterceptors(
      [httManagerInterceptor]
    )
  ), provideClientHydration(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()]
};
