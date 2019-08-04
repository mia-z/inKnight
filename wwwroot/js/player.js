$(document).ready(function () {
    $.get("/inKnight/pages/partials/player.html", (data) => {
        $("#left-col").append(data);
        pName = $("#name-text");
        pMaxHp = $("#max-health-text");
        pHp = $("#current-health-text");
        pClassType = $("#class-type-text");
        pLevel = $("#level-text");
        pGold = $("#gold-text");
        pXp = $("#xp-text");
        pStr = $("#strength-text");
        pDef = $("#defence-text");

        pName.html(charData.Name);
        pMaxHp.html(charData.Health);
        pHp.html(charData.CurrentHealth);
        pClassType.html(charData.ClassType);
        pLevel.html(charData.Level);
        pGold.html(charData.Gold);
        pXp.html(charData.Experience);
        pDef.html(charData.Defence);
        pStr.html(charData.Strength);
    });
});

//element objects
var pName, pMaxHp, pHp, pClassType, pLevel, pGold, pXp, pStr, pDef;

var tempStr, tempDef;

function tryLevelUp(player) {
    if (player.Experience > xpTable[player.Level +1]) {
        player.Health += 1 + getRandom(1, 4);
        player.Level += 1;
        player.Strength += 1 + getRandom(0, 2);
        player.Defence += 1 + getRandom(0, 2);
        player.CurrentHealth = player.Health;
        logMessage(`Levelled up! New level is ${player.Level}!`);
        updatePlayerInterface();
        return true;
    }
    return false;
}

function updatePlayerInterface() {
    pName.html(charData.Name);
    pMaxHp.html(charData.Health);
    pHp.html(charData.CurrentHealth);
    pClassType.html(charData.ClassType);
    pLevel.html(charData.Level);
    pGold.html(charData.Gold);
    pXp.html(charData.Experience);
    pDef.html(charData.Defence);
    pStr.html(charData.Strength);
}

function updateInventory(id) {
    let added = false;
    if (charData.Items.length < 1) {
        charData.Items.push({"ID": id, "Quantity": 1});
        added = true;
    }
    charData.Items.forEach((slot, index) => {
        if (slot.ID == id) {
            charData.Items[index].Quantity++;
            added = true;
        }
    });
    if (!added)
        charData.Items.push({"ID": id, "Quantity": 1});
}

function playerDamage() {
    return charData.Strength + getRandom(0, 5);
}