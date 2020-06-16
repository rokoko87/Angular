import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component'
import { InventarioComponent } from '../app/inventario/inventario.component'
import { EntregasComponent } from '../app/entregas/entregas.component'
import { ContactoComponent } from '../app/contacto/contacto.component'
import { EntrarEmpresaComponent } from '../app/entrar-empresa/entrar-empresa.component'
import { CrearEmpresaComponent } from '../app/crear-empresa/crear-empresa.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'entregas', component: EntregasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'entrar', component: EntrarEmpresaComponent },
  { path: 'crear', component: CrearEmpresaComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
