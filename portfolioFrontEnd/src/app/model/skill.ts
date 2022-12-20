export class Skill {

    id?: number;
  habilidad: String;
  porcentaje: number;

  constructor(
    habilidad: string,
    porcentaje: number,
  ) 
  {
    this.habilidad = habilidad;
    this.porcentaje = porcentaje;
        
  }
}
