$(document).ready(function () {
    $.get("/.././pages/partials/selectbox.html", (data) => {
        $("#select-col").append(data);
        $("#train-box-container").hide();
        $("#fight-box-container").hide();
        $("#shop-box-container").hide();
        itemList.forEach((item, index) => {
            $("#shop-box").append("" +
            "<button class='btn btn-danger' id='item-buy-button-" + index +"'>" + item.Name + "</button>");
            $("#item-buy-button-"+index).on("click", (evt) => {
                if (charData.Gold < itemList[index].Price) {
                    logMessage(`You don't have enough for that!`);
                } else {
                    logMessage(`You bought ${item.Name} for ${item.Price}`);
                    charData.Gold -= item.Price;
                    updateInventory(index);
                    showItems();
                    updatePlayerInterface();
                }
            });
        });
        $("#adventure-button").on("click", (evt) => {
            $("#adventure-modal").modal("show");
        });
    });
});