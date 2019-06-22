var total = 0;

do{var value = prompt('enterSum','');
    let sum = parseFloat(value);
    total+=sum;
    console.log(sum);
    console.log(Math.round(total*100)/100);
    }while(confirm('enter?'));

console.log(Math.round(total*100)/100);