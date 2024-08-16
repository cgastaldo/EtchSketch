const body = document.body;
body.id ='grid';

function combine(str1, str2){
    return str1.concat(str2);
}
/*
function setColor(blockSize){
    this.setAttribute('style', 'width:' + String(blockSize) +
                'px;' + 'height:' + String(blockSize) + 'px;' +
                'margin:1px; background-color:rgb(15, 150, 150);')
}

function setStyle(size, bgColor){
    if (bgColor === undefined){
        bgColor = black;
    }
    this.setAttribute('style', 'width:' + String(size) +
                'px;' + 'height:' + String(size) + 'px;' +
                'margin:1px; background-color:' + bgColor + ';')
}
*/

//New Grid Button
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
        block = getblockSize(size);
        createGrid(size, block);
    }
}

function getblockSize(gridSize){
    return 680/gridSize -2;
}
//NEED TO GET INITIAL GRID TO GO AWAY
function createGrid(gridSize, blockSize, defaultGrid){
    if (defaultGrid === undefined){
        defaultGrid = false;
    }
    let columns = rows = gridSize;
    for (i=0; i<rows; i++){
        let parentDiv = combine('div',i);
        parentDiv = document.createElement('div');
        parentDiv.className = 'rows';
        body.appendChild(parentDiv);
        for (j=0; j<columns; j++){
            let childDiv = parentDiv + String(j);
            childDiv = document.createElement('div');
            childDiv.className ='columns';
            
            if (defaultGrid == true){
                childDiv.setAttribute('style', 'width:' + String(blockSize) +
                    'px;' + 'height:' + String(blockSize) + 'px;' +
                    'margin:1px; background-color:black;');
                parentDiv.appendChild(childDiv);
            }
            else{
                childDiv.setAttribute('style', 'width:' + String(10) +
                    'px;' + 'height:' + String(10) + 'px;' +
                    'margin:1px; background-color:black;');
                parentDiv.appendChild(childDiv);
            }

            childDiv.addEventListener('mouseover', function(){
                this.setAttribute('style', 'width:' + String(blockSize) +
                'px;' + 'height:' + String(blockSize) + 'px;' +
                'margin:1px; background-color:rgb(15, 150, 150);')
            });
        }
    }

}

defaultBlockSize = getblockSize(16);
createGrid(16, defaultBlockSize, true)




