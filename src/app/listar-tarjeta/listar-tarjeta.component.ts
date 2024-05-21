import { Component } from '@angular/core';
import { Tarjeta } from '../Models/tarjeta';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TarjetaComponent } from '../services/tarjeta/tarjeta.component';

@Component({
  selector: 'app-listar-tarjeta',
  standalone: true,
  imports: [],
  templateUrl: './listar-tarjeta.component.html',
  styleUrl: './listar-tarjeta.component.css'
})
export class ListarTarjetaComponent {

  public tarjetas: any[] = [];

  constructor(private _ts:TarjetaComponent){  }

  mostrarTarjetas(){
    this._ts.mostrarTarjetas().subscribe((data) => this.tarjetas = data);
  }

}

