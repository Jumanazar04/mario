let currMoleTile;
let currPlantTile;


window.onload = function() {
    setGame();

}

function setGame(){
    // set up the grid

    for (i=0; i<9; i++){
        // <div id="0-8"></div>
        let tile = document.createElement('div'); 
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000);
    setInterval(getPlant, 2000);
}

function getRundomTile(){

    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole(){

    if(currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img")
    mole.src = "./monty-mole.png"

    let num = getRundomTile();
    if(currMoleTile && currMoleTile.id == num){
        return;
    }
    currMoleTile = document.getElementById(num)
    currMoleTile.appendChild(mole)
}

function getPlant(){

    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }


    let plant = document.createElement("img");
    plant.src = './piranha-plant.png'
    

    let num = getRundomTile();
    if(currMoleTile && currMoleTile.id == num){
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(plant);
}