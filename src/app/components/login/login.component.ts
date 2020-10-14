import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor( public _chatService:ChatService) { }

  
  ingresar(tipo:string){
    console.log(tipo);

    this._chatService.login(tipo)
  }
} 
