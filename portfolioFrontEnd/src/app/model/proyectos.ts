export class Proyectos {

    id?: number;
  nombre: String;
  descripcion: String;

  constructor(
    institucion: string,
    carrera: string,
  ) 
  {
    this.nombre = institucion;
    this.descripcion = carrera;
        
  }
}
