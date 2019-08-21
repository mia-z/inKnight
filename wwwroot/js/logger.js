$(document).ready(function () {
    $.get("/./pages/partials/logger.html", (data) => {
        $("#logger-col").append(data);
        logLines = $("#logger-col")[0].children[0].children[0].children[0].children;
    });
});

var logLines;

function logMessage(text, value, color, callback) {
    value = (typeof value === undefined) ? undefined : value;
    color = (typeof color === undefined) ? undefined : color;
    callback = (typeof callback === undefined) ? undefined : callback;

    let o = new Option(text, value);
    if (color !== undefined) 
        $(o).css("color", color);
    $("#log-box").prepend($(o));
    if (logLines.length > 20) {
        logLines[logLines.length-1].remove();
    }
    if (callback !== undefined) callback();
}