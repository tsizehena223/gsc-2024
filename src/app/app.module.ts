import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

// Firebase
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environement } from 'src/environements/environement';
import { UniversityService } from './services/university.service';
import { UniversityComponent } from './feat/components/university/university.component';
import { AccueilComponent } from './feat/components/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversityComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(environement.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [UniversityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
