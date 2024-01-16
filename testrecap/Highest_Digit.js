function Highest_Digit(num){


    let Str = String(num)
    let numstr = [];
    let ch = Str.split("");
    for(let i = 0 ; i < ch.length; i++){
        
        for(let j = 0 ; j < ch.lenght; j++){
            if(ch[i] < ch[j]){
                numstr[j] = ch[j];
            }
/*             else if(ch[i] > ch[j]){
                numstr[j] = ch[j];
            } */
        }
    }
    return numstr;

    
 

}

console.log(Highest_Digit(379));
console.log(Highest_Digit(2));
console.log(Highest_Digit(377401));