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

});