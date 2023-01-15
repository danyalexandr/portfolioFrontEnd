export class Experiencia {

    id?: number;
    puesto: string;
    empresa: string;
    fechaInicio:string;
    fechaFin:string;
    lugar:string;
    img:string;

    constructor(puesto: string, empresa: string, fechaInicio:string, fechaFin:string, lugar:string, img:string){
        this.puesto = puesto;
        this.empresa = empresa;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.lugar = lugar;
        this.img = img;
    }
}
