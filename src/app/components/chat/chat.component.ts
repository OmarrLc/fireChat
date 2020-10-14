import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})

export class ChatComponent implements OnInit {
  mensaje: string ='';
  elemento: any;
  constructor( public chatServices: ChatService ) { 
    this.chatServices.cargarMensajes()
      .subscribe( ()=>{
        setTimeout( ()=>{
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 30);
        
      });
  }

  ngOnInit(){
    this.elemento=document.getElementById('app-mensajes');
  }

 
  enviarMensaje(){
    // console.log(this.mensaje);

    if(this.mensaje.length ===0){
      return;
    }

    this.chatServices.agregarMensaje(this.mensaje)
      .then(()=>this.mensaje='')
      .catch ( (err)=>console.log('Error al enviar', err))
    
  } 
}
