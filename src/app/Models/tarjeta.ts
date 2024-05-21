export class Tarjeta{
  id?: string;
  titular: string = "";
  numeroTarjeta: string;
  cvv: number;
  fechaCreacion?: string;
  fechaCaducidad: Date;

  constructor(titular: string, numeroTarjeta:string, fechaCaducidad: Date, cvv: number, id?:string, fechaCreacion?: string){
    this.id = id;
    this.titular = titular;
    this.numeroTarjeta = numeroTarjeta;
    this.cvv = cvv;
    this.fechaCreacion = fechaCreacion;
    this.fechaCaducidad = fechaCaducidad;
  }
}
