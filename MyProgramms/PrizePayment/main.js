window.onload = function(){
    let counter = 0;
    const container = document.getElementById("root");
    function inpInt(from,to){
        from.addEventListener("keyup",()=>setTimeout(to.innerText=parseFloat(from.value),10))};
    const totalBlock = document.createElement("div");
    const totalPrize = document.createElement("input");
    totalPrize.setAttribute("placeHolder", "TotalPRIZE");
    totalBlock.appendChild(totalPrize);
    const totalPrizeP=document.createElement("p");
    totalPrizeP.setAttribute("id","totalAmount");
    totalPrizeP.style.display="inline-block";
    totalPrizeP.style.margin= 0 + "px";
    totalPrizeP.style.fontSize=24+"px";
    totalPrizeP.style.color="darkmagenta";
    totalBlock.appendChild(totalPrizeP);
    const totalScore = document.createElement("p");
    totalScore.setAttribute("id","totalScore");
    totalScore.style.minHeight=18+"px";
    totalScore.style.border=2+"px"+" "+"solid"+" "+"blue";
    totalScore.style.margin=0+"px";
    totalScore.style.textAlign = "center";
    totalScore.style.fontSize = 24+"px";
    totalScore.style.color = "blue";
    totalBlock.appendChild(totalScore);
    const coefficient = document.createElement("p");
    coefficient.setAttribute("id","coeff");
    coefficient.style.minHeight= 18 + "px";
    coefficient.style.border = 2 + "px"+" "+"solid"+" "+"red";
    coefficient.style.margin = 0 + "px";
    coefficient.style.textAlign = "center";
    coefficient.style.fontSize = 24+"px";
    coefficient.style.color = "red";
    totalBlock.appendChild(coefficient);
    const prizeRest = document.createElement("p");
    prizeRest.setAttribute("id","prizeRest");
    prizeRest.style.minHeight= 18 + "px";
    prizeRest.style.border = 2 + "px"+" "+"solid"+" "+"lightgreen";
    prizeRest.style.margin = 0 + "px";
    prizeRest.style.textAlign = "center";
    prizeRest.style.fontSize = 24+"px";
    prizeRest.style.color = "lightgreen";
    totalBlock.appendChild(prizeRest);
    inpInt(totalPrize, totalPrizeP);
    const inputContainer = document.createElement("div");
    container.appendChild(inputContainer);
    function divContRow(){
        let divRow=document.createElement("div");
        divRow.setAttribute("id",counter);
        divRow.style.border = 2+"px"+" "+"solid"+" "+"green";
        divRow.style.minHeight=70+"px";
        inputContainer.appendChild(divRow);
        let btn=document.createElement("button");
        btn.innerText="Add Row";
        divRow.appendChild(btn);
        let toggler=true;
        btn.addEventListener("click", ()=>{
            if(btn.innerText==="Add Row"&&toggler === true)
            {btn.innerText = "Remove Row";
            divContRow();
            return toggler=false;}
            if(btn.innerText === "Remove Row"&&toggler === false){
                let par = btn.parentNode;
                par.parentNode.removeChild(par);
            }
        });
        const nameInput = document.createElement("input");
        nameInput.setAttribute("placeHolder","Employee name");
        nameInput.setAttribute("type","text");
        divRow.appendChild(nameInput);
        const nameP=document.createElement("p");
        nameP.style.margin = 0+"px";
        nameP.style.fontSize = 24 + "px";
        nameP.style.color="brown";
        nameP.style.textAlign="center"
        divRow.appendChild(nameP);
        function inpField(from,to){
            from.addEventListener("keyup",()=>setTimeout(to.innerText = from.value,10))};
        inpField(nameInput,nameP);
        const scoreField = document.createElement("input");
        scoreField.setAttribute("placeHolder","Score");
        scoreField.setAttribute("type","text");
        divRow.appendChild(scoreField);
        const scoreP = document.createElement("p");
        scoreP.setAttribute("class","score");
        scoreP.style.display = "inline-block";
        scoreP.style.margin = 0 +"px";
        divRow.appendChild(scoreP);
        inpInt(scoreField,scoreP);
        let employeePrize=document.createElement("p");
        employeePrize.setAttribute("class","PersonalPrize");
        employeePrize.style.minHeight= 18 + "px";
        employeePrize.style.border = 2+"px"+" "+"solid"+" "+"darkblue";
        employeePrize.style.margin = 0 + "px";
        employeePrize.style.fontSize = 24 + "px";
        employeePrize.style.textAlign = "center";
        divRow.appendChild(employeePrize);
        return counter++;
    };
    divContRow();
    container.appendChild(totalBlock);
    const resultBtn = document.createElement("button");
    resultBtn.innerText = "RESULT";
    container.appendChild(resultBtn);
    resultBtn.addEventListener("click",()=>{
        let arr = container.querySelectorAll(".score");
        let sum = 0;
        for(let i =0; i<arr.length; i ++){
            let current = parseFloat(arr[i].innerText);
            console.log(arr[i].innerText);
            sum+=current;
            totalScore.innerText=sum+" Total Score";
            coefficient.innerText=Math.floor((parseFloat(totalPrizeP.innerText)/parseFloat(totalScore.innerText)*100))/100 + " coefficient";
        }
    });
     resultBtn.addEventListener("click",()=>{
        let prizeSum = 0;
        let arr = container.querySelectorAll(".score");
        let persPrizeArr = container.querySelectorAll(".PersonalPrize");
    for(let i =0; i<arr.length; i ++){
        persPrizeArr[i].innerText=Math.floor((parseFloat(arr[i].innerText)*parseFloat(coefficient.innerText))/10)*10 + " Personal Prize";
        prizeSum+=parseInt(persPrizeArr[i].innerText);
        prizeRest.innerText=parseFloat(totalPrizeP.innerText)-prizeSum + " Rest";
        }
    });
};