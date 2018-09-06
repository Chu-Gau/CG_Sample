$(document).ready(function () {
    $('.dropdown-toggle').click(function () {
        $(this).find('+.dropdown-menu').slideToggle(200);

    });
    $(window).on('click', function (e) {
        menu = $(e.target).closest('.dropdown');
        $('.dropdown').each(function () {
            if(menu[0] != this) 
                $(this).find('.dropdown-menu').slideUp(200); //effect
        });
    });
});
