import {Component, Input} from '@angular/core';
import {Message} from "../modeles/Message";
import {Personne} from "../modeles/Personne";

@Component({
  selector: 'app-block-message',
  templateUrl: './block-message.component.html',
  styleUrls: ['./block-message.component.css']
})
export class BlockMessageComponent {

@Input() public message!:Message;

}
