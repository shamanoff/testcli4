import { Component, OnInit } from '@angular/core';
import {PropComponent} from "../prop.component";

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css'],
  directives: [PropComponent]
})
 export class DatabindComponent implements OnInit {

  stringinter:string = "this string";
  stringBind:string = "this stringBind";


  constructor() { }

  ngOnInit() {
  }

}
