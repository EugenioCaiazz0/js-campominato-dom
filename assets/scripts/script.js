const smileyBtn = document.getElementById(`smileyBtn`);

let difficulty = 10 /*dopo imposteremo 3 difficoltà tramite btn*/

smileyBtn.addEventListener(`click`, function() /*creiamo una griglia con una semplice matrice di div*/
{
    let tileNumber = 1;
    for (i = 1; i <= difficulty; i++) 
    {
        for (y = 1; y <= difficulty; y++ ) 
        {
            document.getElementById(`tileGrid`).innerHTML +='<div class="tile">'
                + `${tileNumber}</div>`; 
                //console.log(`Il numero di casella è ${tileNumber}`);
                tileNumber++;
        }
    }
    activateTiles();
    generateBombs();
})


function activateTiles(){
    console.log(this)
    const allTiles = document.querySelectorAll('.tile');
    for(let i = 0; i < allTiles.length; i++){
        allTiles[i]._tileId = i + 1;
        allTiles[i].addEventListener('click', function(){
            console.log(this);
            console.log(this._tileId)
        })
    }


    function generateBombs() {
        const grid = document.querySelectorAll(`.tile`);
        const gridSize = grid.length;
        const bombNum = 16;
        let bombsArray = [];

        while(bombsArray.length <= bombNum) {
            numRandom = getRandomInt(1,gridSize);
            
            for (let y = 0; y < bombNum; y++){
               if (numRandom != bombNum[y]) {
                    bombsArray.push(numRandom);
                    console.log(`La casella ${numRandom} è una bomba`);
                }
            }
        }
    }
}



function getRandomInt(min, max) 
{
    const minCeil = Math.ceil(min);
    const maxFloor = Math.floor(max);
    return Math.floor(Math.random() * (maxFloor - minCeil + 1) + minCeil);
}