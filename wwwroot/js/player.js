$(document).ready(function () {
    $.get("/./pages/partials/player.html", (data) => {
        $("#left-col").append(data);
        $.get("/./pages/partials/player_buffs.html", (data) => {
            $("#buffs-row").append(data);
        });
        pName = $("#name-text");
        pMaxHp = $("#max-health-text");
        pHp = $("#current-health-text");
        pClassType = $("#class-type-text");
        pLevel = $("#level-text");
        pGold = $("#gold-text");
        pXp = $("#xp-text");
        pStr = $("#strength-text");
        pDef = $("#defence-text");
        pSp = $("#skill-point-text");

        btnStrUp = $("#strength-up-button");
        btnDefUp = $("#defence-up-button");
        $(".stat-up-button").on("click", evt => { statUp(evt); });

        pName.html(charData.Name);
        pMaxHp.html(charData.Health);
        pHp.html(charData.CurrentHealth);
        pClassType.html(charData.ClassType);
        pLevel.html(charData.Level);
        pGold.html(charData.Gold);
        pXp.html(charData.Experience);
        pDef.html(charData.Defence);
        pStr.html(charData.Strength);
        pSp.html(charData.SkillPoints);
    });
});

//element objects
//texts
var pName, pMaxHp, pHp, pClassType, pLevel, pGold, pXp, pStr, pDef, pSp;
//buttons
var btnStrUp, btnDefUp;

var tempStr = 0;
var tempDef = 0;

function tryLevelUp(player) {
    if (player.Experience > xpTable[player.Level +1]) {
        player.Health += 1 + getRandom(1, 4);
        player.Level += 1;
        //player.Strength += 1 + getRandom(0, 2);
        //player.Defence += 1 + getRandom(0, 2);
        player.CurrentHealth = player.Health;
        player.SkillPoints += 1;
        logMessage(`Levelled up! New level is ${player.Level} and you gained 1 skill point!`);
        updatePlayerInterface();
        $(".stat-up-button").css("display", "block");
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
    pSp.html(charData.SkillPoints);
}

function updateBuffs() {
    
}

function updateInventory(id) {
    let added = false;
    if (charData.Items.length < 1) {
        charData.Items.push({"ID": id, "Quantity": 1});
        added = true;
        return;
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

function statUp(event) {
    let stat = event.currentTarget.id;
    switch (stat) {
        case "strength-up-button": 
            charData.Strength += 1;
            charData.SkillPoints -= 1;
            break;
        case "defence-up-button":
            charData.Defence += 1;
            charData.SkillPoints -= 1;
            break;
    }
    if (charData.SkillPoints < 1) {
        $(".stat-up-button").css("display", "none");
    }
    updatePlayerInterface();
}

function playerDamage() {
    let dmg = charData.Strength + getRandom(0, charData.Strength*0.8);

    return dmg;
}