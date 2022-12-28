function start2(){
    if(lenX,lenZ === 0){
        return false;
    } else{
    const DATA_MATERIAL = {
        [nameConstr2(type_constr)]:[
        ['Профиль ' + profileDepth(type_constr) +', ' + getNumProfilesPN(lenX)*3 +' ' + 'мп',getNumProfilesPN(lenX),'шт'],
        ['Профиль '+ profileDepthPs(type_constr) + ', ' + Math.ceil(lenZ*(lenX/600)/1000) + ' ' + 'мп',getNumProfilesPS(lenZ),'шт'],
    //  ],
    // 'МАТЕРИАЛЫ':[
        ['Cаундлайн-dB ' + ', ' + (lenX*lenZ)/1000000*2 + ' ' + 'м2',getNumdBS(lenX,lenZ),'шт'],
        ['Аku-Line ГКЛА Giproc '+ ', ' + (lenX*lenZ)/1000000*2 + ' ' + 'м2',getNumakuLainS(lenX,lenZ),'шт'],
        ['Шуманет-Эко '+ ', ' + getNumecoP(lenX,lenZ)*3 + ' ' + 'м2',getNumecoP(lenX,lenZ),'упак'],
    // ],
    // 'ПЕРИМЕТР':[
        ['Вибросил '+', ' + Math.ceil(4*(lenX+lenZ))/1000 + ' ' + 'мп',getNumvbrsil(lenX,lenX)*2,'шт'],
        ['Вибростек-М-'+ widtnVbrst(type_constr) +', ' + getNumvbrst(lenX,lenX)*((lenX+lenX)*2)/1000 + ' ' + 'мп',getNumvbrst(lenX,lenX),'шт']
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