document.addEventListener('DOMContentLoaded', () => {
    const rollButton = document.getElementById('rollButton');
    const resultText = document.getElementById('result');
    const popup = document.getElementById('winnerPopup');
    const winnerMessage = document.getElementById('winnerMessage');
    const closePopup = document.querySelector('.popup .close');
    
    const player1ScoreElem = document.getElementById('player1Score');
    const player2ScoreElem = document.getElementById('player2Score');
    const player3ScoreElem = document.getElementById('player3Score');
    const roundWinnerElem = document.getElementById('roundWinner');
    
    const playerScores = [0, 0, 0];
    const playerWins = [0, 0, 0];
    const WINNING_SCORE = 3;
    
    rollButton.addEventListener('click', () => {
        const playerNames = [
            document.getElementById('player1Name').value || 'Player 1',
            document.getElementById('player2Name').value || 'Player 2',
            document.getElementById('player3Name').value || 'Player 3'
        ];
        
        const rolls = [rollDice(), rollDice(), rollDice()];
        
        updateDiceImages(rolls);
        const highestRoll = Math.max(...rolls);
        const winners = rolls.map((roll, index) => roll === highestRoll ? index : -1).filter(index => index !== -1);
        
        if (winners.length === 1) {
            const roundWinner = winners[0];
            playerWins[roundWinner]++;
            roundWinnerElem.textContent = `Round Winner: ${playerNames[roundWinner]} (${rolls[roundWinner]})`;
            
            if (playerWins[roundWinner] === WINNING_SCORE) {
                winnerMessage.textContent = `${playerNames[roundWinner]} wins the game!`;
                popup.style.display = 'flex';
            }
        } else {
            roundWinnerElem.textContent = `Round Winner: It's a tie! (${rolls.join(', ')})`;
        }
        
        for (let i = 0; i < 3; i++) {
            document.getElementById(`player${i + 1}Score`).textContent = `${playerNames[i]} Score: ${playerWins[i]}`;
        }
    });
    
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });
    
    function rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }
    
    function updateDiceImages(rolls) {
        const diceImages = [
            'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3265341/red-dice-2-01-one-icon-md.png', // Image for face 1
            'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3265357/red-dice-2-05-five-icon-md.png', // Image for face 2
            'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3265349/red-dice-2-03-three-icon-md.png', // Image for face 3
            'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3265353/red-dice-2-04-four-icon-md.png', // Image for face 4
            'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3265357/red-dice-2-05-five-icon-md.png', // Image for face 5
            'https://creazilla-store.fra1.digitaloceanspaces.com/icons/3265360/red-dice-2-06-six-icon-md.png',  // Image for face 6
        ];
    }
    function updateDiceImages(rolls) {
        document.getElementById('dice1').src = `https://creazilla-store.fra1.digitaloceanspaces.com/icons/3265353/red-dice-2-04-four-icon-md.png/${rolls[0]}/${rolls[0]}_dice.svg`;
        document.getElementById('dice2').src =`https://creazilla-store.fra1.digitaloceanspaces.com/icons/3265357/red-dice-2-05-five-icon-md.png/${rolls[1]}/${rolls[1]}_dice.svg`;
        document.getElementById('dice3').src = `https://creazilla-store.fra1.digitaloceanspaces.com/icons/3265360/red-dice-2-06-six-icon-md.png/${rolls[2]}/${rolls[2]}_dice.svg`;
    }
});
