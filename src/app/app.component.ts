import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { SwitchComponent } from "./switch/switch.component";
import { Formulario2Component } from "./formulario2/formulario2.component";
import { FormularioReactivoComponent } from "./formulario-reactivo/formulario-reactivo.component";
import { ChildrenComponent } from "./children/children.component";
import { AddMessagesComponent } from "./add-messages/add-messages.component";
import { ListMessagesComponent } from "./list-messages/list-messages.component";import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,MenuModule, DropdownModule, BadgeModule,SwitchComponent,RippleModule, AvatarModule,Formulario2Component, FormularioReactivoComponent, ChildrenComponent, AddMessagesComponent, ListMessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'Curso Angular';
  // cities: City[] | undefined;
  items: MenuItem[] | undefined;
  // constructor(private router: Router) {}

    // selectedCity: City | undefined;

    ngOnInit() {

        //menu

        }
}

