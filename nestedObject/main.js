let obj1 = {here: {is:"an",obj:{ill:"tn"}}, object:{it:"tn"}};

let obj2 = {here: {is:"an"}, object:{it:"tn",u:{l:10,k:20},yu:{hg:{gol:45}}}};

let obj3 ={is:"an"};

function objectKeyShow(obj){
    let arr =[];
    if(typeof obj!='object'||obj===null){
        return false}else{
            for(let key in obj){
                arr.push(key);
                if(typeof obj[key]==='object'){
                    let inKey=objectKeyShow(obj[key]);
                    
                    arr=arr.concat(inKey);
                }
            }
        }
    return arr;
}


// console.log(objectKeyShow(obj1));

function contentOfObjKey(obj){
    let arr=[];
    if(typeof obj!='object'||obj===null){
        return false
    }else{
        for(let key in obj){
            arr.push(obj[key]);
            if(typeof obj[key]==='object'){
                let internalObj=contentOfObjKey(obj[key]);
                arr=arr.concat(internalObj);
            }
        }
    }
    return arr;
}

// console.log(contentOfObjKey(obj1));

function returnSmpleObject(obj){
    let outputObj={};
    let outputKey = objectKeyShow(obj);
    let outputKeyContent = contentOfObjKey(obj);
    for(let i=0;i<outputKey.length;i++){
        console.log(outputKey[i]);
        if(typeof outputKeyContent[i]==='object'){
            continue;
        }else{
        outputObj[outputKey[i]]=outputKeyContent[i];
        }
    }
    return outputObj;
}

console.log(returnSmpleObject(obj2));