
export class Registro{
    _id?: string;
    tipo: string;
    informacion: string;

    constructor(tipo: string, informacion: string){
        this.tipo = tipo;
        this.informacion = informacion;
    }
}