export class Skill {

    id?: number;
  habilidad: string;
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
