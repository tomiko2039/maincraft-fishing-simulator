// Minecraft Finshing Simulator
'use strict';

// Global Variables
let numFish = 0;
let numSalmon = 0;
let numPuffer = 0;
let numClown = 0;
let numJunk = 0;
let numTresure = 0;

let resultsEl = document.getElementById('results');

// Event Listener
document.getElementById('mainImg').addEventListener('click', catchFish);

// Event Function
function catchFish() {
    // Generate a random number
    let randNum = Math.random(); // Random decimal from 0 up to 1

    // Simulate results
    if (randNum < 0.85) {
        // Catch Fish - Simulate what type of fish to catch
        let randFish = Math.random();

        if (randFish < 0.5) {
            console.log("RawFish")
            numFish++;
            document.getElementById('fish').innerHTML = numFish;
            resultsEl.innerHTML += '<img src="images/RawFish.png">'
        } else if (randFish < 0.7) {
            console.log("RawSalmon")
            numSalmon++;
            document.getElementById('salmon').innerHTML = numSalmon;
            resultsEl.innerHTML += '<img src="images/Raw_Salmon.png">'
        } else if (randFish < 0.9) {
            console.log("PufferFish")
            numPuffer++;
            document.getElementById('puffer').innerHTML = numPuffer;
            resultsEl.innerHTML += '<img src="images/Pufferfish_old.png">'
        } else {
            console.log("ClownFish")
            numClown++;
            document.getElementById('clown').innerHTML = numFish;
            resultsEl.innerHTML += '<img src="images/Clownfish.png">'
        }

    } else if (randNum < 0.95) {
        // Catch Junk
        numJunk++;
        document.getElementById('junk').innerHTML = numJunk;
        resultsEl.innerHTML += '<img src="images/leatherboots.png">'
    } else {
        // Catch Treasure
        numTresure++;
        document.getElementById('treasure').innerHTML = numTresure;
        resultsEl.innerHTML += '<img src="images/Bow.png">'
    }
}