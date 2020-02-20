$wrap = $('.wrapper');
$act = $wrap.find('.box');
setTimeout(function () {
    $act.removeClass('select');
}, 150)

$('li').on('click', function () {
    $(this).addClass('active');
    $wrap.addClass('wrapper-active');
})


$('.close').on('click', function (e) {
    e.stopPropagation();
    $wrap.removeClass('wrapper-active');
    $('.active').removeClass('active');
})

