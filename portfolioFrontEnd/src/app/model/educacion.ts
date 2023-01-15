export class Educacion {
  
  
  id?: number;
  institucion: string;
  carrera: string;
  fechaInicio: string;
  fechaFin: string;
  img:string;
  

  constructor(
    institucion: string,
    carrera: string,
    fechaInicio: string,
    fechaFin: string,
    img:string
    
  ) {
    this.institucion = institucion;
    this.carrera = carrera;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.img = img;
  }
}
