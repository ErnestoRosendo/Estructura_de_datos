class Nodo {
    constructor(numero){
        this.numero = numero;
        this.hizq = null;
        this.hder = null;
    }
}

class ArbolBinario{
    constructor(){
        this.raiz = null;
    }

    agregar(nuevo){
        if (this.raiz === null) {
            this.raiz = nuevo;
        }
        else {
            this._recAgregar(nuevo, this.raiz);
        }
    }


    _recAgregar(nuevo, raizx){
        if (nuevo.numero < raizx.numero) {
            if (raizx.hizq == null) {
                raizx.hizq = nuevo;
            }
            else {
                this._recAgregar(nuevo, raizx.hizq)
            }
        }
        else {
            if (raizx.hder == null) {
                raizx.hder = nuevo;
            }
            else {
                this._recAgregar(nuevo, raizx.hder)
            }
        }
    }

    buscar(number){
        if (this.raiz === null){
            return null
        } else {
            return this._recBuscar(number, this.raiz)
        }
    }


    // _recBuscar (number, raizx){
    //     if (number == raizx.number){
    //         return raizx
    //     }
    //     else if (number < raizx.number){
    //         if (raizx.hizq != null) {
    //             return this._recBuscar(number, raizx.hizq)
    //         }
    //     } else {
    //         if (raizx.hder != null) {
    //             return this._recBuscar(number, raizx.hder)  
    //         }
    //     }
    // }

    _recBuscar(number, raizx) {
        if (raizx === null) {
            return null;
        }
    
        if (number === raizx.numero) {
            return raizx;
        } else if (number < raizx.numero) {
            return this._recBuscar(number, raizx.hizq);
        } else {
            return this._recBuscar(number, raizx.hder);
        }
    }



    preOrder(){
        if (this.raiz === null){
            return null
        } else {
            return this._recPre(this.raiz)
        }
    }


    _recPre(raizx) {

        console.log(raizx.numero)
        if (raizx.hizq != null) { 
            this._recPre(raizx.hizq)
        }

        if (raizx.hder != null) {
            this._recPre(raizx.hder)
        }
    }

    postOrder(){
        if (this.raiz === null){
            return null
        } else {
            return this._recPost(this.raiz)
        }
    }


    _recPost(raizx) {

        if (raizx.hizq != null) {
            this._recPre(raizx.hizq)
        }

        if (raizx.hder != null) {
            this._recPre(raizx.hder)
        }

        console.log(raizx.numero)
        
    }
}



let miArbol = new ArbolBinario();
let nuevo = new Nodo(22)
miArbol.agregar(nuevo);
nuevo = new Nodo(4)
miArbol.agregar(nuevo);
nuevo = new Nodo(7)
miArbol.agregar(nuevo);
nuevo = new Nodo(45)
miArbol.agregar(nuevo);
nuevo = new Nodo(33)
miArbol.agregar(nuevo);
nuevo = new Nodo(15)
miArbol.agregar(nuevo);
console.log(miArbol.buscar(33));
miArbol.preOrder();