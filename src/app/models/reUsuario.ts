
export class ReUsuario{
    _id?: string;
    nombre: string;
    email: string;
    rol: string;

    constructor(nombre: string, email: string, rol: string){
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
    }
}