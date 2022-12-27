function nameConstr6(type_constr){
    let nameConstr6 ; 
     if(type_constr === 200){
        nameConstr6 = "Пол Шуманет-100Гидро";
       }
     else{
        nameConstr6 = ",Не используется"
    }
    console.log(nameConstr6);
    return nameConstr6;      
}
function materialGidro(type_constr){
    let materialGidro ; 
     if(type_constr === 200){
        materialGidro = "Шуманет-100Гидро";
       }
       else{
        materialGidro = ",Не используется"
    }
    return materialGidro;
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

