import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-dinbind',
  templateUrl: './data-dinbind.component.html',
  styleUrls: ['./data-dinbind.component.css']
})
export class DataDinbindComponent implements OnInit {

  url: any = "https://www.youtube.com/playlist?list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G"; 
  nomeC : string = "Meu nome Completo é RAfael Rdorgieus pereria da graça";
  imagem = 'https://picsum.photos/200/300';
  constructor() { 


  }

  ngOnInit(): void {
  }

}
