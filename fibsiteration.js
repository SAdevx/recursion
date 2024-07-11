function fibs(num){
    let arr = [];

    if(num < 0) return [];
    
    if(num >= 0)  arr.push(0);
    if(num >= 1)  arr.push(1);

    for(let i = 2; i < num; i++){
        let sum = arr[i-1] + arr[i-2];
        arr.push(sum);
    }
    return arr;
}

console.log(fibs(8));
console.log(fibs(6));
console.log(fibs(10));
console.log(fibs(50));
console.log(fibs(-3));