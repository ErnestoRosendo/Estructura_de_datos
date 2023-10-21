// Usando la clase Nodo siguiente:
class Nodo{
  constructor(numero){
    this.numero=numero;
    this.siguiente=null;
  }
}
// Crear la función agregarOrdenadoD(nuevo) que recibe un nodo nuevo y almacenaré ese nodo ordenando de manera descendente en una lista simple.

class ListaSimple{
  constructor(){
    this.primero=null;
  }
  agregarOrdernadoD(nuevo){
    //solo escribe codigo de aqui
    if (this.primero == null) {
        this.primero = nuevo;
    } else {
        if (this.primero.numero == nuevo.numero) {
            nuevo.siguiente = this.primero;
            this.primero = nuevo;
        }
        let aux = this.primero;
        while (aux.siguiente.numero > nuevo.numero) {
            aux = aux.siguiente;
        }
        if (aux.siguiente == null) {
            aux.siguiente = nuevo;
        } else {
            nuevo.siguiente = aux.siguiente;
            aux.siguiente = nuevo;
        }



    }
    //a aqui :)
  }
}