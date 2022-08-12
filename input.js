
let button1 = document.getElementById("revetment50");    //кнопка ввода размеров
button1.addEventListener("click",function(){
   lenX = Number(document.getElementById('lenX').value);
   lenZ = Number(document.getElementById('lenZ').value); 
   type_constr = 50;
   start();                                              //запуск таблицы table.js
});
let button2 = document.getElementById("revetment75");
button2.addEventListener("click",function(){
   lenX = Number(document.getElementById('lenX').value);
   lenZ = Number(document.getElementById('lenZ').value); 
   type_constr = 75;
   start();
});
let button3 = document.getElementById("revetment100");
button3.addEventListener("click",function(){
   lenX = Number(document.getElementById('lenX').value);
   lenZ = Number(document.getElementById('lenZ').value); 
   type_constr = 100;
   start();
});
let button4 = document.getElementById("revetment-wave");
button4.addEventListener("click",function(){
   lenX = Number(document.getElementById('lenX').value);
   lenZ = Number(document.getElementById('lenZ').value); 
   type_constr = 101;
   start();
});

let button5 = document.getElementById("revetment-6027");
button5.addEventListener("click",function(){
   lenX = Number(document.getElementById('lenX').value);
   lenZ = Number(document.getElementById('lenZ').value); 
   type_constr = 102;
   start1();
});

let button6 = document.getElementById("septum50");    
button6.addEventListener("click",function(){
   lenX = Number(document.getElementById('lenX').value);
   lenZ = Number(document.getElementById('lenZ').value); 
   type_constr = 50;
   start2();                                              
});
let button7 = document.getElementById("septum75");
button7.addEventListener("click",function(){
   lenX = Number(document.getElementById('lenX').value);
   lenZ = Number(document.getElementById('lenZ').value); 
   type_constr = 75;
   start2();
});
let button8 = document.getElementById("septum100");
button8.addEventListener("click",function(){
   lenX = Number(document.getElementById('lenX').value);
   lenZ = Number(document.getElementById('lenZ').value); 
   type_constr = 100;
   start2();
});
let button9 = document.getElementById("septum-wave");
button9.addEventListener("click",function(){
   lenX = Number(document.getElementById('lenX').value);
   lenZ = Number(document.getElementById('lenZ').value); 
   type_constr = 101;
   start2();
});
