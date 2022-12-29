function nameConstr1(type_constr){
    let nameConstr1 ; 
     if(type_constr === 102){
        nameConstr1 = "Облицовка на каркасе 60/27";
       }
       else{
        nameConstr1 = ",Не используется"
    }
    console.log(nameConstr1);
    return nameConstr1;      
}
function profileDepth1(type_constr){
    let profiledepth1 ; 
     if(type_constr === 102){
        profiledepth1 = "ППН 28/27";
       }
       else{
        profiledepth1 = ",Не используется"
    }
    return profiledepth1;      
}
function profileDepth2(type_constr){
    let profiledepth2 ; 
     if(type_constr === 102){
        profiledepth2 = "ПП 60/27";
       }
       else{
        profiledepth2 = ",Не используется"
    }
    return profiledepth2;      
}
function getEco(lenX,lenZ){
    let eco60;
    eco60 = Math.ceil((lenX*lenZ/3)/1000000); 
    return eco60;
}
function getNumPProf1(lenX,lenZ){                //профиль направляющтй 28/27
    let profPP = Math.ceil((2*lenX)/3000);
    return profPP;
}
function getNumProfilesPS1(lnZ,lnX){
    let profileS;
    if(lenX === 0){
        profileS = "0";
    } 
    else                                //кол-во стоечного профиля
    {profileS = Math.ceil((lenZ*(lenX/600)/3000)+1);} 
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


function vbrstHangingMount1(lenX,lenZ){
    let hangingmount;
    let rows1 = Math.ceil(lenX/PROFILE_STEP)+1;
    let c1;
    if(lenZ <= MID_HEIGHT){
        c1 = MIN_HANG_PER_PROF; 
        hangingmount = c1*rows1;
        return hangingmount;
    }else{
        c1 = Math.ceil((lenZ-(baseShift*2))/MAX_HANG_STEP)+1;
        hangingmount = c1*rows1;
        console.log(hangingmount);
        return hangingmount;
    }
}
 
//=if(copy=Copies,ps_v!LenZ-15,copy*ps_v!shag_podvesa+15)
