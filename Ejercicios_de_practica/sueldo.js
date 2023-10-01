// Crear programa que permita leer el sueldo de una persona usando la variable "sueldo", deberá aplicar un aumento de acuerdo a la siguiente tabla y aplicar el cambio en la misma variable "sueldo", al final mostrar el contenido de la variable "sueldo" que ya almacena el sueldo nuevo incluido el aumento con un console.log (no se muestra cuanto es el aumento)
// Si sueldo es menor o igual a 1000 el aumento es del 18%, 
// si el sueldo es de 1001 a 1200 el aumento es del 15%, 
// si el sueldo es de 1201 a 1450 el aumento es del 12%, 
// si el sueldo es de 1451 a 1600 el aumento es del 10% y 
// si el sueldo es mayor el aumento es del 8%.


let sueldo = prompt("Ingresa tu sueldo");

if (sueldo <= 1000) {
    sueldo*=1.18;
    console.log(sueldo)
}else if (sueldo >= 1001 && sueldo <=1200){
    sueldo*=1.15;
    console.log(sueldo)
}else if (sueldo >= 1201 && sueldo <=1450){
    sueldo*=1.15;
    console.log(sueldo)
}else if (sueldo >= 1451 && sueldo <=1600){
    sueldo*=1.15;
    console.log(sueldo)
}else{
    sueldo*=1.15;
    console.log(sueldo)
}
