$(document).ready(function () {
    $.get("/./pages/partials/rightbox.html", (data) => {
        $("#right-col").append(data);
        $("#train-button").on("click", (evt) => {

        });
        $("#fight-button").on("click", (evt) => {

        });
        $("#shop-button").on("click", (evt) => {

        });
    });
});