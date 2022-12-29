function start1(){
    if(lenX,lenZ === 0){
        return false;
    } else{
const DATA_MATERIAL = {
    [nameConstr1(type_constr)+' , '+ ((lenX*lenZ)/1e6).toFixed(1) +' м2']:[
    ['Профиль  ' + profileDepth1(type_constr) + ', ' + getNumPProf1(lenX,lenZ)*3 + ' ' + 'мп',getNumPProf1(lenX,lenZ),'шт'],
    ['Профиль  '+ profileDepth2(type_constr) + ', ' + getNumProfilesPS1(lenX,lenZ)*3 + ' ' + 'мп',getNumProfilesPS1(lenZ),'шт'],
    ['Виброфлекс-КС '+ ', ' + vbrstHangingMount1(lenX,lenZ)/*Math.ceil(((lenZ/900)*(lenX/600)+1))*/ + ' ' + 'шт',vbrstHangingMount1(lenX,lenZ),'шт'],

    ['Cаундлайн-dB ' + ', ' + ((lenX*lenZ)/1000000 ).toFixed(1) + ' ' + 'м2',getNumdB(lenX,lenZ),'шт'],
    ['Аku-Line ГКЛА Giproc '+ ', ' + ((lenX*lenZ)/1000000).toFixed(1) + ' ' + 'м2',getNumakuLain(lenX,lenZ),'шт'],
    ['Шуманет-Эко '+ ', ' + ((lenX*lenZ)/1000000).toFixed(1) + ' ' + 'м2',getEco(lenX,lenZ),'упак'],

    ['Вибросил '+', ' + Math.ceil((2*(lenX+lenZ))/1000 )+ ' ' + 'мп',Math.ceil(((lenX+lenZ)*2)/5000),'шт'],
    ['Вибростек-М-100 ' +', ' + ((4*(lenX+lenZ))/1000).toFixed(1) + ' ' + 'мп',getNumvbrstR(lenX,lenZ),'шт']
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