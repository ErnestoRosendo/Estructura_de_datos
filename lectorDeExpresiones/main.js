class Nodo {
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
        this.anterior = null;
        this.hizq = null;
        this.hder = null;
    }
}


class Lista {
    constructor(){
        this.primero = null
    }



    agregar(nodo){
        if (this.primero === null) {
            this.primero = nodo;
        } else {
            this._recAgregar(nodo, this.primero)
        }
    }



    _recAgregar(nodo, aux){
        if (aux.siguiente !== null) {
            this._recAgregar(nodo, aux.siguiente)
        } else {
        nodo.anterior = aux;
        aux.siguiente = nodo;
        }
    }



    recorrer(){
        if (this.primero = null) {
            return null
        } else {
            this._recRecorrer(this.primero)
        }
    }


    _recRecorrer(aux){
        if (aux.dato !== "*" && aux.dato !== "/" && aux.siguiente !== null) {
            this._recRecorrer(aux.siguiente);
        } else {
            aux.hizq = aux.anterior;
            aux.hder = aux.siguiente;
            if (aux.anterior == this.primero) {
                this.primero = aux;
                aux.anterior.siguiente = null;
                aux.anterior = null;
            } else {
                aux.anterior.anterior.siguiente = aux;
                aux.anterior.siguiente = null;
                aux.anterior = aux.anterior.anterior;
            }
            if (aux.siguiente.siguiente != null) {
                aux.siguiente = aux.siguiente.siguiente;
                aux.siguiente.anterior = null;
                aux.siguiente.siguiente.anterior = aux;
            } else {
                aux.siguiente.anterior = null;
                aux.siguiente = null;
            }
            if (aux.siguiente !== null) {
                this._recRecorrer(aux.siguiente);
            }

        }
    }




}


let lista = new Lista();
let nuevo = new Nodo(9);
lista.agregar(nuevo);
nuevo = new Nodo("-");
lista.agregar(nuevo);
nuevo = new Nodo(3);
lista.agregar(nuevo);
nuevo = new Nodo("+");
lista.agregar(nuevo);
nuevo = new Nodo(2);
lista.agregar(nuevo);
nuevo = new Nodo("-");
lista.agregar(nuevo);
nuevo = new Nodo(4);
lista.agregar(nuevo);
nuevo = new Nodo("/");
lista.agregar(nuevo);
nuevo = new Nodo(2);
lista.agregar(nuevo);
nuevo = new Nodo("*");
lista.agregar(nuevo);
nuevo = new Nodo(3);
lista.agregar(nuevo);
nuevo = new Nodo("+");
lista.agregar(nuevo);
nuevo = new Nodo(9);
lista.agregar(nuevo);
nuevo = new Nodo("/");
lista.agregar(nuevo);
nuevo = new Nodo(3);
lista.agregar(nuevo);
nuevo = new Nodo("*");
lista.agregar(nuevo);
nuevo = new Nodo(6);
lista.agregar(nuevo);
nuevo = new Nodo("/");
lista.agregar(nuevo);
nuevo = new Nodo(2);
lista.agregar(nuevo);
