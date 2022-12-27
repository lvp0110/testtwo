function start9(){
    if(lenX,lenZ === 0){
        return false;
    } else{
const DATA_MATERIAL = {
    [nameConstr10(type_constr)]:[
    [ materialC22(type_constr)  ,getNumС22(lenX,lenZ),'упак'],
    [ materialK22(type_constr)  ,getNumK22(lenX,lenZ),'упак'],
    ['Вибросил ',getNumvbrsil(lenX,lenX)*2,'шт']
    // ['Вибростек-М  ' + widtnVbrstR(type_constr) +', ' + Math.ceil(4*(lenX+lenZ))/1000 + ' ' + 'мп',getNumvbrstR(lenX,lenX),'шт']
]
}
document.querySelector('.content').innerHTML = `<table class="data"></table>`
for(key in DATA_MATERIAL){
    let row = document.createElement('tr')
    row.innerHTML = `<td colspan="3">${key}</td>` 
    document.querySelector('.data').appendChild(row)
console.log(row);
    for(let i=0; i<DATA_MATERIAL[key].length; i++) {
        let row = document.createElement('tr')
        row.innerHTML = `
        <td>${DATA_MATERIAL[key][i][0]}</td>
        <td>${DATA_MATERIAL[key][i][1]}</td>
        <td>${DATA_MATERIAL[key][i][2]}</td>`
        
    document.querySelector('.data').appendChild(row)
    console.log(row);
}
}
}
}; 