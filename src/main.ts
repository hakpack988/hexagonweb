/// <reference types="@angular/localize" />
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { ContactusComponent } from './app/information/contactus/contactus.component';
import { provideRouter } from '@angular/router';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, NgbModule),
        ScreenTrackingService, UserTrackingService
    ]
})
  .catch(err => console.error(err));
