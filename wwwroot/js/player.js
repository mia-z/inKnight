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
    });
});

var pName, pMaxHp, pHp, pClassType, pLevel, pGold, pXp, pStr, pDef;

function tryLevelUp(player) {
    if (player.Experience > xpTable[player.Level +1]) {
        player.Health += 1 + getRandom(1, 4);
        player.Level += 1;
        player.Strength += 1 + getRandom(1, 2);
        player.Defence += 1 + getRandom(1, 2);
        return true;
    }
    return false;
}