

export class Usuario{
    _id?: string;
    nombre: string;
    informacion: string;

    constructor(nombre: string, informacion: string){
        this.nombre = nombre;
        this.informacion = informacion;
    }
}