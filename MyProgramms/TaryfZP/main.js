
var wageChargeValue = [1921, 2094, 2267, 2440, 2613, 2785, 2958, 3150, 3323, 3496, 3784, 4073, 4361, 4649, 4956, 5360, 5763, 6166, 6570, 6992, 7396, 7799, 8203, 8376, 8664];


do{
    do{wageChargeUserValue = +prompt('Введіть тарифний розряд:','');}
    while(wageChargeUserValue>25);
    var index = wageChargeUserValue;

    var teacher_Rank = prompt('введіть педагогічне звання маленькими літерами(ст/мет):', '');
    var surch_age373 = +prompt('введіть розмір надбавки 373','');
    var experience = +prompt('введіть стаж роботи', '');
    var surch_age1298 = +prompt('введіть 1, якщо надбавка 1298 нараховується, 0 - якщо ні', '');

    function employeeBaseWage(index,wageChargeValue){
        var BaseWage = wageChargeValue[index-1];
        return BaseWage;
    }

    function teachRank(teacher_Rank){
        let teacherSurchage = 0;
        if(teacher_Rank==="ст"){
            teacherSurchage = employeeBaseWage(index,wageChargeValue)/100*10;
            return teacherSurchage;
        } else if(teacher_Rank==="мет"){
            return teacherSurchage = employeeBaseWage(index,wageChargeValue)/100*15;
        }else{
            return teacherSurchage;
        }
    }

    function surchage373(surch_age373){
        let result=0;
        result = (employeeBaseWage(index,wageChargeValue) + teachRank(teacher_Rank))/100*surch_age373;
        return result;
    }

    function workExperience(experience){
        let experienceSurchage = 0;
        if(experience<3){
            experienceSurchage = 0;
        }else if(experience>=3&&experience<10){
            experienceSurchage = (employeeBaseWage(index,wageChargeValue) + teachRank(teacher_Rank))/100*10;
        }else if(experience>=10&&experience<20){
            experienceSurchage = (employeeBaseWage(index,wageChargeValue) + teachRank(teacher_Rank))/100*20;
        }else{
            experienceSurchage = (employeeBaseWage(index,wageChargeValue) + teachRank(teacher_Rank))/100*30;
        }
        return experienceSurchage;
    }

    function surchage1298(surch_age1298){
        if(surch_age1298 === 1){
            return surch_age1298sum = (employeeBaseWage(index,wageChargeValue) + teachRank(teacher_Rank))/100*20;
        }else{
            return surch_age1298sum=0;}
    }

    function monthlyEmployeePremiumRate(){
        return monthly_Employee_Premium_Rate=employeeBaseWage(index,wageChargeValue)+teachRank(teacher_Rank)+workExperience(experience)+surchage1298(surch_age1298)+surchage373(surch_age373);
    };

    document.write("<table><tr><td>"+"Тарифний" +"<br>"+" розряд: "+"<td/>");
    document.write("<td>"+"Розряд за" +"<br>"+" ЄТС: "+"<td/>");
    document.write("<td>"+"Надбавка" +"<br>"+" за звання: "+"<td/>");
    document.write("<td>"+"Ставка" +"<br>"+" з урахуванням підвищень: "+"<td/>");
    document.write("<td>"+"Надбавка" +"<br>"+" за вислугу років: "+"<td/>");
    document.write("<td>"+"Надбавка" +"<br>"+" 1298: "+"<td/>");
    document.write("<td>"+"Надбавка" +"<br>"+" 373: "+"<td/>");
    document.write("<td>"+"Місячна тарифна" +"<br>"+"ставка з урахуванням" +"<br>"+" підвищень та набдавок: "+"<td/>");

    document.write("<tr/><tr>")
    document.write("<td>" +index + "<td/>");
    document.write("<td>"+ employeeBaseWage(index,wageChargeValue)+ "<td/>");
    document.write("<td>"+ Math.round(teachRank(teacher_Rank)*100)/100+ "<td/>");

    document.write("<td>"+ (Math.round(teachRank(teacher_Rank)*100)/100+employeeBaseWage(index,wageChargeValue))+"<td/>");

    document.write("<td>"+ Math.round(workExperience(experience)*100)/100+ "<td/>");
    document.write("<td>"+ Math.round(surchage1298(surch_age1298)*100)/100 + "<td/>");
    document.write("<td>"+Math.round(surchage373(surch_age373)*100)/100 + "<td/>");
    document.write("<td>"+Math.round(monthlyEmployeePremiumRate()*100)/100 + "<td/><tr/><table>");
    document.write("<hr>");
}while(confirm());