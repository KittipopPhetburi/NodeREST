function digitalClock(sec){

    let hour = Math.floor(sec / 3600)%24;
    let minute =  Math.floor((sec % 3600)/60);
    let second = sec % 60;

    return `${hour}:${minute}:${second}`;
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));