function nameConstr(type_constr){
    let nameConstr ; 
     if(type_constr === 111){
        nameConstr = "Потолок  Виброфлекс-КоннектПП";
       }
       else{
        nameConstr = ",Не используется"
    }
    console.log(nameConstr);
    return nameConstr;      
}
function profileDepth3(type_constr){
    let profiledepth3 ; 
     if(type_constr === 111){
        profiledepth3 = "ППН 28/27";
       }
       else{
        profiledepth3 = ",Не используется"
    }
    console.log(profiledepth3);
    return profiledepth3;      
}
function profileDepth4(type_constr){
    let profiledepth4 ; 
     if(type_constr === 111){
        profiledepth4 = "ПП 60/27";
       }
       else{
        profiledepth4 = ",Не используется"
    }
    return profiledepth4;      
}
function getNumPProf(lenX,lenZ){                //профиль направляющтй 28/27
    let profPP = Math.ceil(((2*lenX)/3000)+((2*lenZ)/3000));
    return profPP;
}
function getNumProPS(lenX,lenZ){
    let profileS;
    if(lenX === 0){
        profileS = "0";
    }else{                                 //кол-во стоечного профиля
        let a = Math.ceil(lenZ*(lenX/600)/3000)+1;
        let b = Math.ceil(lenZ*(lenX/400)/3000);
        profileS  = a + b;
    }
    console.log(profileS);
    return profileS;
}
function getNumvbrst6027(lenX,lenZ){
    let vbrstR;                                     //вибростек,кол-во упак.
    let perimetr;                                  //периметр конструкции
    perimetr = Math.ceil(4*(lenX+lenZ));             //начало расчета вибростек
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
    let e = ((lenZ-150)*(lenX/600)/3000)+1;
    let f = lenZ*e;
    connectDuble = Math.ceil(f/400);                                                       
    console.log(connectDuble);
    return connectDuble;
}

function longPs(lenX,lenZ){
    let longVertical; 
    let longHorizontal;
    let rowsX = Math.ceil((lenX-baseShift*2)/PROFILE_STEP)+1;
    let rowsZ = Math.ceil((lenZ-PROFILE_STEP_HORIZONT)/PROFILE_STEP_HORIZONT); 
   
    if(lenX <= MID_HEIGHT &lenZ > MID_HEIGHT){
        longHorizontal = 0;
        longVertical = Math.floor(lenZ/LONG_STEP)*rowsX;
        return longHorizontal + longVertical;
    }else if(lenZ <= MID_HEIGHT &lenX > MID_HEIGHT){
        longVertical = 0;
        longHorizontal = Math.floor(lenX/LONG_STEP)*rowsZ;
        return longHorizontal + longVertical;

    }else if(lenX <= MID_HEIGHT &lenZ <= MID_HEIGHT){
        longHorizontal = 0;
        longVertical = 0;
        return longHorizontal + longVertical;

    } else{
        longVertical = Math.floor(lenZ/LONG_STEP)*rowsX;
        longHorizontal = Math.floor(lenX/LONG_STEP)*rowsZ;
        return longHorizontal + longVertical;

    }
} 





//=if(copy=Copies,ps_v!LenZ-15,copy*ps_v!shag_podvesa+15)
//=if(copy=Copies,lenZ-15,c*900+15)
