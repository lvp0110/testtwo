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

function getNumPProf(lenX,lenZ){                //профиль направляющтй 28/27
    let profPP = Math.ceil((2*lenX)/3000);
    return profPP;
}

function getNumProfilesPS(lnZ,lnX){
    let profileS;                                 //кол-во стоечного профиля
    profileS = Math.ceil(lenZ*(lenX/600)/3000)+1; 
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
    hangingmount = Math.ceil(getNumProfilesPS(lenX,lenZ)*(lenZ/900));
    console.log(hangingmount);
    return hangingmount;
}

//=if(copy=Copies,ps_v!LenZ-15,copy*ps_v!shag_podvesa+15)
