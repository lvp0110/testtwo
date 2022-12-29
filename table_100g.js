function start5(){
    if(lenX,lenZ === 0){
        return false;
    } else{
const DATA_MATERIAL = {
    [nameConstr6(type_constr)+' , '+ ((lenX*lenZ)/1e6).toFixed(1) +' м2']:[
    [ materialGidro(type_constr)  ,getNum100g(lenX,lenZ),'шт'],
    ['Вибросил '+', ' + Math.ceil((2*(lenX+lenZ))/1000) + ' ' + 'мп',getNumvbrsil(lenX,lenX),'шт']
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