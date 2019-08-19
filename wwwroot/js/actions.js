$(document).ready(function () {
    $.get("/.././pages/partials/actions.html", (data) => {
        $("#actions-col").append(data);
        $("#attack-box-wrapper").hide();
        $("#skills-box-wrapper").hide();
        $("#spells-box-wrapper").hide();
        $("#items-box-wrapper").hide();

        $("#attack-button").on("click", (evt) => {
            if ($("#attack-box-wrapper").is(":hidden")) {
                $("#attack-box-wrapper").show();
                $("#skills-box-wrapper").hide();
                $("#spells-box-wrapper").hide();
                $("#items-box-wrapper").hide();
                $("#attack-button-div").css("background", "rgba(85, 72, 156, 0.5");
                $("#skills-button-div").css("background", "");
                $("#spells-button-div").css("background", "");
                $("#items-button-div").css("background", "");
                $(".right-action-box-wrapper").css("background", "rgba(85, 72, 156, 0.5)");
            }
        });
        $("#skills-button").on("click", (evt) => {
            if ($("#skills-box-wrapper").is(":hidden")) {
                $("#attack-box-wrapper").hide();
                $("#skills-box-wrapper").show();
                $("#spells-box-wrapper").hide();
                $("#items-box-wrapper").hide();
                $("#attack-button-div").css("background", "");
                $("#skills-button-div").css("background", "rgba(85, 72, 156, 0.5");
                $("#spells-button-div").css("background", "");
                $("#items-button-div").css("background", "");
                $(".right-action-box-wrapper").css("background", "rgba(85, 72, 156, 0.5)");
            }
        });
        $("#spells-button").on("click", (evt) => {
            if ($("#spells-box-wrapper").is(":hidden")) {
                $("#attack-box-wrapper").hide();
                $("#skills-box-wrapper").hide();
                $("#spells-box-wrapper").show();
                $("#items-box-wrapper").hide();
                $("#attack-button-div").css("background", "");
                $("#skills-button-div").css("background", "");
                $("#spells-button-div").css("background", "rgba(85, 72, 156, 0.5)");
                $("#items-button-div").css("background", "");
                $(".right-action-box-wrapper").css("background", "rgba(85, 72, 156, 0.5)");
            }
        });
        $("#items-button").on("click", (evt) => {
            if ($("#items-box-wrapper").is(":hidden")) {
                $("#attack-box-wrapper").hide();
                $("#skills-box-wrapper").hide();
                $("#spells-box-wrapper").hide();
                $("#items-box-wrapper").show();
                $("#attack-button-div").css("background", "");
                $("#skills-button-div").css("background", "");
                $("#spells-button-div").css("background", "");
                $("#items-button-div").css("background", "rgba(85, 72, 156, 0.5");
                $(".right-action-box-wrapper").css("background", "rgba(85, 72, 156, 0.5)");
            }
            showItems();
        });
    });
});

function showItems() {
    $("#items-box").empty();
    if(charData.Items.length < 1) {
        $("#items-box").append("You have no items!");
    }
    charData.Items.forEach((value, index) => {
        $("#items-box").append("" +
        "<button class='btn btn-danger inventory-button'" + 
        "id='inventory-button-" + index + "'>" +
            itemList[value.ID].Name + ": "  + value.Quantity +
        "</button>");
        $("#inventory-button-"+index).on("click", (evt) => {
            let id = charData.Items[index].ID;
            if (useItem(id)) removeItem(index);
            showItems();
        });
    });
}