export class Client{
  private _edad: number;
  private _name: string;

  constructor(_name: string, _edad: number){
    this._edad = _edad;
    this._name = _name;
  }

  //para acceder al dato privado desde otra clase, creamos un getter
  // get + getX()
  public get getName(){
    //debe retornar la var que queremos usar mas tarde
    return this._name;
  }

  //para cambiar el valor de una variable, creamos un setter
  public set setName(name: string){
    //validaciones pertinentes
    this._name = name;
  }
  public get getEdad(){
    return this._edad;
  }

  public set setEdad(edad: number){
    this._edad = edad;
  }
}
