$(document).ready(function () {
    $.get("/./pages/partials/logger.html", (data) => {
        $("#logger-col").append(data);
    });
});

function logMessage(text, value, callback) {
    value = (typeof value === "undefined") ? "null" : value;
    callback = (typeof callback === "undefined") ? "null" : callback;

    let o = new Option(text, value);
    $("#log-box").prepend($(o));
    callback();
}