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

var currentActivity, eName, eHp, eMaxHp;