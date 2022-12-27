function nameConstr8(type_constr){
    let nameConstr8 ; 
     if(type_constr === 201){
        nameConstr8 = "Пол Шумопласт";
       }
     else{
        nameConstr8 = ",Не используется"
    }
    console.log(nameConstr8);
    return nameConstr8;      
}
function materialSplast(type_constr){
    let materialSplast ; 
     if(type_constr === 201){
        materialSplast = "Шумопласт";
       }
       else{
        materialSplast = ",Не используется"
    }
    return materialSplast;
}
function getNumSplast(lenX,lenZ){
    let Splast ;                                  
    let SplastL;  
    let SplastP;  
     
     SplastL = Math.ceil(lenX*lenZ)/1e6;  
     SplastP = Math.ceil((((lenX+lenZ*2))*100))/1e6;  
     Splast = Math.ceil((SplastL + SplastP )/10);
   console.log(SplastP);
   console.log(SplastL);
   console.log(Splast);
    return Splast;
}

