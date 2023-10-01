// let suma = 0;
// let limite = prompt("digite el limite");

// for (let i = 0, z = 1; i < limite; i++, z+=2) {
//     if (i % 2 == 0) {
//         suma += 4 / z 
//     } else {
//         suma -= 4 / z
//     }
    // console.log (suma)
// }


let suma = 0;
let limite = prompt("digite el limite");
let den = 1, sig = 1;
for (let i = 0; i < limite; i++, den+=2, sig*=-1) {
    suma += 4/(den*sig)
}
console.log (suma)