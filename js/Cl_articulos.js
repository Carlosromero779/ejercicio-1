export default class Cl_articulos{
    constructor(p){
        this.precio = p;
    }
    set precio(p){
        this._precio = p;
    }
    get precio(){
        return this._precio;
    }
    aumento(){
        return this.precio*0.5;

    }
}