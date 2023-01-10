import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mostrarErrorNombre = false;
  mostrarErrorEmail = false;
  mostrarMensajeAcceso = "Holaaa";
  public formLogin!: FormGroup;

  constructor (private formBuilder:FormBuilder){
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      nombre:['',
      [
        Validators.required,
        Validators.email
      ]
    ],
      email:['',
      [
        Validators.required,
        Validators.minLength(8)
      ]],
      mensaje:['', [
        Validators.required,
        Validators.maxLength(500)
      ]
    ],
    })
  }
  enviar(): any {
    console.log(this.formLogin.value)
  }
}
