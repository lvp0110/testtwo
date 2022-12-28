function nameConstr9(type_constr){
    let nameConstr9 ; 
     if(type_constr === 202){
        nameConstr9 = "Пол C2K2(1 слой)";
       }
     else{
        nameConstr9 = ",Не используется"
    }
    console.log(nameConstr9);
    return nameConstr9;      
}
function materialC2(type_constr){
    let materialC2 ; 
     if(type_constr === 202){
        materialC2 = "Шумостоп-C2";
       }
       else{
        materialC2 = ",Не используется"
    }
    return materialC2;
}
function materialK2(type_constr){
    let materialK2 ; 
     if(type_constr === 202){
        materialK2 = "Шумостоп-K2";
       }
       else{
        materialK2 = ",Не используется"
    }
    return materialK2;
}
function getNumС2(lenX,lenZ){
    let c2 ;
    k2L = Math.ceil(((lenX+lenZ)*2)*300)/1e6;  
    c2 = Math.ceil(((lenX*lenZ)/1e6-k2L)/7,2);
   
    return c2;
}
function getNumK2(lenX,lenZ){
    let k2;                                  
    let k2P;  
    let k2L;  
     k2P = Math.ceil(((lenX+lenZ)*2)*100)/1e6;  
     k2L = Math.ceil(((lenX+lenZ)*2)*300)/1e6;  
     k2 = Math.ceil((k2L+k2P)/3,6);
   
    return k2;
}
 
