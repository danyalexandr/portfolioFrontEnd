export class Educacion {
  
  
  id?: number;
  institucion: String;
  carrera: String;
  fechaInicio: String;
  fechaFin: String;
  

  constructor(
    institucion: string,
    carrera: string,
    fechaInicio: string,
    fechaFin: string,
    
  ) {
    this.institucion = institucion;
    this.carrera = carrera;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    
  }
}
