// Tombol like
$(document).ready(function () {
    $(".like-btn").click(function () {
        var button = $(this);
        var countElement = button.find(".like-count");
        var heartElement = button.find(".heart");
        var textElement = button.find(".like-text");

        var currentCount = parseInt(countElement.text());

        if (!button.hasClass("liked")) {
            currentCount++;
            countElement.text(currentCount);
            heartElement.text("♥");
            textElement.text("Disukai");
            button.addClass("liked");
        } else {
            currentCount--;
            countElement.text(currentCount);
            heartElement.text("♡");
            textElement.text("Suka");
            button.removeClass("liked");
        }
    });
});