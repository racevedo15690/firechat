import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent {

  mensaje: string = '';

  constructor( public _CS: ChatService) {
    this._CS.cargarMensajes()
        .subscribe();
  }

  enviar_mensaje() {
    console.log(this.mensaje);
  }
 
}
