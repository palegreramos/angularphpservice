import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerComponent } from './ver/ver.component';
import { InsertarComponent } from './insertar/insertar.component';


const routes: Routes = [
  { path: 'ver', component: VerComponent },
  { path: 'insertar', component: InsertarComponent },
  { path: "", pathMatch: 'prefix', redirectTo: 'ver' },
  { path: '**', redirectTo: 'ver'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
