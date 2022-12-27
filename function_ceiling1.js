function nameConstr5(type_constr){
    let nameConstr5 ; 
     if(type_constr === 112){
        nameConstr5 = "Потолок на подвесах Виброфлекс-К15";
       }
       else{
        nameConstr5 = ",Не используется"
    }
    console.log(nameConstr5);
    return nameConstr5;      
}
function profileDepth5(type_constr){
    let profiledepth5 ; 
     if(type_constr === 112){
        profiledepth5 = "ППН 28/27";
       }
       else{
        profiledepth5 = ",Не используется"
    }
    console.log(profiledepth5);
    return profiledepth5;      
}
function profileDepth6(type_constr){
    let profiledepth6 ; 
     if(type_constr === 112){
        profiledepth6 = "ПП 60/27";
       }
       else{
        profiledepth6 = ",Не используется"
    }
    return profiledepth6;      
}
function getNumPProf(lenX,lenZ){                //профиль направляющтй 28/27
    let profPP = Math.ceil(((2*lenX)/3000)+((2*lenZ)/3000));
    return profPP;
}
function getNumProPS(lenZ,lenX){
    if(lenX === 0){
        profileS = "0";
    }else{    //кол-во стоечного профиля
    let a = Math.ceil(lenZ*(lenX/600)/3000)+1;
    let b = Math.ceil(lenX*(lenZ/400)/3000);
     profileS  = a + b;}
console.log(profileS);
return profileS;
}
function getNumvbrst6027(lnX,lnZ){
    let vbrstR;                                     //вибростек,кол-во упак.
    let perimetr;                                  //периметр конструкции
    perimetr = Math.ceil(4*(lnX+lnZ));             //начало расчета вибростек
    vbrstR = Math.ceil(perimetr/30000);             //конец расчета вибростек
    return vbrstR;
}

function vbrstHangingMount(lenX,lenZ){
    let hangingmount;
    let rows = Math.ceil((lenX-(baseShift*2))/600)+1;
    let c = Math.ceil((lenZ-(baseShift*2))/900)+1;
    hangingmount = c*rows;
    console.log(hangingmount);
    console.log(rows);
    console.log(c);
    return hangingmount;
}
function connectDuble(lenX,lenZ){
    let connectDuble;
    let e = Math.ceil((lenX-(baseShift*2))/600)+1;
    let f = Math.ceil(lenZ/400)-1;
    connectDuble = e*f;                                                         /*Math.ceil(((lenZ*(lenX/600)/3000)+1)*(lenZ/400));*/
    console.log(connectDuble);
    return connectDuble;
}
// function longPs(lenX,lenZ){
//     let longPsX; 
//     let longPsZ; 
//     if(lenX,lenZ <= 3000){
//         longPsX = 0;
//         longPsZ = 0;
//     }else{
//         longPsX = Math.ceil(lenZ*(lenX/600)/3000)+1;
//         longPsZ = Math.ceil(lenZ*(lenX/400)/3000);
//     }
//     let longPs = longPsX + longPsZ;
//     return longPs;
// }




//=if(copy=Copies,ps_v!LenZ-15,copy*ps_v!shag_podvesa+15)
