import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddempleadoComponent } from './components/add-modalidad/add-empleado.component';

const routes: Routes = [
  { path:"addEmpleado", component: AddempleadoComponent  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
