window.onload=function(){
    let div = document.getElementById("testDiv");
    div.innerText="Hi";
    function growH(h,n){
        return h+n+"px";}
    function back(){
        return 200+"px"
    }
    function move(currPos,n){
        return currPos+n+'px';
    }

    document.addEventListener('keypress',
        (event)=>{let keyName = event.key;
        let _keyCode = event.keyCode;
        
        div.innerText+=keyName;
        let num = 1;
        let _num = -1;
        let curr= parseInt(div.style.height);
        let _left = parseInt(div.style.left);
        let _top = parseInt(div.style.top);

        if(_keyCode===104){
            div.style.height=growH(curr,num);
        }
        if(_keyCode===98){
            div.style.height=back();
        }
        if(_keyCode===119){
            div.style.top=move(_top,_num);
        }
        if(_keyCode===97){
            div.style.left=move(_left,_num)
        }
        if(_keyCode===115){
            div.style.top=move(_top,num);
        }
        if(_keyCode===100){
            div.style.left=move(_left,num);
        }
    });

    let curW=parseInt(div.style.width);
    let curH=parseInt(div.style.height);

    let flag=true;

    document.addEventListener('keypress',
    (event)=>{
        let _keyCode = event.keyCode;
        let currTop=parseInt(div.offsetTop);
        console.log(currTop);
        if(_keyCode===32&&flag===true){
            div.style.width=curW*1.4+'px';
            div.style.height=curH*0.85+'px';
            div.style.top = currTop + (curH*0.15)+'px';
            console.log(div.offsetTop);
            return flag=false;
        }
    });
    console.log(div);

    document.addEventListener('keyup',
    (event)=>{
        let _keyCode = event.keyCode;
        let localTop=parseInt(div.style.top);
        if(_keyCode===32&&flag==false){
            div.style.width=curH+'px';
            div.style.height=curH+'px';
            div.style.top=localTop-(curH*0.15)+'px';
            console.log(div.offsetTop);
            return flag=true;
        }
    });
};