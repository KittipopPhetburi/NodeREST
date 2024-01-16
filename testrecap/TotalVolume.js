
function totalVolume(...args){
    let sum = 0;
    for(let arg of args){

        sum += arg[0] * arg[1] * arg[2];

    }
    return sum;
}

console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
console.log(totalVolume([2,2,2],[2,1,1]));
console.log(totalVolume([1,1,1]));