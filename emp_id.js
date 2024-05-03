let idArr =[];
let nameArr =[];
let ageArr =[];
let cityArr =[];

function addData(){
    let id=document.getElementById('ids').value;
    let name=document.getElementById('names').value;
    let age=document.getElementById('ages').value;
    let city=document.getElementById('cities').value;

    idArr.push(id);
    nameArr.push(name);
    ageArr.push(age);
    cityArr.push(city);

    console.log(idArr);
    console.log(nameArr);
    console.log(ageArr);
    console.log(cityArr);

}
function editData(){
    let id=document.getElementById('ids').value;
    let find_index=idArr.indexOf(id);

    let name=document.getElementById('names').value;
    let age=document.getElementById('ages').value;
    let city=document.getElementById('cities').value;

    nameArr.splice(find_index,1,name);
    ageArr.splice(find_index,1,age);
    cityArr.splice(find_index,1,city);

}
function delData(){
    let idToDel=document.getElementById('ids').value;
   
    let ind=idArr.indexOf(idToDel);
    if(ind!=0){
        
    idArr.splice(ind,1);
    nameArr.splice(ind,1);
    ageArr.splice(ind,1);
    cityArr.splice(ind,1);

    }
    
}

function showTable(){
    let str=`<tr>
    <th>Id</th>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
    </tr>`
    let my_table=document.getElementById('table_data');
    for(let i in idArr){
        str+=`<tr><td>${idArr[i]}</td><td>${nameArr[i]}</td><td>${ageArr[i]}</td><td>${cityArr[i]}</td></tr>`
    }
    my_table.innerHTML=str;
}