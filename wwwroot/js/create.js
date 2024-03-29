$(document).ready(function () {
    if (Cookies.get("char") === undefined) {
        $.get("/./pages/partials/create.html", (data) => {
            $("#temp-stuff").append(data);
            $("#save-char").on("click", (evt) => {
                validateCharacter();
            });
        });
    } else {
        $.get("/./pages/partials/create.html", (data) => {
            $("#temp-stuff").append(data);
            $("#create-box").empty();
        });
        charData = JSON.parse(Cookies.get("char"));
        console.log(charData.SkillPoints);
        startGame();
    }
});

function validateCharacter() {
    if ($("#name-input").val().length < 1 || $("#name-input").val().length > 16) {
        $("#create-box").append("" +
            "<div class='row'>" +
                "<div class='alert alert-danger col-sm-6 fade show' role='alert' id='name-alert-box'>" +
                    "Name length must be between 1 and 16" +
                "</div>" +
            "</div>");
        $("#save-char").attr("disabled", "true");
        setTimeout(() => {
            $("#save-char").removeAttr("disabled");
            $("#name-alert-box").alert("close");
        }, 3000);
        return;
    }
    createChar();
}

function createChar() {
    charData = {
        "Name" : $("#name-input").val(),
        "ClassType" : $("#class-select option:selected").text(),
        "Level" : 1,
        "Experience" : xpTable[1],
        "Gold" : 0,
        "Health" : 10,
        "CurrentHealth" : 10,
        "Strength" : 1,
        "Defence" : 1,
        "Items" : [],
        "CurrentTick" : 0,
        "SkillPoints" : 0
    }
    Cookies.set("char", charData);
    console.log(Cookies.get("char"));
    $("#create-box").empty();
}