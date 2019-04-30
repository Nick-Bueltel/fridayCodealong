

/*----- constants -----*/ 
const COLORS = {
    '1': 'silver',
    '-1': 'gray',
    '0': 'whitesmoke',
};

/*----- app's state (variables) -----*/ 
var board, winner, turn; 

/*----- cached element references -----*/ 
const msgEl = document.getElementById('msg');

/*----- event listeners -----*/ 
document.getElementById('col-markers').addEventListener('click',handleClick);

/*----- functions -----*/
init();

function handleClick(evt){
    const marker = evt.target;
    const colIdx = marker.id.replace('col', '');
    if(isNaN(colIdx)) return; 
    const rowIdx = board[colIdx].indexOf(0);
    if(rowIdx === -1 ) return; 
    board[colIdx][rowIdx] = turn; 
    //todo: winner = getWinner

    
    turn *= -1; 
    render();


}

function getWinner(){
    let winner = null; 
    for(let colIdx = 0; colIdx < board.length; colIdx++){
        winner = checkCol(colIdx);
            if(winner) break;     
    }
    
    return winner; 

}

function checkCol(colIdx){
    console.log(colIdx);
    return null; 
    
}

function render() {
    //Display the board 
    board.forEach(function(colArr, colIdx){
        colArr.forEach(function(cell,rowIdx){
            //update col marker
            const marker = document.getElementById(`col${colIdx}`);
            marker.style.borderTopColor = colArr.includes(0) ? 'rosybrown' : 'darkgray';
            
            //access the correct div in the section 
            const div = document.getElementById(`c${colIdx}r${rowIdx}`);
            div.style.backgroundColor = COLORS[cell];
            

        })
    })
    
 

    
    // Display message
    if (winner) {
      if (winner === 'T') {
        msgEl.textContent = "It's a Tie!";
      } else {
  
      }
    } else {
      msgEl.textContent = `${COLORS[turn].toUpperCase()}'S TURN`;
    }
  }

function init(){
    board = [
        [0,0,0,0,0,0], //column 1
        [0,0,0,0,0,0], //column 2
        [0,0,0,0,0,0], //column 3
        [0,0,0,0,0,0], //column 4
        [0,0,0,0,0,0], //column 5
        [0,0,0,0,0,0], //column 6
        [0,0,0,0,0,0], //column 7

    ];
    winner = null; 
    turn = 1; 
    render();
}