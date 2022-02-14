const container = document.querySelector('#container');
//------------------------


function loadPage() {
    let w = 16;
    const container = document.getElementById("container");
    const newW = 600 / w;
    
    for (let i = 0; i < w * w; i++) {
        let newBox = document.createElement('div');
        newBox.classList.add('newBox')
        newBox.style.setProperty('--newBox-w', newW + "px");
        container.appendChild(newBox);

        
        

    }
}

loadPage();



//------------------------
let newDimension = "";

function reset() {
    const container = document.getElementById("container");
    container.innerHTML = '';
    return;
        
    
}

function createGrid() {
    let newDimension = prompt("Enter the dimension of the canvas. (eg: 41)");
    if(newDimension > 100) {
        newDimension = prompt("Too big! 100 or less.");

    }
    const container = document.getElementById("container");
    const newWidth = 600 / newDimension;
    
    for (let i = 0; i < newDimension * newDimension; i++) {
        let newBox = document.createElement('div');
        newBox.classList.add('newBox')
        newBox.style.setProperty('--newBox-w', newWidth + "px");
        container.appendChild(newBox);

        
        

    }
}


btn.addEventListener('click',() => {    
       reset()
       createGrid()

});