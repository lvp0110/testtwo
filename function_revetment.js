// lenX = Number(prompt('введите значение длины в мм'));//ввод данных размеров
// lenZ = Number(prompt('введите значение высоты в мм'));//ввод данных размеров
// type_constr = Number(prompt('тип конструкции'));
/**************************************************************************** */
function nameConstr4(type_constr){
    let nameConstr4 ;                        // тип направляющего профиля ;

       if(type_constr === 50){
        nameConstr4 = "Облицовка на каркасе 50/40" ;
       }
       else  if (type_constr === 75){
        nameConstr4 = "Облицовка на каркасе 75/40";
      } 
       else  if (type_constr === 100){
        nameConstr4 = "Облицовка на каркасе 100/40";
      } 
       else  if (type_constr === 101){
        nameConstr4 = "Облицовка на каркасе 100/40";
      } 
     
      else{
        nameConstr4 = ",Не используется"
       }
       return nameConstr4;      
}

function profileDepth(type_constr){
     let profiledepth ;                        // тип направляющего профиля ;

        if(type_constr === 50){
                profiledepth = "ПН 50/40" ;
        }
        else  if (type_constr === 75){
            profiledepth = "ПН 75/40";
       } 
        else  if (type_constr === 100){
            profiledepth = "ПН 100/40";
       } 
        else  if (type_constr === 101){
            profiledepth = "ПН 100/40";
       } 
      
       else{
            profiledepth = ",Не используется"
        }
        return profiledepth;      
}

function profileDepthPs(type_constr){            // вид стоечного профиля;

    let profiledepthPs ; 
    if(type_constr === 50){
        profiledepthPs = "ПC 50/50" ;
}
else  if (type_constr === 75){
    profiledepthPs = "ПC 75/50";
} 
else  if (type_constr === 100){
    profiledepthPs = "ПC 100/50";
} 
else  if (type_constr === 101){
    profiledepthPs = "Wave";
} 

else{
    profiledepthPs = ",Не используется"
}
    return profiledepthPs;      

}

function connectingProfileLength(type_constr){  // длина соединительного профиля;

        if(type_constr === 50){
                return 1000 ;
        }
        else  if (type_constr === 75){
            return 1500;
        } 
        else  if (type_constr === 100){
            return  2000;
        } 
        else  if(type_constr === 101){
            return 1;
        } 
}

function getNumProfilesPN(lnX,lnZ){

    let profileN ;                               //кол-во профиля напрaвляющего
    let profileNdop ;                            //кол-во профиля напрaвляющего при высоте конструкции более 3 м

    if(lenZ <= 3000){
        return(profileN = Math.ceil((2*lenX)/3000));
    }
    else if(lenZ > 3000){
       return(profileNdop = Math.ceil(((lenX/600)+1)*connectingProfileLength(type_constr)/3000 + (2*lenX)/3000));  
    }
    
}

function getNumProfilesPS(lnZ,lnX){
    let profileS;                                 //кол-во стоечного профиля
    profileS = Math.ceil(lenZ*(lenX/600)/3000)+1; 
    return profileS;
}

function getNumvbrstR(lnX,lnZ){
    let vbrstR;                                     //вибростек,кол-во упак.
    let perimetr;                                  //периметр конструкции
    perimetr = Math.ceil(4*(lnX+lnZ));             //начало расчета вибростек
    vbrstR = Math.ceil(perimetr/30000);             //конец расчета вибростек
    return vbrstR;
}

function getNumakuLain(lnX,lnZ){
    let akuLain;                                   //гипсокартнон 2000*1200
    akuLain = Math.ceil(((lnX*lnZ)/2.4)/1000000);  //расчет гипсокартона
    return akuLain;
}

function getNumdB(lnX,lnZ){
    let dB;                                         //саундлайн dB
    dB = Math.ceil(((lnX*lnZ)/1.44)/1000000);       //расчет гипсокартона
    return dB;
}

function getNumeco(lnX,lnZ){
    if(type_constr === 50){
        return eco = Math.ceil((lenX*lenZ/3)/1000000); 
        }
        else if(type_constr === 75){
           return eco = Math.ceil((lenX*lenZ/3)/1000000); 
        }
        else if(type_constr === 100){
           return eco = Math.ceil((lenX*lenZ/3)/1000000)*2; 
        }
       
}
 
function getNumvbrsil(lnZ,lnX){
    let vbrsil;                                     //вибросил
    vbrsil = Math.ceil(((lnX+lnZ)*2)/5000);         //расчет виброил
    return vbrsil; 
}

function widtnVbrstR(type_constr){
    let widtnVbrst ;                        
 
       if(type_constr === 50){
          widtnVbrst = "100";
       }
       else  if (type_constr === 75){
          widtnVbrst = "150";
      } 
       else  if (type_constr === 100){
          widtnVbrst = "150";
      } 
       else  if (type_constr === 101){
          widtnVbrst = "150";
      } 
    
       return widtnVbrst;      
 }


let select = document.querySelector('#select');

// function outputOnDisplay() {

// document.write(`ТИП КОНСТРУКЦИИ: `+ profileDepth(type_constr) +` `+`<br>`);//вывод данных на экран(текст)
// document.write(`РАЗМЕР КОНСТРУКЦИИ: `+ lenX +`x`+ lenZ +' '+'мм'+`<br>`);
// document.write(`ПЛОЩАДЬ КОНСТРУКЦИИ: `+ (lenX * lenZ)/1000000 +' '+'м2'+`<br>`);
// document.write(`ПЕРИМЕТР КОНСТРУКЦИИ: `+ (((lenX + lenZ)*2)/1000) + ' '+'мп'+`<br>`);
// }
// outputOnDisplay();



