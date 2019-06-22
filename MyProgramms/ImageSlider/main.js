var images = ["1.JPG","2.JPG","3.JPG","4.JPG","5.JPG"];

var num = 0;
var sizeH = 12;
var sizeW = 20;


function next(){
    num++;
    var slider = document.getElementById("slider");
    if(num>=images.length){
        num=0;
    }
    slider.src = images[num];
}

function prev(){
    num--;
    var slider = document.getElementById("slider");
    if(num<0){
        num=images.length-1;
    }
    slider.src = images[num];
}


function increase(){
    sizeH+=12;
    sizeW+=20;
    var frame = document.getElementById("slider");
    frame.style.width=400+sizeW+"px";
    frame.style.height=300+sizeH+"px";
    // console.log(frame.style.width,frame.style.height);
}


function decrease(){
    sizeH-=12;
    sizeW-=20;
    var frame = document.getElementById("slider");
    frame.style.width=400+sizeW+"px";
    frame.style.height=300+sizeH+"px";
}
