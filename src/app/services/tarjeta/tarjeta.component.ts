import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarjeta } from '../../Models/tarjeta';

@Injectable({
  providedIn: 'root'
})

export class TarjetaComponent {
  private _URL: string = "http://localhost:3000/api/";

  constructor(private _http:HttpClient){  }

  crearTarjeta(tarjeta: Tarjeta):Observable<any>{
    return this._http.post(this._URL + "addCard", tarjeta);
  }

  mostrarTarjetas():Observable<any>{
    return this._http.get(this._URL);
  }
}

