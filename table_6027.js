//вывод данных на экран(таблица)


function start1(){
const DATA_MATERIAL = {
    'ПРОФИЛЬ':[
    ['Профиль  ' + profileDepth1(type_constr) + ', ' + getNumPProf(lenX,lenZ)*3 + ' ' + 'мп',getNumPProf(lenX,lenZ),'шт'],
    ['Профиль  '+ profileDepth2(type_constr) + ', ' + Math.ceil(lenZ*(lenX/600)/1000) + ' ' + 'мп',getNumProfilesPS(lenZ),'шт'],
    ['Подвес Виброфлекс  '+ ', ' + Math.ceil((getNumProfilesPS(lenX,lenZ)*((lenZ)/1000)))/*Math.ceil(((lenZ/900)*(lenX/600)+1))*/ + ' ' + 'шт',Math.ceil((getNumProfilesPS(lenX,lenZ)*((lenZ)/1000))),'шт']
 ],
'МАТЕРИАЛЫ':[
    ['Cаундлайн dB ' + ', ' + Math.ceil(lenX*lenZ)/1000000 + ' ' + 'м2',getNumdB(lenX,lenZ),'шт'],
    ['АкуЛайн '+ ', ' + Math.ceil(lenX*lenZ)/1000000 + ' ' + 'м2',getNumakuLain(lenX,lenZ),'шт'],
    ['Шуманет-Эко '+ ', ' + Math.ceil(lenX*lenZ)/1000000 + ' ' + 'м2',getNumeco(lenX,lenZ),'упак']
],
'ПЕРИМЕТР':[
    ['Вибросил '+', ' + Math.ceil(2*(lenX+lenZ))/1000 + ' ' + 'мп',getNumvbrsil(lenX,lenX),'шт'],
    ['Вибростек-М 100 ' +', ' + Math.ceil(4*(lenX+lenZ))/1000 + ' ' + 'мп',getNumvbrst6027(lenX,lenX),'шт']
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
};