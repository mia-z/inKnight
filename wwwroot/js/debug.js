$(document).ready(function () {
    $.get("/./pages/partials/debug.html", (data) => {
        $("#temp-stuff").append(data);
        $("#delete-char").on("click", (evt) => {
            Cookies.remove("char");
        });
        $("#hide-box").on("click", (evt) => {
            $("#debug-box").css("display", "none");
        });
        $("#stop-tick").on("click", (evt) => {
            clearInterval(globalTicker);
        });
    }).catch((e) => {
        console.log("local loading failed, trying another DIR - " + e);
        $.get("/inKnight/pages/partials/debug.html", (data) => {
            $("#temp-stuff").append(data);
            $("#delete-char").on("click", (evt) => {
                Cookies.remove("char");
            });
            $("#hide-box").on("click", (evt) => {
                $("#debug-box").css("display", "none");
            });
            $("#stop-tick").on("click", (evt) => {
                clearInterval(globalTicker);
            });
        });
    });
});