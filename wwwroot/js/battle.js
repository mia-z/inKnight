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
            return createEnemy(
                "Easy Dummy", charData.Level, 20*charData.Level, 0, 1, 
                getRandom(0, 15), getRandom(0, 20)
            );
        case "d2":
            return createEnemy(
                "Medium Dummy", charData.Level, 100*charData.Level, 0, 1, 
                getRandom(100, 150), getRandom(250, 300)
            );
        case "d3":
            return createEnemy(
                "Hard Dummy", charData.Level, 500*charData.Level, 0, 1, 
                getRandom(500, 1000), getRandom(4500, 5000)
            );
        
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