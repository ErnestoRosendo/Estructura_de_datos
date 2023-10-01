let vec = [1, 3, 5, 9, 7, 8, 6, 15, 22];
        //dividir entre dos la extension del vector me ayuda a que el intercambio deje de hacerse a partir
        //de la mitad y evitar que el vector quede igual que como empezo
function girar(vector){
    for (let i = 0; i < vector.length/2; i++) {
        x = vector[i];
        y = vector[vector.length - (i +1)];
        vector[i] = y;
        vector[vector.length - (i + 1)] = x;
        
    }
    console.log(vector)
}
girar(vec);