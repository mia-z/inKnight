$(document).ready(function () {
    $.get("/.././pages/partials/selectbox.html", (data) => {
        $("#select-col").append(data);
        
    });
});