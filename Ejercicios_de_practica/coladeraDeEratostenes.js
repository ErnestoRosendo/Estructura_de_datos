let vec = []
for (let i = 0; i < 1000; i++) {
    vec[i] = 1
}
for (let i = 2; i < 1000; i++){
    if (vec[i]== 1) {
        for(let y = i+1;i < vec.length; y++){
            if (y % i==0) {
                vec[y]=0
            }
        }
    }
 
}
console.log(vec)
