import { Component, Input , EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-children',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent {
  @Input() title?:String;

 @Output() TitleCheck = new EventEmitter<String>();
  emitTitleCheck(){
   this.TitleCheck.emit(this.title);
  }
}
