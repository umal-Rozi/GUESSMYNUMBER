let randomNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById('guessInput').value;
    attempts++;
    let feedback = '';

    if (userGuess == randomNumber) {
        feedback = 'Congratulations! You guessed it right!';
        document.body.style.background = 'green'; // Change background to green
        alert('You won the game!'); // Send message
    } else if (userGuess < randomNumber) {
        feedback = 'Too low! Try again.';
    } else if (userGuess > randomNumber) {
        feedback = 'Too high! Try again.';
    }

    document.getElementById('feedback').textContent = feedback;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 50) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.body.style.backgroundColor = ''; // Reset background color
   
}
