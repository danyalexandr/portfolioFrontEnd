export class Experiencia {

    id?: number;
    puesto: string;
    empresa: string;
    fechaInicio:string;
    fechaFin:string;
    lugar:string;

    constructor(puesto: string, empresa: string, fechaInicio:string, fechaFin:string, lugar:string){
        this.puesto = puesto;
        this.empresa = empresa;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.lugar = lugar;
    }
}
