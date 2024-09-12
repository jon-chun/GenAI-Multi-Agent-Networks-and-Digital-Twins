const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const canvasSize = 400;
const snakeColor = '#00FF00';
const foodColor = '#FF0000';

let snake = [{ x: 200, y: 200 }];
let direction = { x: 0, y: 0 };
let food = { x: 0, y: 0 };
let score = 0;
let lives = 3;
let gameInterval;
let startTime;
let elapsedTime = 0;

/**
 * The function getRandomFoodPosition generates random x and y coordinates for a food item within a
 * grid.
 * @returns An object with properties `x` and `y` representing the random position of food on the
 * canvas.
 */
function getRandomFoodPosition() {
    let x = Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize;
    let y = Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize;
    return { x, y };
}

function drawRect(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, gridSize, gridSize);
}

function drawSnake() {
    snake.forEach(segment => drawRect(segment.x, segment.y, snakeColor));
}

function drawFood() {
    drawRect(food.x, food.y, foodColor);
}

function drawScore() {
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '16px Arial';
    ctx.fillText(`Score: ${score}`, 10, 20);
    ctx.fillText(`Lives: ${lives}`, 10, 40);
    ctx.fillText(`Time: ${Math.floor(elapsedTime / 1000)}s`, 10, 60);
}

/**
 * The function `moveSnake` updates the position of the snake in a game, checks if the snake has
 * reached the food, and updates the score accordingly.
 */
function moveSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score++;
        food = getRandomFoodPosition();
    } else {
        snake.pop();
    }
}

/**
 * The function `checkCollision` in JavaScript checks if the snake head has collided with the
 * boundaries of the canvas or with itself.
 * @returns The function `checkCollision()` is checking for collisions in a snake game. It returns
 * `true` if the snake's head goes out of bounds of the canvas or if it collides with any part of its
 * own body. Otherwise, it returns `false`.
 */
function checkCollision() {
    const head = snake[0];
    if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize) {
        return true;
    }
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

/**
 * The gameLoop function controls the game flow by updating the game elements, checking for collisions,
 * and handling game over conditions.
 * @returns The `gameLoop` function returns nothing explicitly. It either continues the game loop by
 * updating the game state and redrawing the canvas elements, or it stops the game loop and displays a
 * "Game Over" alert message when the player runs out of lives.
 */
function gameLoop() {
    elapsedTime = Date.now() - startTime;

    if (checkCollision()) {
        lives--;
        if (lives > 0) {
            resetSnake();
        } else {
            clearInterval(gameInterval); // Stop the game loop
            alert(`Game Over! Your score: ${score}, Time: ${Math.floor(elapsedTime / 1000)}s`);
            return;
        }
    }

    ctx.clearRect(0, 0, canvasSize, canvasSize);
    moveSnake();
    drawSnake();
    drawFood();
    drawScore();
}

function resetSnake() {
    snake = [{ x: 200, y: 200 }];
    direction = { x: 0, y: 0 };
}

/**
 * The function `changeDirection` handles key events to update the direction of movement based on the
 * arrow keys pressed, ensuring the snake does not reverse its direction.
 * @param event - The `event` parameter in the `changeDirection` function represents the event that
 * occurred, such as a key press event. It contains information about the event, including the key code
 * of the key that was pressed. This information is used in the function to determine the direction in
 * which to change based on
 */
function changeDirection(event) {
    const keyPressed = event.keyCode;
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingUp = direction.y === -gridSize;
    const goingDown = direction.y === gridSize;
    const goingRight = direction.x === gridSize;
    const goingLeft = direction.x === -gridSize;

    if (keyPressed === LEFT && !goingRight) {
        direction = { x: -gridSize, y: 0 };
    }
    if (keyPressed === UP && !goingDown) {
        direction = { x: 0, y: -gridSize };
    }
    if (keyPressed === RIGHT && !goingLeft) {
        direction = { x: gridSize, y: 0 };
    }
    if (keyPressed === DOWN && !goingUp) {
        direction = { x: 0, y: gridSize };
    }
}

/* The code snippet `document.addEventListener('keydown', changeDirection);` is adding an event
listener to the document object in the browser. Specifically, it is listening for keydown events,
which occur when a key is pressed on the keyboard. When a keydown event is detected, the
`changeDirection` function is called to handle the event. */
document.addEventListener('keydown', changeDirection);

/* The line `food = getRandomFoodPosition();` in the JavaScript code snippet is calling the
`getRandomFoodPosition()` function to generate random x and y coordinates for a food item within a
grid. The function returns an object with properties `x` and `y` representing the random position of
the food on the canvas. By assigning the result of this function call to the `food` variable, it
updates the position of the food item in the game, ensuring that the food appears at a new random
location on the canvas. */
food = getRandomFoodPosition();
startTime = Date.now();
/* The line `gameInterval = setInterval(gameLoop, 100);` in the JavaScript code snippet is setting up a
game loop using the `setInterval` function. */
gameInterval = setInterval(gameLoop, 100); // Store the interval ID