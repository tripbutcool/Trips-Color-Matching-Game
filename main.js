const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');
const playersColorElement = document.querySelector('.epicWrapper .playersColor');
const targetColorElement = document.querySelector('.epicWrapper .targetColor');
const submitButton = document.getElementById('submit');

let submitted = false;

const randomRed = Math.floor(Math.random() * 256);
const randomGreen = Math.floor(Math.random() * 256);
const randomBlue = Math.floor(Math.random() * 256);

window.onload = function() {
    targetColorElement.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

let redValue = 0;
let greenValue = 0;
let blueValue = 0;

function updateBackgroundColor() {
    playersColorElement.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
}

redSlider.oninput = function() {
     redValue = redSlider.value;
    updateBackgroundColor();
}

greenSlider.oninput = function() {
    greenValue = greenSlider.value;
    updateBackgroundColor();
}

blueSlider.oninput = function() {
    blueValue = blueSlider.value;
    updateBackgroundColor();
}

submitButton.addEventListener("click", submitPressed);

function submitPressed() {
    if(submitted === false) {
    redSlider.hidden = true;
    greenSlider.hidden = true;
    blueSlider.hidden = true;
    submitted = true
    checkNumbers();}
    else {
        window.location.reload(true);
    }
}

function checkNumbers() {
    // User's numbers
    let userNumbers = [
        redValue,
        greenValue,
        blueValue
    ];

    // Random numbers (assuming you have these already)
    let randomNumbers = [randomRed, randomGreen, randomBlue];

    // Calculate accuracy score
    let totalDifference = 0;
    for (let i = 0; i < 3; i++) {
        totalDifference += Math.abs(userNumbers[i] - randomNumbers[i]);
    }
    let averageDifference = totalDifference / 3;
    let accuracyScore = 100 - (averageDifference / 255) * 100;

    // Display accuracy score
    document.getElementById("score").innerText = `Your accuracy score is ${accuracyScore.toFixed(2)}%`;
    submitButton.innerText = 'Play Again!'
}
