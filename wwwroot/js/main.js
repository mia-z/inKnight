$(document).ready( () => {
    
});

var currentMode = "train";

var charData = null;
var currentEnemy = null;

var globalTicker;

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
                currentEnemy = createEnemy(
                    "Dummy", charData.Level, 20*charData.Level, 0, 1, 
                    getRandom(0, 15), getRandom(0, 20)
                );
                eHp.html(currentEnemy.CurrentHealth);
                eMaxHp.html(currentEnemy.Health);
                eName.html(currentEnemy.Name);
                break;
        }
    }
    switch(currentMode) {
        case "train":
            currentEnemy.CurrentHealth -= playerDamage();
            updateEnemyInterface(currentEnemy.Health, currentEnemy.CurrentHealth);
            if (currentEnemy.CurrentHealth < 1) {
                updateEnemyInterface(currentEnemy.Health, 0);
                charData.Experience += currentEnemy.XpReward;
                charData.Gold += currentEnemy.GoldReward;
                logMessage(`Defeated dummy! Gained ${currentEnemy.GoldReward} gold and ${currentEnemy.XpReward} xp!`);
                tryLevelUp(charData);
                updatePlayerInterface();
                clearInterval(globalTicker);
                setTimeout(() => {
                    currentEnemy = createEnemy(
                        "Dummy", charData.Level, 20*charData.Level, 0, 1, 
                        getRandom(0, 15), getRandom(0, 20)
                    );
                    updateEnemyInterface(currentEnemy.Health, currentEnemy.CurrentHealth);
                    globalTicker = setInterval(() => {
                        gameTick();
                    }, 500);
                }, 750)
            }
            break;
    }

}