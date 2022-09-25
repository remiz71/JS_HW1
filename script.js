// Task 1
console.log("Task 1")
var age = 38;
console.log(age>=18?"Совершеннолетний":"Несовершеннолетний");

//Task 2
console.log("Task 2");
var year = 2008;
console.log(year%400==0 || (year%4==0 && year%100!=0)?`Год ${year} - високосный`:`Год ${year} - не високосный`);

//Task 3
console.log("Task 3")
var sum= 1870;
console.log(sum>=1000?`Сумма покупки - ${sum*0.95}`:`Сумма покупки - ${sum}`);

//Task 4
console.log("Task 4")
var r_len = 8;
var s_per = 16;
var d = 2*(r_len/(2*3,14));
console.log(d<=(s_per/4)?"Круг впишется": "Круг не впишется");
