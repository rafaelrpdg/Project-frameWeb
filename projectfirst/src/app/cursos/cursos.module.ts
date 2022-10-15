import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosDetaalheComponent } from './cursos-detaalhe/cursos-detaalhe.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursosDetaalheComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ 
    CursosComponent
  ]
})
export class CursosModule { }
