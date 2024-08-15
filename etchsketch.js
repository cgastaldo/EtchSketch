const body = document.body;
body.id ='grid';

function combine(str1, str2){
    return str1.concat(str2);
}

function setColor(){
    this.setAttribute('style', 'background-color:rgb(15, 150, 150);')
}

let hoverDiv = document.querySelectorAll(".columns");
let c=1;

for (i=0; i<16; i++){
    let parentDiv = combine('div',c+i);
    parentDiv = document.createElement('div');
    parentDiv.className = 'rows';
    body.appendChild(parentDiv);
    for (j=0; j<16; j++){
        let childDiv = parentDiv + String(j);
        childDiv = document.createElement('div');
        childDiv.className ='columns';
        parentDiv.appendChild(childDiv);

        childDiv.addEventListener('mouseover', setColor);
    }
}







function fillSquares(){
    let hoverDiv = document.querySelectorAll(".columns");
    hoverDiv.addEventListener('mouseover', ()=>{
    hoverDiv.style.backgroundColor='blue';
    console.log(hoverDiv);
    })
}


