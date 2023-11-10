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

    buscar(nodo){
        if (this.raiz === null){
            return null
        } else {
            this._recBuscar(nodo, this.raiz)
        }
    }


    _recBuscar (nodo, raizx){
        if (nodo.number === raizx.number){
            return raizx
        }
        else if (nodo.number < raizx.number){
            this._recBuscar(nodo, raizx.hizq)
        } else {
            this._recBuscar(nodo, raizx.hder)
        }
    }


    _recInorder (nodox){
        
    }
}