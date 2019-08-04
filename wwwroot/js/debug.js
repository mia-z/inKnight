$(document).ready(function () {
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
        $("#start-tick").on("click", (evt) => {
            globalTicker = setInterval(() => {
                gameTick();
            }, 500);
        });
    });
    
});