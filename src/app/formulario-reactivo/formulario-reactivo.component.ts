import { Component } from '@angular/core';
import { FormControl , FormGroup, Validators, FormBuilder} from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.css'
})
export class FormularioReactivoComponent {
  //se inyecta la dependeincia de formBuilder para trabajar con formularios grandes
  constructor(private fb: FormBuilder){

  }
  //getter para acceder a la propiedad enail del formulario form user
  get name(){
    //se retorna el valor de la propiedad NAME del fomrualrio formUser, para no colocar el ? al acceder al valor en el HTML
    return this.formUser.get('name') as FormControl
  }
  //getter para acceder a la propiedad enail del formulario form user
  get email(){
    //se retorna el valor de la propiedad email del fomrualrio formUser, para no colocar el ? al acceder al valor en el HTML
    return this.formUser.get('email') as FormControl
  }

  // name = new FormControl('', Validators.required);
  // email = new FormControl('',[Validators.required, Validators.email]);
  // formUser = new FormGroup({
  //   'name': new FormControl('', Validators.required),
  // 'email': new FormControl('',[Validators.required, Validators.email])
  // });

  //ae crea el grupo de los campos y sus validaciones
  formUser = this.fb.group({
    'name' : ['', Validators.required],
    'email' : ['', [Validators.required, Validators.email]]

  });

  procesar(){
    console.log(this.formUser.value)
  }



}
