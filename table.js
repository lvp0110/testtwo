function start(){
    if(lenX,lenZ === 0){
        return false;
    } else{
const DATA_MATERIAL = {
    [nameConstr4(type_constr) +' , '+ ((lenX*lenZ)/1e6).toFixed(1) +' м2' ]:[
    ['Профиль ' + profileDepth(type_constr) +', ' + getNumProfilesPN(lenX,lenZ)*3 +' ' + 'мп',getNumProfilesPN(lenX,lenZ),'шт'],
    ['Профиль '+ profileDepthPs(type_constr) + ', ' + getNumProfilesPS(lenZ,lenX)*3+ ' ' + 'мп',getNumProfilesPS(lenX,lenZ),'шт'],
//  ],
// 'МАТЕРИАЛЫ':[
    ['Cаундлайн-dB ' + ', ' + ((lenX*lenZ)/1e6).toFixed(1) + ' ' + 'м2',getNumdB(lenX,lenZ),'шт'],
    ['Аku-Line ГКЛА Giproc'+ ', ' + ((lenX*lenZ)/1e6).toFixed(1) + ' ' + 'м2',getNumakuLain(lenX,lenZ),'шт'],
    ['Шуманет-Эко '+ ', ' + (getNumeco(lenX,lenZ)*3).toFixed(1) + ' ' + 'м2',Math.ceil(getNumeco(lenX,lenZ)*1),'упак'],
// ],
// 'ПЕРИМЕТР':[
    ['Вибросил '+', ' + Math.ceil((2*(lenX+lenZ))/1000) + ' ' + 'мп',Math.ceil(((lenX+lenZ)*2)/5000),'шт'],
    ['Вибростек-М-' + widtnVbrstR(type_constr) +', ' + ((4*(lenX+lenZ))/1000).toFixed(1) + ' ' + 'мп',getNumvbrstR(lenX,lenZ),'шт']
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