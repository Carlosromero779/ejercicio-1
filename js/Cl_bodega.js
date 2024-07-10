export default class Cl_bodega{
    constructor(){
        this.acumGanancia = 0;
    }
    procesarArticulos(arti){
        this.acumGanancia+= arti.aumento();
    }
    gancia(){
        return this.acumGanancia;
    }
}