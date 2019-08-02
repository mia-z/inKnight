$(document).ready(function () {
    $.get("/./pages/partials/player.html", (data) => {
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
    }).catch((e) => {
        console.log("local loading failed, trying another DIR - " + e);
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

function playerDamage() {
    return charData.Strength + getRandom(0, 5);
}