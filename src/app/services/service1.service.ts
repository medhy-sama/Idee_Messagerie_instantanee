import { Injectable } from '@angular/core';
import {Message} from "../modeles/Message";
import {Personne} from "../modeles/Personne";

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  private _personnes: Personne[];
  private _mess: Message[];
  constructor() {     this._mess = [];
    let mess1 = new Message( new Personne("Boulon", "Medhy"), "Je m'appelle Medhy");
    let mess2 = new Message( new Personne("Po", "lee"), "Je m'appelle lee");
    this._mess.push(mess1);
    this._mess.push(mess2);

    this._personnes = [];
    let bob = new Personne("Morane", "Bob");
    let lucie = new Personne("fer", "lucie");
    this._personnes.push(bob);
    this._personnes.push(lucie);
  }

  get mess(): Message[] {
    return this._mess;
  }

  set mess(value: Message[]) {
    this._mess = value;
  }

  get personnes(): Personne[] {
    return this._personnes;
  }

  set personnes(value: Personne[]) {
    this._personnes = value;
  }
}
