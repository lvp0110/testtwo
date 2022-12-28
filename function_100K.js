function nameConstr7(type_constr){
    let nameConstr6 ; 
     if(type_constr === 2001){
        nameConstr6 = "Пол Шуманет100-Комби";
       }
     else{
        nameConstr6 = ",Не используется"
    }
    console.log(nameConstr6);
    return nameConstr6;      
}
function materialKomby(type_constr){
    let materialKomby ; 
     if(type_constr === 2001){
        materialKomby = "Шуманет100-Комби";
       }
       else{
        materialKomby = ",Не используется"
    }
    return materialKomby;
}
function getNum100g(lenX,lenZ){
    let gidro ;                                  
    let gL;  
    let gN;  
    let gP; 
     gL = Math.ceil(lenX*lenZ)/1e6;  
     gN = Math.ceil(((lenX/1000)*100)*lenX)/1e6;  
     gP = Math.ceil(((lenX+lenZ)*2)*100)/1e6; 
     gidro = Math.ceil((gL + gN + gP)/10);
   
    return gidro;
}

