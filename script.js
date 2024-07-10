$(document).ready(function($) {
    $('.header__link--window').click(function() {
        $('.outside-modal-window').fadeIn();
        return false;
    });

    // клик по кнопке - ссылке "Закрыть"
    $('.modal_window_btn').click(function() {
        $(this).parents('.outside-modal-window').fadeOut();
        return false;
    });

    // закрытие по клавише Esc
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.outside-modal-window').fadeOut();
        }
    });

    // Клик по фону, но не по окну
    $('.outside-modal-window').click(function(e) {
        if ($(e.target).closest('.modal-window').length == 0) {
            $(this).fadeOut();
        }
    });
});


