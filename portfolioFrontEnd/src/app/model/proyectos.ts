export class Proyectos {

    id?: number;
  nombre: String;
  descripcion: String;

  constructor(
    nombre: string,
    descripcion: string,
  ) 
  {
    this.nombre = nombre;
    this.descripcion = descripcion;
        
  }
}
