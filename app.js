let currMoleTile;
let currPlantTile;
let score = 0; 
let gameOver = false;




window.onload = function() {
    setGame();

}

function setGame(){
    // set up the grid

    for (i=0; i<9; i++){
        // <div id="0-8"></div>
        let tile = document.createElement('div'); 
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 700);
    setInterval(getPlant, 1000);
}

function getRundomTile(){

    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole(){
    if(gameOver){
        return;
    }

    if(currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img")
    mole.src = "./monty-mole.png"

    let num = getRundomTile();
    if(currPlantTile && currPlantTile.id == num){
        return;
    }
    currMoleTile = document.getElementById(num)
    currMoleTile.appendChild(mole)
}

function getPlant(){
    if(gameOver){
        return;
    }

    if(currPlantTile){
        currPlantTile.innerHTML = "";
    }


    let plant = document.createElement("img");
    plant.src = './piranha-plant.png'
    

    let num = getRundomTile();
    if(currMoleTile && currMoleTile.id == num){
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameOver){
        return;
    }


    if(this == currMoleTile){
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if ( this == currPlantTile) {
        document.getElementById("score").innerText = "GAME OVER:" + score.toString();
        gameOver = true;
    }
}

btn.addEventListener("submit", gameOver = false)