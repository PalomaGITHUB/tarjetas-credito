import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Client } from './Models/client';
import { CrearTarjetaComponent } from './crear-tarjeta/crear-tarjeta.component';
import { ListarTarjetaComponent } from './listar-tarjeta/listar-tarjeta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CrearTarjetaComponent, ListarTarjetaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TarjetasCredito';

  showData(){
    //objeto client
    let client = new Client('Vinicius', 26);

    //resultado: Vinicius 26
    console.log(client.getName);
    console.log(client.getEdad);

    //cambio el nombre
    client.setName = 'Joselu'
    client.setEdad = 28;

    //resultado Joselu 28
    console.log(client.getName);
    console.log(client.getEdad);

  }
}
