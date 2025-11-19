/*
    Different object usage patterns
        - object contructors
        - factory functions
        - IIFEs
        - classes
        - es6 modules

*/







// |0| |1| |2|
// |3| |4| |5|
// |6| |7| |8|


const gameboard = {
    gameboardArr: ['', '', '', '', '', '', '', '', ''],
};

function makePlayer(name, marker) {
    return { name, marker };
}

const displayController = (function () {
    const checkIfWinner = () => {
        for (let i = 0; i < gameboardArr.length; i++) {
            if (gameboardArr[0] == gameboardArr[1] && gameboardArr[1] == gameboardArr[2]) {
                console.log(`VICTORY ATTAINED! The winner is ${gameboardArr[2]}`);
            } else if (gameboardArr[3] == gameboardArr[4] && gameboardArr[4] == gameboardArr[5]) {
                console.log(`VICTORY ATTAINED! The winner is ${gameboardArr[5]}`);
            } else if (gameboardArr[6] == gameboardArr[7] && gameboardArr[7] == gameboardArr[8]) {
                console.log(`VICTORY ATTAINED! The winner is ${gameboardArr[8]}`);
            } else if (gameboardArr[0] == gameboardArr[3] && gameboardArr[3] == gameboardArr[6]) {
                console.log(`VICTORY ATTAINED! The winner is ${gameboardArr[6]}`);
            } else if (gameboardArr[1] == gameboardArr[4] && gameboardArr[4] == gameboardArr[7]) {
                console.log(`VICTORY ATTAINED! The winner is ${gameboardArr[7]}`);
            } else if (gameboardArr[2] == gameboardArr[5] && gameboardArr[5] == gameboardArr[8]) {
                console.log(`VICTORY ATTAINED! The winner is ${gameboardArr[8]}`);
            } else if (gameboardArr[2] == gameboardArr[4] && gameboardArr[4] == gameboardArr[6]) {
                console.log(`VICTORY ATTAINED! The winner is ${gameboardArr[6]}`);
            } else if (gameboardArr[0] == gameboardArr[4] && gameboardArr[4] == gameboardArr[8]) {
                console.log(`VICTORY ATTAINED! The winner is ${gameboardArr[8]}`);
            }
            // else if board is full then it's a tie
        }
    }
    return {checkIfWinner};
})();

/*
    Things I will need for this game:
        - way to store board state (the arr they tell you to make)
        - objects for each player
            - player name
            - player marker (x vs o)
        - "you’re probably going to want an object to control the flow of the game itself."; "displayController"?
            - who's turn is it
            - check for winner every turn (starting after 3rd turn maybe)
*/

// check if winner function
/*

- loop through gameboard arr
- conditional for if same char (x or o) in all spaces of concern
    - 0 1 2
    - 3 4 5 
    - 6 7 8
    - 0 3 6
    - 1 4 7
    - 2 5 8
    - 2 4 6
    - 0 4 8
*/

