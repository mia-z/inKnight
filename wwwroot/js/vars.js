$(document).ready(function () {
    initVars();
});

const BASE_XP = 53;
var xpTable = [];

function initVars() {
    //Initialize the xp table
    for (let x = 0; x < 200; x++) {
        if (x == 0) { xpTable.push(0); }
        else if (x == 1) { xpTable.push(BASE_XP); }
        else {
            xpTable.push(Math.floor(xpTable[x-2] + (x * BASE_XP) * 1.825));
        }
    }
}