function nameConstr10(type_constr){
    let nameConstr9 ; 
     if(type_constr === 203){
        nameConstr9 = "Пол C2K2(2 слоя)";
       }
     else{
        nameConstr9 = ",Не используется"
    }
    console.log(nameConstr9);
    return nameConstr9;      
}
function materialC22(type_constr){
    let materialC2 ; 
     if(type_constr === 203){
        materialC2 = "C2";
       }
       else{
        materialC2 = ",Не используется"
    }
    return materialC2;
}
function materialK22(type_constr){
    let materialK2 ; 
     if(type_constr === 203){
        materialK2 = "K2";
       }
       else{
        materialK2 = ",Не используется"
    }
    return materialK2;
}
function getNumС22(lenX,lenZ){
    let c2 ;
    k2L = Math.ceil(((lenX+lenZ)*2)*300)/1e6;
    k2L2 = Math.ceil(((lenX+lenZ)*2)*250)/1e6;  
    c21 = Math.ceil(lenX*lenZ)/1e6-k2L;
    c22 = Math.ceil(lenX*lenZ)/1e6-k2L2;
    c2 = Math.ceil((c21+c22)/7,2);
    return c2;
}
function getNumK22(lenX,lenZ){
    let k2;                                  
    let k2P;  
    let k2L; 
    let k2L2; 
     k2P = Math.ceil(((lenX+lenZ)*2)*100)/1e6;  
     k2L = Math.ceil(((lenX+lenZ)*2)*300)/1e6;  
     k2L2 = Math.ceil(((lenX+lenZ)*2)*250)/1e6;  
     k2 = Math.ceil((k2L+k2P+k2L2)/3,6);
   
    return k2;
}
 
