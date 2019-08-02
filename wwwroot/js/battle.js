$(document).ready(function () {
    $.get("/./pages/partials/battle.html", (data) => {
        $("#info-col").append(data);
        currentActivity = $("#current-activity-text");
        eName = $("#enemy-name");
        //$("#enemy-hp-text")
        eMaxHp = $("#enemy-max-hp");
        eHp = $("#enemy-current-hp");
    }).catch((e) => {
        console.log("local loading failed, trying another DIR - " + e);
        $.get("/inKnight/pages/partials/battle.html", (data) => {
            $("#info-col").append(data);
            currentActivity = $("#current-activity-text");
            eName = $("#enemy-name");
            //$("#enemy-hp-text")
            eMaxHp = $("#enemy-max-hp");
            eHp = $("#enemy-current-hp");
        });
    });
});

//element objects
var currentActivity, eName, eHp, eMaxHp;

function createEnemy(name, level, hp, strength, defence, xpReward, goldReward) {
    let enemyToReturn = {
        "Name" : name,
        "Level" : level,
        "Health" : hp,
        "CurrentHealth" : hp,
        "Strength" : strength,
        "Defence" : defence,
        "XpReward" : xpReward,
        "GoldReward" : goldReward
    }
    return enemyToReturn;
}

function updateEnemyInterface(emax, newhp) {
    eMaxHp.html(emax)
    eHp.html(newhp);
}