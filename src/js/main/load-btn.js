$(document).ready(function () {
    $(".load-btn").on('click', function (e) {
        $(this).find('.nav__icon').removeClass("flaticon-plus");
        $(this).find('.nav__icon').addClass("fas fa-circle-notch fa-spin");
    });
});