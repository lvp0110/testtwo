function start3(){
    if(lenX,lenZ === 0){
        return false;
    } else{
const DATA_MATERIAL = {
    [nameConstr(type_constr)+' , '+ ((lenX*lenZ)/1e6).toFixed(1) +' м2']:[
    ['Профиль  ' + profileDepth3(type_constr) + ', ' + getNumPProf(lenX,lenZ)*3 + ' ' + 'мп',getNumPProf(lenX,lenZ),'шт'],
    ['Профиль  '+ profileDepth4(type_constr) + ', ' + getNumProPS(lenX,lenZ)*3 + ' ' + 'мп',getNumProPS(lenX,lenZ),'шт'],
    ['Виброфлекс-Коннект ПП',vbrstHangingMount(lenX,lenZ),'шт'],
    ['Соединитель ПП 27х60  ',connectDuble(lenX,lenZ),'шт'],
    ['Удлинитель ПП 60х27 ',longPs(lenX,lenZ),'шт'],
    ['Cаундлайн-dB ' + ', ' + ((lenX*lenZ)/1000000).toFixed(1) + ' ' + 'м2',getNumdB(lenX,lenZ),'шт'],
    ['Аku-Line ГКЛА Giproc '+ ', ' + ((lenX*lenZ)/1000000).toFixed(1) + ' ' + 'м2',getNumakuLain(lenX,lenZ),'шт'],
    ['Шуманет-Эко '+ ', ' + ((lenX*lenZ)/1000000).toFixed(1) + ' ' + 'м2',getEco(lenX,lenZ),'упак'],
    ['Вибросил '+', ' + ((2*(lenX+lenZ))/1000).toFixed(1) + ' ' + 'мп',Math.ceil(((lenX+lenZ)*2)/5000),'шт'],
    ['Вибростек-М-100 ' +', ' + ((4*(lenX+lenZ))/1000).toFixed(1) + ' ' + 'мп',Math.ceil((4*(lenX+lenZ))/30000),'шт']
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
    <td>${DATA_MATERIAL[key][i][2]}</td>
    `  
    document.querySelector('.data').appendChild(row)
    console.log(row);
}
}
}
};