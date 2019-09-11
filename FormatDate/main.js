function formatDate(value){
    var year, month, date, resultStr;

    if(typeof value==="string"){
        value=value.split("-");
    }

    if(typeof value==="number"){
        value=new Date(value);
    }

    if(typeof value==="object"){
        function combStr(){
            resultStr=[];
            resultStr[0]=date;
            resultStr[1]=month;
            resultStr[2]=year;
            return resultStr=resultStr.join(".");
        }

        function toStr(val){
            val=val.toString();
            return val;
        }
        
        function addZero(val){
            if(val.length<2){
                return val="0"+val
            }else{
            return val;
            }
        }

        function cutNum(val){
            val=val.split("").slice(-2).join("");
            return val
        }

        if(Array.isArray(value)){
        for(var i = 0; i<value.length; i++){
            if(typeof value[i]==="number"){
                value[i]=toStr(value[i]);
            }
        }
        year=cutNum(value[0]);
        month=addZero(value[1]);
        date=addZero(value[2]);
        combStr();
        }else{
            month=addZero(toStr(value.getMonth()+1));
            date=addZero(toStr(value.getDate()));
            year=cutNum(toStr(value.getFullYear()));
            combStr();
        }
    }
    return resultStr;
}

console.log(formatDate(new Date(2013,10,1)));
console.log(formatDate([2014,1,2]));
console.log(formatDate("2014-01-01"));
console.log(formatDate(45674785696890));

console.log(formatDate(8345546756856895));