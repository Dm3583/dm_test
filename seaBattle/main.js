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
var ship3=new Ship(6,2,4,'row');
var ship4=new Ship(8,8,2,'row');
var ship5=new Ship(3,6,2,'column');
// console.log(typeof ship4.direction);


var f1 = new PlayField("Player");

class Controller{
    constructor(field){
        this.field=field;
    }
    setShip(list){
        let battleField = this.field.createField();
        for(let i = 0; i<list.length;i++){
            var ship=list[i];
            battleField[ship.y-1][ship.x-1]=1;
            if(ship.direction==="row"||ship.direction===undefined){
                for(let j=0;j<ship.size;j++){
                    battleField[ship.y-1][ship.x-1+j]=1;
                }
            }
            if(ship.direction==="column"){
                for(let p=0;p<ship.size;p++){
                    battleField[ship.y-1+p][ship.x-1]=1;
                }
            }
        console.log(ship);
        }
        return console.log(battleField);
    }
    shoot(){}
    startGame(){}
    endGame(){}
}


new Controller(f1).setShip([ship1,ship2,ship3,ship4,ship5]);





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