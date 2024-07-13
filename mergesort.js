function mergeSort(arr){
    if(arr.length == 1) return arr;
    let mid   = Math.floor(arr.length/2);
    let left  = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid,arr.length));
    return merge(left,right,arr);
  
}

function merge(left,right,arr){
    let l = 0;
    let r = 0;
    let ind = 0;


    while(l < left.length && r < right.length){
        if(left[l] <= right[r]){
            arr[ind] = left[l]; 
            l++;
        } else {
            arr[ind] = right[r]; 
            r++;
        }
        ind++;
    }

    while(l < left.length){
        arr[ind] = left[l];
        l++;
        ind++; 
    } 

    while(r < right.length){
        arr[ind] = right[r]; 
        r++;
        ind++; 
    }
    return arr;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));