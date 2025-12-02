export class Direccion {
    //constructor de tipo firma
    constructor(
        public _idDireccion: number,
        public _codPostal: number,
        public _ciudad: string,
        public _municipio: string,
        public _provincia: string,
    ){};

    // getters y setters
    get idDireccion() : number {return this._idDireccion;}
    get CodPostal() : number {return this._codPostal;}
    get Ciudad() : string {return this._ciudad;}
    get Municipio() : string {return this._municipio;}
    get Provincia() : string {return this._provincia;}
    
    set idDireccion(idDireccion: number){this._idDireccion = idDireccion}
    set codPostal(codPostal: number){this._codPostal = codPostal}
    set ciudad(ciudad: string){this._ciudad = ciudad}
    set municipio(municipio: string){this._municipio = municipio}
    set Provincia(Provincia: string){this._provincia = Provincia}
    
    
    
}
