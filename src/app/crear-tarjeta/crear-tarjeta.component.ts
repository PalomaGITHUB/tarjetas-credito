import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TarjetaComponent } from '../services/tarjeta/tarjeta.component';
import { Tarjeta } from '../Models/tarjeta';

@Component({
  selector: 'app-crear-tarjeta',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-tarjeta.component.html',
  styleUrl: './crear-tarjeta.component.css'
})
export class CrearTarjetaComponent {
  form: FormGroup;

  constructor(private _fb:FormBuilder, private _ts:TarjetaComponent){
    this.form = this._fb.group({
      titular: ["", [Validators.required, Validators.email]],
      numeroTarjeta: ["", this.validateLenght(16)],
      cvv: ["", this.validateLenght(3)],
      fechaCaducidad: ["", [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]]
    })
  }

  agregarTarjeta(){
    //console.log(this.form.value)
    const formValues = this.form.value;
    const tarjeta: Tarjeta = new Tarjeta(
      formValues.titular,
      formValues.numeroTarjeta,
      formValues.fechaCaducidad,
      formValues.cvv
    )
    
    this._ts.crearTarjeta(tarjeta).subscribe((response) => {
      alert(response.msg);
    })
  }

  validateLenght(limit: number){
    return [Validators.required, Validators.minLength(limit), Validators.maxLength(limit)]
  }

}
