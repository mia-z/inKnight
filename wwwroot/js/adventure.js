$(document).ready(function () {
    $.get("/./pages/modals/adventure_fight_modal.html", (data) => {
        $("#modal-container").append(data);
        $("#adventure-modal").modal({
            backdrop: "static",
            keyboard: false,
            show: true
        });
        $("#adventure-modal").on("shown.bs.modal", (evt) => {
            stopGame();
        });
        $("#adventure-modal").on("hidden.bs.modal", (evt) => {
            startGame();
        });

        enemyBar = $("#enemy-progress");
        playerBar = $("#player-progress");

        advPlayerAttackButton = $("#adv-attack-button");
        advPlayerAttackButton.on("click", (evt) => {
            disableButton(advPlayerAttackButton);
            playerBar.css("width", "0%");
            playerTickProgress = 0;
            startPlayerTick();
            startEnemyTick();
        });
        disableButton(advPlayerAttackButton);
    });
    startPlayerTick();
    startEnemyTick();
});

const BASE_SPEED = 30;

var enemyBar, playerBar;

var enemyTicker;
var enemyTickProgress = 0;
var playerTicker;
var playerTickProgress = 0;

function startPlayerTick() {
    playerTicker = setInterval(() => {
        playerTickProgress++;
        playerTick(playerTickProgress);
    }, BASE_SPEED);
}

function playerTick(t) {
    console.log(t);
    if (t == 100) {
        clearInterval(enemyTicker);
        clearInterval(playerTicker);
        enableButton(advPlayerAttackButton);
    }
    playerBar.css("width", t + "%");
}

function startEnemyTick() {
    enemyTicker = setInterval(()=> {
        enemyTickProgress++;
        enemyTick(enemyTickProgress);
    }, BASE_SPEED*2.5);
}

function enemyTick(t) {
    console.log(t);
    if (t == 100) {
        console.log("enemy attacked! Ouch!");
        enemyTickProgress = 0;
        enemyBar.css("width", "0%");
        clearInterval(enemyTicker);
        setTimeout(startEnemyTick, 300);
    }
    enemyBar.css("width", t + "%");
}

function disableButton(button) {
    button.attr("disabled", true);
}

function enableButton(button) {
    button.attr("disabled", false);
}