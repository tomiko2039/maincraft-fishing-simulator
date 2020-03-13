// Minecraft Finshing Simulator
'use strict';

// Global Variables
let numFish = 0;
let numJunk = 0;
let numTresure = 0;

// Event Listener
document.getElementById('mainImg').addEventListener('click', catchFish);

// Event Function
function catchFish() {
    // Generate a random number
    let randNum = Math.random(); // Random decimal from 0 up to 1

    // Simulate results
    if (randNum < 0.85) {
        numFish++;
        document.getElementById('fish').innerHTML = numFish;
    }else if (randNum < 0.95) {
        numJunk++;
        document.getElementById('junk').innerHTML = numJunk;
    }else {
        numTresure++;
        document.getElementById('treasure').innerHTML = numTresure;
    }
}