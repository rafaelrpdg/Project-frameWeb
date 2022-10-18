import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  nomes: string[];

  constructor(private cursosService: CursosService) {
     this.nomePortal = "http://www.google.com";

     this.nomes =  this.cursosService.getCursos();

   }

  ngOnInit(): void {
  }

}
