//вывод данных на экран(таблица)
function start(){
const DATA_MATERIAL = {
    'ПРОФИЛЬ':[
    ['Профиль ' + profileDepth(type_constr) +', ' + getNumProfilesPN(lenX)*3 +' ' + 'мп',getNumProfilesPN(lenX),'шт'],
    ['Профиль '+ profileDepthPs(type_constr) + ', ' + Math.ceil(lenZ*(lenX/600)/1000) + ' ' + 'мп',getNumProfilesPS(lenZ),'шт'],
 ],
'МАТЕРИАЛЫ':[
    ['Cаундлайн dB ' + ', ' + Math.ceil(lenX*lenZ)/1000000 + ' ' + 'м2',getNumdB(lenX,lenZ),'шт'],
    ['АкуЛайн '+ ', ' + Math.ceil(lenX*lenZ)/1000000 + ' ' + 'м2',getNumakuLain(lenX,lenZ),'шт'],
    ['Шуманет-Эко '+ ', ' + Math.ceil(lenX*lenZ)/1000000 + ' ' + 'м2',getNumeco(lenX,lenZ),'упак']
],
'ПЕРИМЕТР':[
    ['Вибросил '+', ' + Math.ceil(2*(lenX+lenZ))/1000 + ' ' + 'мп',getNumvbrsil(lenX,lenX),'шт'],
    ['Вибростек-М  ' + widtnVbrstR(type_constr) +', ' + Math.ceil(4*(lenX+lenZ))/1000 + ' ' + 'мп',getNumvbrstR(lenX,lenX),'шт']
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
};