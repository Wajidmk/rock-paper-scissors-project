
document.addEventListener("DOMContentLoaded", () => {
    const message = document.querySelector('.message');
    const score = document.querySelector('.score');
    const buttons = document.querySelectorAll('button');
    const winnerScores = [0, 0];

    // Add event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener('click', playGame);
    });

    function playGame(e) {
        // Setup player's selection
        const playerSelection = e.target.innerText;

        // Setup a random selection for computer
        const computerSelection = getComputerSelection();

        // Compare selections and get result
        const result = checkWinner(playerSelection, computerSelection);

        // Update score and result message
        updateScores(result);
        displayResult(playerSelection, computerSelection, result);
    }

    function getComputerSelection() {
        const rand = Math.random();
        if (rand < 0.34) {
            return 'Rock';
        } else if (rand <= 0.67) {
            return 'Paper';
        } else {
            return 'Scissors';
        }
    }

    function checkWinner(player, computer) {
        if (player === computer) {
            return 'Draw';
        }

        if ((player === 'Rock' && computer === 'Scissors') ||
            (player === 'Paper' && computer === 'Rock') ||
            (player === 'Scissors' && computer === 'Paper')) {
            return 'Player';
        } else {
            return 'Computer';
        }
    }

    function updateScores(result) {
        if (result === 'Player') {
            winnerScores[0]++;
        } else if (result === 'Computer') {
            winnerScores[1]++;
        }

        score.innerHTML = `Player: [ ${winnerScores[0]} ] Computer: [ ${winnerScores[1]} ]`;
    }

    function displayResult(playerSelection, computerSelection, result) {
        let resultMessage = '';
        if (result === 'Draw') {
            resultMessage = 'It\'s a tie!';
        } else {
            resultMessage = `${result} wins!`;
        }

        message.innerHTML = `Player: <strong>${playerSelection}</strong> Computer: <strong>${computerSelection}</strong><br>${resultMessage}`;
    }
});
