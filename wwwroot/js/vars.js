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

var tempStrActive = false;
var tempDefActive = false;

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
            if (charData.CurrentHealth == charData.Health) {
                logMessage(`Your health is already full!`, null, "blue");
                return false;
            }
            charData.CurrentHealth += 50;
            if (charData.CurrentHealth > charData.Health) 
                charData.CurrentHealth = charData.Health;
            updatePlayerInterface();
            logMessage(`Used ${itemList[id].Name}, restored 50 health!`, null, "blue");
            return true;
        case 1: //potion
            if (charData.CurrentHealth == charData.Health) {
                logMessage(`Your health is already full!`, null, "blue");
                return false;
            }
            charData.CurrentHealth += 150;
            if (charData.CurrentHealth > charData.Health) 
                charData.CurrentHealth = charData.Health;
            updatePlayerInterface();
            logMessage(`Used ${itemList[id].Name}, restored 150 health!`, null, "blue");
            return true;
        case 2: //high potion
            if (charData.CurrentHealth == charData.Health) {
                logMessage(`Your health is already full!`, null, "blue");
                return false;
            }
            charData.CurrentHealth += 500;
            if (charData.CurrentHealth > charData.Health) 
                charData.CurrentHealth = charData.Health;
            updatePlayerInterface();
            logMessage(`Used ${itemList[id].Name}, restored 500 health!`, null, "blue");
            return true;
        case 3: //strength potion
            if (tempStrActive) {
                logMessage(`Strength boost already active!`, null, "blue");
                return false;
            }
            $("#str-buff-text").show();
            tempStrActive = true;
            setTimeout(() => {
                tempStr = 0;
                tempStrActive = false;
                logMessage(`Strength returned to normal! `, null, "blue");
                $("#str-buff-text").hide();
            }, 30*1000)
            logMessage(`Used ${itemList[id].Name}, strength boosted temporarily! `, null, "blue");
            return true;
        case 4: //defence potion
            if (tempDefActive) {
                logMessage(`Defence boost already active!`, null, "blue");
                return false;
            }
            $("#def-buff-text").show();
            tempDefActive = true;
            setTimeout(() => {
                tempDefActive = false;
                logMessage(`Defence returned to normal! `, null, "blue");
                $("#def-buff-text").hide();
            }, 30*1000)
            logMessage(`Used ${itemList[id].Name}, defence boosted temporarily `, null, "blue");
            return true;
    }
}

function removeItem(index) {
    console.log(charData.itemList);
    charData.Items[index].Quantity -= 1;
    if (charData.Items[index].Quantity < 1) {
        charData.Items.splice(index, 1);
    }
}

function getRandom(min, max) {
    return Math.floor(rng() * (+max - +min)) + +min;
}

//Advanced random number generator
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