


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

function getNumProfilesPN(lnX,lnZ){

      let profileN ;                               //кол-во профиля напрaвляющего
      let profileNdop ;                            //кол-во профиля напрaвляющего при высоте конструкции более 3 м

      if(lenZ <= 3000){
         return(profileN = Math.ceil((2*lenX)/3000));
      }
      else if(lenZ > 3000){
         return(profileNdop = Math.ceil((lenX/600)*connectingProfileLength(type_constr)/3000 + (2*lenX)/3000));  
      }
      
}

function getNumProfilesPS(lnZ,lnX){
      let profileS;                                 //кол-во стоечного профиля
      profileS = Math.ceil(lenZ*(lenX/600)/3000)+1; 
      return profileS;
}

function getNumvbrst(lnX,lnZ){
      let vbrst;                                     //вибростек,кол-во упак.
      let perimetr;                                  //периметр конструкции
      perimetr = Math.ceil(4*(lnX+lnZ));             //начало расчета вибростек
      if(type_constr === 50){                        //конец расчета вибростек
      return vbrst = Math.ceil(perimetr/30000);
      }else if(type_constr === 75){
      return vbrst = Math.ceil(perimetr/30000);
   
      }else if(type_constr === 100){
      return vbrst = Math.ceil(perimetr/30000)*2;
   
      }else if(type_constr === 101){
      return vbrst = Math.ceil(perimetr/30000)*2;
      }
}

function getNumakuLainS(lenX,lenZ){
      let akuLainS;                                   //гипсокартнон 2000*1200
      akuLainS = Math.ceil(((lenX*lenZ)/2.4)/1000000)*2;  //расчет гипсокартона
      return akuLainS;
}

function getNumdBS(lnX,lnZ){
      let dBs;                                           //саундлайн dB
      dBs = Math.ceil(((lnX*lnZ)/1.44)/1000000)*2;       //расчет гипсокартона
      return dBs;
}

function getNumecoP(lnX,lnZ){
   let eco1; 
      if(type_constr === 50){
      return eco1 = Math.ceil((lenX*lenZ/3)/1000000); 
      }
      else if(type_constr === 75){
         return eco1 = Math.ceil((lenX*lenZ/3)/1000000); 
      }
      else if(type_constr === 100){
         return eco1 = Math.ceil((lenX*lenZ/3)/1000000)*2; 
      }
      else if (type_constr === 101){                                   //шуманет-эко
      return eco1 = Math.ceil((lenX*lenZ/3)/1000000)*2;           //расчет гипсокартона 
      }  
}

function getNumvbrsil(lnZ,lnX){
      let vbrsil;                                     //вибросил
      vbrsil = Math.ceil(((lnX+lnZ)*2)/5000);         //расчет виброcил
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





