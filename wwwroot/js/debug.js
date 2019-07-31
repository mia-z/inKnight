$(document).ready(function () {
    $.get("/./pages/partials/debug.html", (data) => {
        $("#temp-stuff").append(data);
        $("#delete-char").on("click", (evt) => {
            Cookies.remove("char");
        });
        $("#hide-box").on("click", (evt) => {
            $("#debug-box").css("display", "none");
        });
    });
});