$('.logo').on('click', function() {
    $('.logo').hide();
    $('.logo2').show().css('border', '5px solid dodgerblue').css('width', '310px').css('border-radius', '50%');
    $('.banner').css('background-color', 'CornflowerBlue').css('color', 'navy');
});
$('.logo2').on('click', function() {
    $('.logo2').hide();
    $('.logo').show();
    $('.banner').css('background-color', '#0a0066').css('color', 'white');
});
