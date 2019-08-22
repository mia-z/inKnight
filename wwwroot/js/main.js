$(document).ready( () => {
    
});

var currentMode = "train";

var charData = null;
var currentEnemy = null;

var globalTicker;

function startGame() {
    globalTicker = setInterval(() => {
        gameTick();
    }, 500);
}

function stopGame() {
    clearInterval(globalTicker);
}

function gameTick() {
    charData.CurrentTick++;
    Cookies.set("char", charData);
    if (charData.SkillPoints == 0) {
        $(".stat-up-button").css("display", "none");
    } else {
        $(".stat-up-button").css("display", "block");
    }

    if (currentEnemy === null || currentEnemy.CurrentHealth < 1) {
        switch(currentMode) {
            case "train": 
                generateEnemy($("input[name='training-type']:checked").val());
                break;
        }
    }

    switch(currentMode) {
        case "train":
            currentEnemy.CurrentHealth -= playerDamage();
            updateEnemyInterface(currentEnemy);
            if (currentEnemy.CurrentHealth < 1) {
                updateEnemyInterface(currentEnemy);
                charData.Experience += currentEnemy.XpReward;
                charData.Gold += currentEnemy.GoldReward;
                logMessage(`Defeated dummy! Gained ${currentEnemy.GoldReward} gold and ${currentEnemy.XpReward} xp!`, null, "green");
                tryLevelUp(charData);
                updatePlayerInterface();
                clearInterval(globalTicker);
                setTimeout(() => {
                    generateEnemy($("input[name='training-type']:checked").val());
                    startGame();
                }, 750)
            }
            break;
    }

}