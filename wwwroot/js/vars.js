$(document).ready(function () {
    initVars();
});

const BASE_XP = 20;
var xpTable = [];

function initVars() {
    //Initialize the xp table
    for (let x = 0; x < 200; x++) {
        if (x == 0) { xpTable.push(0); }
        else if (x == 1) { xpTable.push(BASE_XP); }
        else {
            xpTable.push(Math.floor(xpTable[x-1] + (xpTable[x-1] * 0.1245)));
            //xpTable.push(Math.floor((xpTable[x-1] + (BASE_XP * x)) * 1.0075));
        }
    }
    console.log(xpTable);
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (+max - +min)) + +min;
}