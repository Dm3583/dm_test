class PlayField{
    constructor(name){
        this.name=name;
    }

    createField(){
        var n = 10;
        var field = new Array(n)
        for(let i = 0; i < field.length; i++){
            field[i] = new Array(n);
            for(let j = 0; j < field[i].length; j++){
                field[i][j] = 0;
            }
            // console.log(field[i]);
            // document.write('\n');
        }
        return field;
    }
}

// PlayField.createField();

class Ship{
    constructor(x,y,size,direction){
        this.x=x;
        this.y=y;
        this.size=size;
        this.direction=direction;
    }
}

var ship1=new Ship(1,1,3,'row');
var ship2=new Ship(1,3,3,'column');
var ship3=new Ship(7,1,4,'row');
var ship4=new Ship(8,8,2,'row');
var ship5=new Ship(3,6,2,'column');
var ship6=new Ship(3,4,1,'row');
var ship7=new Ship(5,4,1,'row');
var ship8=new Ship(7,4,1,'row');
var ship9=new Ship(9,4,1,'row');
var ship10=new Ship(1,10,2,'row');

var ship11=new Ship(10,10,1,'row');
var ship12=new Ship(8,10,1,'row');
var ship13=new Ship(6,10,1,'row');
var ship14=new Ship(6,6,1,'row');
var ship15=new Ship(9,6,2,'row');
var ship16=new Ship(4,8,3,'column');
var ship17=new Ship(2,7,2,'column');


var f1 = new PlayField("Player");

class Controller{
    constructor(field){
        this.field=field;
    }
    setShip(list){
        let battleField = this.field.createField();

            var counter1 = 0;
            var counter2 = 0;
            var counter3 = 0;
            var counter4 = 0;
            var list2 = [];

           list.forEach((item,i,list)=>{
                        if(item.size==1){
                            var ship1=item;
                            counter1++;
                            if(counter1<=4){
                                list2.push(ship1);
                            }
                        }
                        if(item.size==2){
                            counter2++;
                            var ship2=item;
                            if(counter2<=3){
                                list2.push(ship2);
                            }
                        }
                        if(item.size==3){
                            counter3++;
                            var ship3=item;
                            if(counter3<=2){
                                list2.push(ship3);
                            }
                        }
                        if(item.size==4){
                            counter4++;
                            var ship4=item;
                            if(counter4<=1){
                                list2.push(ship4);
                            }
                        }
                    return list2;
                });
            
                // console.log(list2);


            list2.forEach((item,i,list2)=>{
                battleField[item.y-1][item.x-1]=1;
                if(item.direction==="row"||item.direction===undefined){
                    for(let j=0;j<item.size;j++){
                        battleField[item.y-1][item.x-1+j]=1;
                    }
                }
                if(item.direction==="column"){
                    for(let p=0;p<item.size;p++){
                        battleField[item.y-1+p][item.x-1]=1;
                    }
                }
            });
        return console.log(battleField);
    }
    shoot(){}
    startGame(){}
    endGame(){}
}


new Controller(f1).setShip([ship1,ship2,ship3,ship4,ship5,ship6,ship7,ship8,ship9,ship10,ship11,ship12,ship13,ship14,ship15,ship16,ship17]);





var f1 = new PlayField("Player");
var f2 = new PlayField("Computer");
// console.log(f1);


// f1.createField();



// console.log(f2);
// f2.createField();

function arr(){

var arr= new Array(10);

    for(let k = 0; k<arr.length; k++){
        arr[k] = new Array(10);
        for(let p = 0; p<arr[k].length; p++){
            arr[k][p]=0
        }
        // console.log(arr[k]);
        
    }

    return arr;
}

// arr();

// function setChar(n,m,array){
//     array[n][m]=5;
//     return array;
// }

// console.log(setChar(1,1,f1.createField()));