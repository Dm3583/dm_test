window.onload = function(){

var range = document.querySelector('#range');
var input = document.querySelector('#number');
var greenBlock = document.querySelector('.green-block');
var redBlock = document.querySelector('.red-block');
var heightGreen = 0;
range.valueAsNumber=input.value;


function num(){
    if(input.value>100){
        return input.value = 100;
    }
    range.oninput = function(){
        return input.value=range.value;
    }
    input.oninput = function(){
        return document.getElementById('range').valueAsNumber=input.value;
        
    }
}



// function setRange(num,block){
//     return block.style.height=num+"px";
// }


// function comission(num,block){
//     if(num==0){return block.style.height=0+"px",
//     block.style.bottom=num+"px";
//     }else if(num>0&&num<20){
//         return block.style.height=2+"px",
//         block.style.bottom=num+"px";
//     }else if(num>=20&&num<50){
//         return block.style.height=4+"px",
//         block.style.bottom=num+"px";
//     }else if(num>=50&&num<75){
//         return block.style.height=6+"px",
//         block.style.bottom=num+"px";
//     }else{
//         return block.style.height=8+"px",
//         block.style.bottom=num+"px";
//     }
// }
num();

// setRange(heightGreen,greenBlock);
// comission(heightGreen,redBlock);
}

