let score = 0;
let level = 1;
let lives = 3;

function startGame() {
    document.getElementById("score").textContent = "Score: " + score + " | Level: " + level;
    document.getElementById("message").textContent = '';
    
    // Update lives display
    
    document.getElementById("heart-icons").innerHTML = "&#9829; ".repeat(lives);
    
    if (lives === 0) {
      gameOver();
      return;
    }
    
    // Generate random color
    let randomColor = generateRandomColor();
    document.getElementById("color-display").textContent = "RGB(" + randomColor.r + ", " + randomColor.g + ", " + randomColor.b + ")";

    // Generate random color options
    const colorOptionsContainer = document.getElementById("color-options");
    colorOptionsContainer.innerHTML = '';
    const correctOptionIndex = Math.floor(Math.random() * 3);
    for (let i = 0; i < 3; i++) {
      const option = document.createElement("button");
      if (i === correctOptionIndex) {
        option.style.backgroundColor = "rgb(" + randomColor.r + ", " + randomColor.g + ", " + randomColor.b + ")";
        option.dataset.correct = "true";
      } else {
        const randomOptionColor = generateRandomColor();
        option.style.backgroundColor = "rgb(" + randomOptionColor.r + ", " + randomOptionColor.g + ", " + randomOptionColor.b + ")";
      }
      option.classList.add("color-option");
      option.addEventListener("click", function() {
        if (this.dataset.correct === "true") {
          score += 10;
          level++;
          startGame();
        } else {
          loseLife();
        }
      });
      colorOptionsContainer.appendChild(option);
    }
  }
    function loseLife() {
        lives--;
        document.getElementById("heart-icons").innerHTML = "&#9829; ".repeat(lives);
        if (lives === 0) {
            gameOver();
        } else {
            startGame();
        }
    }
    
    function gameOver() {
        alert("Game over! Your score: " + score + " | Level: " + level);
        score = 0;
        level = 1;
        lives = 3;
        // Redirect to index page
        window.location.href = "index.html";
    }
    
    function generateRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return { r, g, b };
    }
    // Start the game
    startGame();