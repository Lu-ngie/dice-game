let player1Score = 0;
let player2Score = 0;
const winningScore = 3;

document.getElementById('rollButton').addEventListener('click', function() {
    // Get player names
    const player1Name = document.getElementById('player1Name').value || 'Player 1';
    const player2Name = document.getElementById('player2Name').value || 'Player 2';

    // Generate random dice rolls
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    // Update dice images with animation
    const dice1Img = document.getElementById('dice1');
    const dice2Img = document.getElementById('dice2');
    
    dice1Img.classList.add('roll');
    dice2Img.classList.add('roll');
    
    setTimeout(() => {
        dice1Img.src = `https://upload.wikimedia.org/wikipedia/commons/${dice1}_${dice1}.svg`;
        dice2Img.src = `https://upload.wikimedia.org/wikipedia/commons/${dice2}_${dice2}.svg`;
        dice1Img.classList.remove('roll');
        dice2Img.classList.remove('roll');
    }, 300);

    // Determine result
    let resultText = '';
    if (dice1 > dice2) {
        resultText = `${player1Name} Wins this round!`;
        player1Score++;
    } else if (dice1 < dice2) {
        resultText = `${player2Name} Wins this round!`;
        player2Score++;
    } else {
        resultText = 'It\'s a Draw!';
    }

    // Update scores
    document.getElementById('player1Score').textContent = `${player1Name} Score: ${player1Score}`;
    document.getElementById('player2Score').textContent = `${player2Name} Score: ${player2Score}`;

    // Determine game winner
    let winnerMessage = '';
    if (player1Score === winningScore) {
        winnerMessage = `${player1Name} wins the game!`;
    } else if (player2Score === winningScore) {
        winnerMessage = `${player2Name} wins the game!`;
    }

    if (winnerMessage) {
        document.getElementById('winnerMessage').textContent = winnerMessage;
        document.getElementById('winnerPopup').style.display = 'flex';
    } else {
        document.getElementById('result').textContent = resultText;
        document.getElementById('roundWinner').textContent = `Round Winner: ${dice1 > dice2 ? player1Name : dice1 < dice2 ? player2Name : 'None'}`;
    }
});

// Close popup
document.querySelector('.popup .close').addEventListener('click', function() {
    document.getElementById('winnerPopup').style.display = 'none';
});
