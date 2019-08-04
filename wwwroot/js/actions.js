$(document).ready(function () {
    $.get("/.././pages/partials/actions.html", (data) => {
        $("#actions-col").append(data);
        $("#attack-box").hide();
        $("#skills-box").hide();
        $("#spells-box").hide();
        $("#items-box").hide();

        $("#attack-button").on("click", (evt) => {
            if ($("#attack-box").is(":hidden")) {
                $("#attack-box").show();
                $("#skills-box").hide();
                $("#spells-box").hide();
                $("#items-box").hide();
                $("#attack-button-div").css("background", "rgba(85, 72, 156, 0.5");
                $("#skills-button-div").css("background", "");
                $("#spells-button-div").css("background", "");
                $("#items-button-div").css("background", "");

            }
        });
        $("#skills-button").on("click", (evt) => {
            if ($("#skills-box").is(":hidden")) {
                $("#attack-box").hide();
                $("#skills-box").show();
                $("#spells-box").hide();
                $("#items-box").hide();
                $("#attack-button-div").css("background", "");
                $("#skills-button-div").css("background", "rgba(85, 72, 156, 0.5");
                $("#spells-button-div").css("background", "");
                $("#items-button-div").css("background", "");
            }
        });
        $("#spells-button").on("click", (evt) => {
            if ($("#spells-box").is(":hidden")) {
                $("#attack-box").hide();
                $("#skills-box").hide();
                $("#spells-box").show();
                $("#items-box").hide();
                $("#attack-button-div").css("background", "");
                $("#skills-button-div").css("background", "");
                $("#spells-button-div").css("background", "rgba(85, 72, 156, 0.5)");
                $("#items-button-div").css("background", "");
            }
        });
        $("#items-button").on("click", (evt) => {
            if ($("#items-box").is(":hidden")) {
                $("#attack-box").hide();
                $("#skills-box").hide();
                $("#spells-box").hide();
                $("#items-box").show();
                $("#attack-button-div").css("background", "");
                $("#skills-button-div").css("background", "");
                $("#spells-button-div").css("background", "");
                $("#items-button-div").css("background", "rgba(85, 72, 156, 0.5");
            }
        });
        
    });
});