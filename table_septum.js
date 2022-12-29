function start2(){
    if(lenX,lenZ === 0){
        return false;
    } else{
    const DATA_MATERIAL = {
        [nameConstr2(type_constr)+' , '+ ((lenX*lenZ)/1e6).toFixed(1) +' м2']:[
        ['Профиль ' + profileDepth(type_constr) +', ' + getNumProfilesPN(lenX,lenZ)*3 +' ' + 'мп',getNumProfilesPN(lenX,lenZ),'шт'],
        ['Профиль '+ profileDepthPs(type_constr) + ', ' + getNumProfilesPS(lenZ,lenX)*3 + ' ' + 'мп',getNumProfilesPS(lenX,lenZ),'шт'],
    //  ],
    // 'МАТЕРИАЛЫ':[
        ['Cаундлайн-dB ' + ', ' + ((lenX*lenZ)/1000000*2).toFixed(1) + ' ' + 'м2',getNumdBS(lenX,lenZ),'шт'],
        ['Аku-Line ГКЛА Giproc '+ ', ' + ((lenX*lenZ)/1000000*2).toFixed(1) + ' ' + 'м2',getNumakuLainS(lenX,lenZ),'шт'],
        ['Шуманет-Эко '+ ', ' + (getNumecoP(lenX,lenZ)*3).toFixed(1) + ' ' + 'м2',Math.ceil(getNumecoP(lenX,lenZ)*1),'упак'],
    // ],
    // 'ПЕРИМЕТР':[
        ['Вибросил '+', ' + ((4*(lenX+lenZ))/1000).toFixed(1) + ' ' + 'мп',Math.ceil(((lenX+lenZ)*2)/5000)*2,'шт'],
        ['Вибростек-М-'+ widtnVbrst(type_constr) ,getNumvbrst(lenX,lenZ),'шт']
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