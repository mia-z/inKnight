$(document).ready(function () {
    initVars();
});

const BASE_XP = 550;
var xpTable = [];
var itemList = [
    {"Name" : "Low Potion", "Price" : 50} , 
    {"Name" : "Potion", "Price" : 100} , 
    {"Name" : "High Potion", "Price" : 300} ,
    {"Name" : "Strength Potion", "Price" : 500} , 
    {"Name" : "Defence Potion", "Price" : 500} 
];

function initVars() {
    //Initialize the xp table
    for (let x = 0; x < 200; x++) {
        if (x == 0) { xpTable.push(0); }
        else if (x == 1) { xpTable.push(0); }
        else {
            let mod = x + 80;
            let pre = Math.floor(Math.pow(BASE_XP * (x * 1.013), (mod * 0.007)));
            xpTable.push(Math.floor((pre/9) + xpTable[x-1]));
            //xpTable.push(Math.floor((xpTable[x-1] + (BASE_XP * x)) * 1.0075));
        }
    }
    console.log(xpTable);
}

function useItem(id) {
    switch(id) {
        case 0: //low potion
            charData.CurrentHealth += 50;
            if (charData.CurrentHealth > charData.Health) 
                charData.CurrentHealth = charData.Health;
            break;
        case 1: //potion
            charData.CurrentHealth += 150;
            if (charData.CurrentHealth > charData.Health) 
                charData.CurrentHealth = charData.Health;
            break;
        case 2: //high potion
            charData.CurrentHealth += 500;
            if (charData.CurrentHealth > charData.Health) 
                charData.CurrentHealth = charData.Health;
            break;
        case 3: //strength potion
            break;
        case 4: //defence potion
            break;

    }
}

function getRandom(min, max) {
    return Math.floor(rng() * (+max - +min)) + +min;
}

//credit:
//https://github.com/davidbau/seedrandom
var seed = Math.seedrandom();        // Use prng with an automatic seed.

var rng = new Math.seedrandom(seed); // A new prng with the same seed.

function reseed(event, count) {      // Define a custom entropy collector.
  var t = [];
  function w(e) {
    t.push([e.pageX, e.pageY, +new Date]);
    if (t.length < count) { return; }
    document.removeEventListener(event, w);
    Math.seedrandom(t, { entropy: true });
  }
  document.addEventListener(event, w);
  console.log("new seed generated");
}
reseed('mousemove', 100);  