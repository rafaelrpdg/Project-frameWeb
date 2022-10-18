import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-dinbind',
  templateUrl: './data-dinbind.component.html',
  styleUrls: ['./data-dinbind.component.css']
})
export class DataDinbindComponent implements OnInit {

  url: any = 'http://www.google.com'; 
  constructor() { }

  ngOnInit(): void {
  }

}
