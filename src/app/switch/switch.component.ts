import { Component } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';

const PRIME ={
  FloatLabelModule
}

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [FloatLabelModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
  dia:String = '';
}
