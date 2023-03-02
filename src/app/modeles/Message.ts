import {Personne} from "./Personne";

export class Message{
  private _auteur: Personne;
  private _date : Date;
  private _message: string;


  constructor(auteur: Personne, message: string, date?: Date) {
    this._auteur = auteur;
    this._message = message;
    this._date = new Date();
  }


  get auteur(): Personne {
    return this._auteur;
  }

  set auteur(value: Personne) {
    this._auteur = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }
}
