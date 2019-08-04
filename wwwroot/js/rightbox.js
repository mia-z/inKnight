$(document).ready(function () {
    $.get("/inKnight/pages/partials/rightbox.html", (data) => {
        $("#right-col").append(data);
        $("#train-button").on("click", (evt) => {
            currentMode = "train";
        });
        $("#fight-button").on("click", (evt) => {

        });
        $("#shop-button").on("click", (evt) => {
            $.get("/.././pages/partials/menus/shop_menu.html", (data) => {
                $("#select-box-container").append(data);
                itemList.forEach((item, index) => {
                    $("#shop-box").append("" +
                    "<button class='btn btn-danger' id='item-button-" + index +"'>" + item.Name + "</button>");
                    $("#item-button-"+index).on("click", (evt) => {
                        if (charData.Gold < itemList[index].Price) {
                            logMessage(`You don't have enough for that!`);
                        } else {
                            logMessage(`You bought ${item.Name} for ${item.Price}`);
                            charData.Gold -= item.Price;
                            updateInventory(index);
                            updatePlayerInterface();
                        }
                    });
                });
            });
        });
    });
});
