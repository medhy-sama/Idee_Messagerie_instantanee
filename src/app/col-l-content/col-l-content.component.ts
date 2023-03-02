import { Component } from '@angular/core';
import { Personne } from "../modeles/Personne";
import {Service1Service} from "../services/service1.service";

@Component({
  selector: 'app-col-l-content',
  templateUrl: './col-l-content.component.html',
  styleUrls: ['./col-l-content.component.css']
})
export class ColLContentComponent {
  public personnes: Personne[];

  constructor(
    private Service1: Service1Service
  ) {
this.personnes = Service1.personnes
  }
}
