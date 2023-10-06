class Nodo{
    constructor(dato){
      this.dato=dato;
      this.siguiente=null;
      this.anterior=null;
    }
  }
 
  class LinkedList{
    constructor(){
      this.primero=null;
    }
      agregar(nuevo){
      if (this.primero==null)
        this.primero=nuevo;
      else{
        let aux=this.primero;
          while (aux.siguiente!=null)
          aux=aux.siguiente;
          aux.siguiente=nuevo;
          nuevo.anterior=aux;
      }
    }
   
    listar(){
      if (this.primero==null)
        return "";
      else
        return this._recListar(this.primero);
    }

    buscar(dato){
        let aux = this.primero
        while (aux.dato !== dato) {
            aux = aux.siguiente
        }
        return aux
    }

    agregarInicio(dato){
        dato.siguiente = this.primero
        this.primero.anterior = dato
        this.primero = dato;
    }

    agregarAntes(dato, nuevo){

        let aux = this.primero
        while (aux.dato != dato) {
            aux = aux.siguiente
        }
        nuevo.siguiente = aux
        nuevo.anterior = aux.anterior
        aux.anterior.siguiente = nuevo
        aux.anterior = nuevo
    }

    agregarDespues(dato, nuevo){
        let aux = this.primero
        while (aux.dato != dato) {
            aux = aux.siguiente
        }
        nuevo.siguiente = aux.siguiente
        nuevo.anterior = aux
        aux.siguiente.anterior = nuevo
        aux.siguiente = nuevo
        
    }

    extraer(dato){
        aux = this.primero
        while (aux.siguiente != null) {
            if (aux.dato == dato) {
                
            }
            aux = aux.siguiente
        }
    }

    _recListar(nodo){
      if (nodo.siguiente==null)
        return nodo.dato;
      else
        return nodo.dato + ' ' + this._recListar(nodo.siguiente);
    }



  listarInverso(nodo){
    if (nodo.siguiente==null)
      return nodo.dato;
    else
      return nodo.dato + ' ' + this._recListar(nodo.siguiente);
  }
}

 
  let grupo=new LinkedList();
  let nuevo=new Nodo("F");
  grupo.agregar(nuevo);
  nuevo=new Nodo("J");
  grupo.agregar(nuevo);
  nuevo=new Nodo("K");
  grupo.agregar(nuevo);
  nuevo=new Nodo("M");
  grupo.agregar(nuevo);
  nuevo=new Nodo("Q");
  grupo.agregar(nuevo);
  nuevo=new Nodo("T");
  grupo.agregar(nuevo);  
  nuevo=new Nodo("M");
  grupo.agregar(nuevo);
  nuevo=new Nodo("A");
  grupo.agregarInicio(nuevo);
  nuevo =new Nodo("B");
  grupo.agregarAntes("F", nuevo);       
  nuevo =new Nodo("C");
  grupo.agregarDespues("B", nuevo);
  console.log(grupo.listar());