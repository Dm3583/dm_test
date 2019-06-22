function DepartmentBossSalory(input){
    input = +prompt('Enter sum','');
    console.log(input);
    var salory = 0;
    salory = Math.round(input/100*15*100)/100;
    return salory;
}

console.log(DepartmentBossSalory());