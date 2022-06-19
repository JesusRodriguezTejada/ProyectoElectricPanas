import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltasComponent } from './bdd/altas/altas.component';
import { EditarComponent } from './bdd/editar/editar.component';
import { ListaComponent } from './bdd/lista/lista.component';
import { LoginComponent } from './login/login/login.component';
import { RegistrarComponent } from './login/registrar/registrar.component';
import { HomeComponent } from './home/home.component';
import { LectorComponent } from './lector/lector.component';
import { GeneradorCodigosComponent } from './generador-codigos/generador-codigos.component';
import {AyudaComponent}from './ayuda/ayuda.component';
import { EnviosComponent } from './envios/envios.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'alta', component: AltasComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lector', component: LectorComponent },
  { path: 'generador', component: GeneradorCodigosComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'envios', component: EnviosComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
