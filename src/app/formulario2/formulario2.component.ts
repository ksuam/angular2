import { Component } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { Message } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';



const PRIME =[
  InputIconModule,
  IconFieldModule,
  InputTextModule,
  InputGroupModule,
  InputGroupAddonModule,
  ButtonModule,
  MessagesModule
]
@Component({
  selector: 'app-formulario2',
  standalone: true,
  imports: [PRIME, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario2.component.html',
  styleUrl: './formulario2.component.css'
})
export class Formulario2Component {
  messages: Message[] | undefined;

  persona = {
    nombre: '',
    edad:''
  };

  procesar(){
    console.log(this.persona)
  }
  ngOnInitt(){
    this.messages = [
      { severity: 'info', detail: 'Info Message' },
      { severity: 'success', detail: 'Success Message' },
      { severity: 'warn', detail: 'Warning Message' },
      { severity: 'error', detail: 'Error Message' },
      { severity: 'secondary', detail: 'Secondary Message' },
      { severity: 'contrast', detail: 'Contrast Message' }
  ];
  }


}
