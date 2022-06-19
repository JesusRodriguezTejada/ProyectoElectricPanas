import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { AltasComponent } from './bdd/altas/altas.component';
import { ListaComponent } from './bdd/lista/lista.component';
import { LoginComponent } from './login/login/login.component';
import { RegistrarComponent } from './login/registrar/registrar.component';
import { EditarComponent } from './bdd/editar/editar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HomeComponent } from './home/home.component';
import { LectorComponent } from './lector/lector.component';
import { GeneradorCodigosComponent } from './generador-codigos/generador-codigos.component';
import { LoadingComponent } from './loading/loading.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { EnviosComponent } from './envios/envios.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AltasComponent,
    ListaComponent,
    LoginComponent,
    RegistrarComponent,
    EditarComponent,
    HomeComponent,
    LectorComponent,
    GeneradorCodigosComponent,
    LoadingComponent,
    AyudaComponent,
    EnviosComponent,
    
    
  ],
  imports: [
    BrowserModule,AppRoutingModule,ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFirestoreModule,
    QRCodeModule,
  
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
