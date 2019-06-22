function sumWork(input){
    var sum=0;
    do{
    input = +prompt('Enter input','');
    console.log(input);
    sum+=input;
    sum=Math.round(sum*1000)/1000;
    console.log(sum);
    }while(confirm('input'));
    return sum;
}
console.log(sumWork());