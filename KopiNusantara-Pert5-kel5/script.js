$(document).ready(function () {

    // Untuk FAQ supaya bisa di klik
    $(".faq-question").click(function () {

        var question = $(this);
        var answer = question.next(".faq-answer");

        // jika FAQ 1 dibuka, maka FAQ lain akan tertutup
        $(".faq-question")
            .not(question)
            .removeClass("active");

        $(".faq-answer")
            .not(answer)
            .slideUp(300);

        // untuk membuka atau menutup FAQ yang di klik
        question.toggleClass("active");
        answer.slideToggle(300);

    });

    // Untuk menambah dan mengurangi jumlah like
    $(".like-btn").click(function () {

        var button = $(this);
        var countElement = button.find(".like-count");
        var heartElement = button.find(".heart");
        var textElement = button.find(".like-text");

        var currentCount = parseInt(countElement.text());


        if (!button.hasClass("liked")) {

            // buat tambahin jumlah like
            currentCount++;

            countElement.text(currentCount);
            heartElement.text("♥");
            textElement.text("Disukai");

            button.addClass("liked");

        } else {

            // buat kurangin jumlah like
            currentCount--;

            countElement.text(currentCount);
            heartElement.text("♡");
            textElement.text("Suka");

            button.removeClass("liked");

        }

    });
});