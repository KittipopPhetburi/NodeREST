function SimplePair(arr,n){
    if(arr[0]*arr[1] === n) return arr[0],arr[1];
    else if(arr[0]*arr[2] === n) return arr[0],arr[2];
    else if(arr[1]*arr[2] === n) return arr[1],arr[2];
    else return null;
}
console.log(SimplePair([1,2,3],2));
console.log(SimplePair([1,2,3],3));
console.log(SimplePair([1,2,3],6));
console.log(SimplePair([1,2,3],9)); 
