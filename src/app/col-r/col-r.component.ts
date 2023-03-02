import { Component } from '@angular/core';
import {Personne} from "../modeles/Personne";
import {Message} from "../modeles/Message";
import {Service1Service} from "../services/service1.service";

@Component({
  selector: 'app-col-r',
  templateUrl: './col-r.component.html',
  styleUrls: ['./col-r.component.css']
})
export class ColRComponent {
public message:Message[];

  constructor(
    private Service1: Service1Service
  ) {
this.message= this.Service1.mess;
  }
}
