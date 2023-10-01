let myArray = [];

for (let i = 0; i < 15; i++) {
    myArray[i] = Math.floor(Math.random() * 30) +1
}

function burbuja(vec){
    let sum = 0;
    let pos1, pos2
    for (let i = vec.length -1; i > 0; i--) {
        for (let y = 0; y < i; y++) {
            sum++
            if (vec[y] > vec[y + 1]) {
                pos1 = vec[y];
                pos2 = vec[y + 1];
                vec[y] = pos2;
                vec[y + 1] = pos1;
            }
            
        }
        
    }
    return `${sum} comparaciones realizadas`
}

burbuja(myArray);