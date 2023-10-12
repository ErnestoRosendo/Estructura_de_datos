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

    buscar(dato) {
      let aux = this.primero;
      while (aux !== null) {
        if (aux.dato === dato) {
          return aux;
        }
        aux = aux.siguiente;
      }
      return null; 
    }

    agregarInicio(dato){
        dato.siguiente = this.primero
        this.primero.anterior = dato
        this.primero = dato;
    }

    agregarAntes(dato, nuevo){
      let aux = this.primero
        if (dato === aux.dato) {
          nuevo.siguiente = aux
          this.primero.anterior = nuevo
          this.primero = nuevo
        } else {
        while (aux.dato != dato) {
            aux = aux.siguiente
        }
        nuevo.siguiente = aux
        nuevo.anterior = aux.anterior
        aux.anterior.siguiente = nuevo
        aux.anterior = nuevo
        }
    }

    agregarDespues(dato, nuevo){
        let aux = this.primero
        while (aux.siguiente != null) {
          if (aux.dato == dato) {

            nuevo.siguiente = aux.siguiente
            nuevo.anterior = aux
            aux.siguiente.anterior = nuevo
            aux.siguiente = nuevo
            
          }
          aux = aux.siguiente
        }
        if (aux.dato == dato) {

          nuevo.anterior = aux
          aux.siguiente = nuevo
          
        }
        
    }

    extraer(dato){
      let aux = this.primero;
      while (aux !== null) {
        if (aux.dato === dato) {
          if (aux.anterior == null) {
            aux.siguiente.anterior = null;
            this.primero = aux.siguiente
            return aux
          } else if (aux.siguiente == null) {
            aux.anterior.siguiente = null
            return aux
          } else {
            aux.anterior.siguiente = aux.siguiente;
            aux.siguiente.anterior = aux.anterior;
            return aux
          }
        }
        aux = aux.siguiente;
      }
      
      return null; 
      
    }

    _recListar(nodo){
      if (nodo.siguiente==null)
        return nodo.dato;
      else
      return nodo.dato + ' ' + this._recListar(nodo.siguiente);
    }


    _recListarInverso(nodo){
      if (nodo.siguiente==null)
        return nodo.dato;
      else
      return this._recListarInverso(nodo.siguiente) + ' ' + nodo.dato;
    }
    


  listarInverso(){
    if (this.primero==null)
        return "";
      else
        return this._recListarInverso(this.primero);
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
  nuevo=new Nodo("U");
  grupo.agregar(nuevo);
  nuevo=new Nodo("A");
  grupo.agregarInicio(nuevo);
  nuevo =new Nodo("B");
  grupo.agregarAntes("F", nuevo);       
  nuevo =new Nodo("C");
  grupo.agregarDespues("B", nuevo);
  nuevo =new Nodo("Z");
  grupo.agregarDespues("U", nuevo);
  console.log(grupo.listar());