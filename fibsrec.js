function fibsRec(n){
    if(n <= 0) return 'Out Of Range';
    if(n === 1) return [0];
    if(n === 2) return [0,1];

    let arr = fibsRec(n-1);
    return [...arr, arr[arr.length-1]+arr[arr.length-2]];
}

console.log(fibsRec(8));
console.log(fibsRec(6));
console.log(fibsRec(10));
console.log(fibsRec(50));
console.log(fibsRec(-3));