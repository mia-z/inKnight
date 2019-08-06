$(document).ready(function () {
    $.get("/.././pages/partials/rightbox.html", (data) => {
        $("#right-col").append(data);
        $("#train-button").on("click", (evt) => {
            $("#train-box-container").show();
            $("#fight-box-container").hide();
            $("#shop-box-container").hide();
        });
        $("#fight-button").on("click", (evt) => {
            $("#train-box-container").hide();
            $("#fight-box-container").show();
            $("#shop-box-container").hide();
        });
        $("#shop-button").on("click", (evt) => {
            $("#fight-box-container").hide();
            $("#train-box-container").hide();
            $("#shop-box-container").show();
        });
    });
});
