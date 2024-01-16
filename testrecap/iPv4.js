function iPv4(ip){

    let check = ip.split(".");
    let check255 = 255;
    if(check[4] || !check[3])return false;
    else {
        let check2 = check.parseInt();
        for(let i = 0 ; i < check.lenght ; i++){
            if(check2[i] > check255)return false;
        }
        
        return true;
    }


}

console.log(iPv4("1.2.3.4"));
console.log(iPv4("1.2.3"));
console.log(iPv4("1.2.3.4.5"));
console.log(iPv4("123.45.67.89"));
console.log(iPv4("123.456.78.90"));
console.log(iPv4("123.045.067.089"));