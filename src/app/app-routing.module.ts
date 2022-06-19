import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltasComponent } from './bdd/altas/altas.component';
import { EditarComponent } from './bdd/editar/editar.component';
import { ListaComponent } from './bdd/lista/lista.component';
import { LoginComponent } from './login/login/login.component';
import { RegistrarComponent } from './login/registrar/registrar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'alta', component: AltasComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
