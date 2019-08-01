$(document).ready( () => {
    
});

var charData = null;

var globalTicker;

function gameTick() {
    charData.CurrentTick++;
    console.log("game ticked. Current tick: " + charData.CurrentTick);
    Cookies.set("char", charData);
}