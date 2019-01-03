window.onload = function(){

var range = document.querySelector('#range');
var input = document.querySelector('#number');
var greenBlock = document.querySelector('.green-block');
var redBlock = document.querySelector('.red-block');

range.valueAsNumber=0;
input.value=0;

function num(){
    greenBlock.style.height=0;
    redBlock.style.height=0;
    range.oninput = function(){
        input.value=this.value;
        greenBlock.style.height = this.valueAsNumber+"px";
        calculateTax(this.valueAsNumber,redBlock)
    }
    input.oninput = function(){
        input.value>100 ? input.value = 100: range.valueAsNumber=this.value;
        greenBlock.style.height = this.value+"px";
        calculateTax(this.value,redBlock)
    }
}

function calculateTax(n,block){
    if(n==0){
        block.style.height=0+"px"
    }else if(n>0&&n<20){
        block.style.height=2+"px"
    }else if(n>=20&&n<50){
        block.style.height=4+"px"
    }else if(n>=50&&n<75){
        block.style.height=6+"px"
    }else{
        block.style.height=8+"px"
    }
block.style.bottom=n+"px";

}

num();

}

