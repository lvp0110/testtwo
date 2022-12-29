function nameConstr2(type_constr){
   let nameConstr2 ;                        // тип направляющего профиля ;

      if(type_constr === 50){
         nameConstr2 = "Перегородка на каркасе 50/40";
      }
      else  if (type_constr === 75){
         nameConstr2 = "Перегородка на каркасе 75/40";
     } 
      else  if (type_constr === 100){
         nameConstr2 = "Перегородка на каркасе 100/40";
     } 
      else  if (type_constr === 101){
         nameConstr2 = "Перегородка на каркасе Wave";
     } 
    
     else{
      nameConstr2 = ",Не используется"
      }
      return nameConstr2;      
}


function profileDepth(type_constr){
    let profiledepth ;                        // тип направляющего профиля ;

       if(type_constr === 50){
           profiledepth = "ПН 50/40";
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

function getNumProfilesPN(lenX,lenZ){

      let profileN ;                               //кол-во профиля напрaвляющего
      let profileNdop ;                            //кол-во профиля напрaвляющего при высоте конструкции более 3 м

      if(lenZ <= 3000){
         return(profileN = Math.ceil((2*lenX)/3000));
      }
      else if(lenZ > 3000){
         return(profileNdop = Math.ceil(((lenX/600)+1)*connectingProfileLength(type_constr)/3000 + (2*lenX)/3000));  
      }
      
}
 
function getNumProfilesPS(lenZ,lenX){
      let profileS;                                 //кол-во стоечного профиля
      if(lenX === 0){
         profileS = "0";
     }  else{
      profileS = Math.ceil(lenZ*(lenX/600)/3000)+1;
     }
      return profileS;
}

function getNumvbrst(lenX,lenZ){
      let vbrst;                                     //вибростек,кол-во упак.
      let perimetr;
      let perimetr2;                                  //периметр конструкции
      perimetr = 4*(lenX+lenZ);             //начало расчета вибростек
      perimetr2 = 8*(lenX+lenZ);             //начало расчета вибростек
      if(type_constr === 50){                        //конец расчета вибростек
      return vbrst = Math.ceil(perimetr/30000);
      }else if(type_constr === 75){
      return vbrst = Math.ceil(perimetr/30000);
   
      }else if(type_constr === 100){
      return vbrst = Math.ceil(perimetr2/30000);
   
      }else if(type_constr === 101){
      return vbrst = Math.ceil(perimetr2/30000);
      }
}

function getNumakuLainS(lenX,lenZ){
      let akuLainS;                                   //гипсокартнон 2000*1200
      akuLainS = Math.ceil(((lenX*lenZ)/2.4)/1000000)*2;  //расчет гипсокартона
      return akuLainS;
}

function getNumdBS(lenX,lenZ){
      let dBs;                                           //саундлайн dB
      dBs = Math.ceil(((lenX*lenZ)/1.44)/1000000)*2;       //расчет гипсокартона
      return dBs;
}

function getNumecoP(lenX,lenZ){
   let eco1; 
      if(type_constr === 50){
      return eco1 = (lenX*lenZ/3)/1000000; 
      }
      else if(type_constr === 75){
         return eco1 = (lenX*lenZ/3)/1000000; 
      }
      else if(type_constr === 100){
         return eco1 = (lenX*lenZ/3)/1000000*2; 
      }
      else if (type_constr === 101){                                   //шуманет-эко
      return eco1 = (lenX*lenZ/3)/1000000*2;           //расчет гипсокартона 
      }  
}

function getNumvbrsil(lenZ,lenX){
      let vbrsil;                                     //вибросил
      vbrsil = Math.ceil(((lenX+lenZ)*2)/5000);         //расчет виброcил
      return vbrsil; 
}

function widtnVbrst(type_constr){
   let widtnVbrst ;                        

      if(type_constr === 50){
         widtnVbrst = "150";
      }
      else  if (type_constr === 75){
         widtnVbrst = "150";
     } 
      else  if (type_constr === 100){
         widtnVbrst = "100";
     } 
      else  if (type_constr === 101){
         widtnVbrst = "100";
     } 
     else{
      widtnVbrst = ",Не используется"
      }
      return widtnVbrst;      
}


// let select = document.querySelector('#select');





