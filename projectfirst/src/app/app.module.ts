import { CursosModule } from './cursos/cursos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meuprimeiro/meu-primeiro.component';
import { PrimeiroComponent2Component } from './primeiro-component2/primeiro-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    PrimeiroComponent2Component
  ],
  imports: [
    BrowserModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
