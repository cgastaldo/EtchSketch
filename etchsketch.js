const body = document.body;
body.id ='id';

const sizeBtn = document.createElement('button');
sizeBtn.id = 'gridBtn';
sizeBtn.innerText='Grid Size';
body.append(sizeBtn);

window.onload=function(){
    const sizeBtn = document.getElementById('gridBtn');
    sizeBtn.onclick = function(){
        let size = prompt('Enter the number of rows and columns you want (100 max)');
        if (size > 100){
            alert('Must select value lower than 100')
            return
        }
        //removes current Divs
        elementArray = document.getElementsByClassName('block');
        elementArray = [].slice.call(elementArray,0);
        for(i=0; i<elementArray.length; i++){
            elementArray[i].remove();
        }
        createGrid(size);
        }
}

const gridDiv = document.createElement('div');
gridDiv.id = 'grid';
body.append(gridDiv)

function getBlockSize(gridSize){
    return 600/gridSize;
}

function setColor(){
    this.style.backgroundColor = 'rgb(15, 150, 150)';
}

function createGrid(gridSize){
    let columns = rows = gridSize;
    blockSize = getBlockSize(rows);
    console.log(blockSize)
    for (i=0; i<rows*columns; i++){
        let blockDiv = document.createElement('div');
        blockDiv.className = 'block';
        blockDiv.style.backgroundColor = 'black';
        blockDiv.style.height = String(blockSize) + 'px';
        blockDiv.style.width = String(blockSize) + 'px';
        gridDiv.append(blockDiv);
        blockDiv.addEventListener('mouseover', setColor);
    }
}

createGrid(16)