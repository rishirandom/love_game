// Store the correct heart position
let heartPosition = Math.floor(Math.random() * 6);  // Random number between 0 and 5
let gameOver = false;

// Function to handle guesses
function guess(position) {
    if (gameOver) return;

    const boxes = document.querySelectorAll('.box');
    if (position === heartPosition) {
        // Show heart when guessed correctly
        boxes[position].innerHTML = '<div class="heart">❤️</div>';
        document.getElementById('result').innerHTML = "Congratulations, you found the heart! 💖";
        document.getElementById('restart').style.display = "inline-block";
        gameOver = true;
    } else {
        // Show a sad face when guessed wrong
        boxes[position].style.backgroundColor = "#ffcccc";
        document.getElementById('result').innerHTML = "MERO PYARO BACHA , UMAAAAAAAAAAAAH TRY AGAIN SANU NANI 😢";
    }
}

// Function to restart the game
function restartGame() {
    // Reset game variables
    heartPosition = Math.floor(Math.random() * 6);
    gameOver = false;
    document.getElementById('result').innerHTML = '';
    document.getElementById('restart').style.display = "none";

    // Reset the boxes
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.innerHTML = '';
        box.style.backgroundColor = "#ff99cc";
    });
}
