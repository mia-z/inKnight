$(document).ready(function () {
    $.get("/./pages/partials/battle.html", (data) => {
        $("#info-col").append(data);
        currentActivity = $("#current-activity-text");
        eName = $("#enemy-name");
        //$("#enemy-hp-text")
        eMaxHp = $("#enemy-max-hp");
        eHp = $("#enemy-current-hp");
    });
});

//element objects
var currentActivity, eName, eHp, eMaxHp;

function createEnemy(name, level, hp, strength, defence, xpReward, goldReward) {
    let e = {
        "Name" : name,
        "Level" : level,
        "Health" : hp,
        "CurrentHealth" : hp,
        "Strength" : strength,
        "Defence" : defence,
        "XpReward" : xpReward,
        "GoldReward" : goldReward
    }
    return e;
}

function generateEnemy(target) {
    switch(target) {
        case "d1":
            currentEnemy = createEnemy(
                "Easy Dummy", charData.Level, 20*charData.Level, 0, 1, 
                getRandom(0, 15), getRandom(0, 20)
            );
            break;
        case "d2":
            currentEnemy = createEnemy(
                "Medium Dummy", charData.Level, 100*charData.Level, 0, 1, 
                getRandom(100, 150), getRandom(250, 300)
            );
            break;
        case "d3":
            currentEnemy = createEnemy(
                "Hard Dummy", charData.Level, 500*charData.Level, 0, 1, 
                getRandom(500, 1000), getRandom(4500, 5000)
            );
            break;
    }
    updateEnemyInterface(currentEnemy);
}

function updateEnemyInterface(current) {
    eMaxHp.html(current.Health)
    if (current.CurrentHealth < 1) {
        eHp.html(0);
    } else eHp.html(current.CurrentHealth);
    eName.html(current.Name);
}