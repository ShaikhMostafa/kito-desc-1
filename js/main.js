$('a').not('.ac_footer a').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop:
            $('.order').offset().top
    }, 500);
});

$(function () {
    $(document).on('ready', function () {
        $('body .footer-links a').off("click");
        $('body .footer-links a').each(function () {
            var $this = $(this),
                link = $this.eq(0);
            filePath = $this.attr('data-href');
            link.attr('href', filePath);
        });
    });
});