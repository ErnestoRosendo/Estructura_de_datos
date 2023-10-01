function dado() {
    return Math.floor(Math.random()*6)+1;
}


let vec = [];

for (let i = 0; i < 6; i++) {
    vec[i] = 0;
        
}

function lanzarDado(){
    for (let i = 0; i < 100; i++) {
        let resultado = dado();
        if (resultado == 1) {
            vec[0]++;
        } else if (resultado == 2) {
            vec[1] += 1;
        } else if (resultado == 3) {
            vec[2] += 1;
        } else if (resultado == 4) {
            vec[3] += 1;
        } else if (resultado == 5) {
            vec[4] += 1;
        } else {
            vec[5] += 1;
        }
        
    }
    for (let i = 0; i < 6; i++) {
        console.log(`La cara ${i+1} del dado cayó ${vec[i]} veces`)
        
    }
}

lanzarDado();