//JQuery
$('.control').on('click', function () {
  $('.control').removeClass('active-btn');
  $(this).addClass('active-btn');
});

// Posição do cursor customizado
const cursor = $('.cursor');
const cursor2 = $('.cursor-around');

$(document).on('mousemove', function (e) {
  cursor.css('left', e.pageX + "px");
  cursor.css('top', e.pageY + "px");
  cursor2.css('left', e.pageX + "px");
  cursor2.css('top', e.pageY + "px");

});

// Hover customizado
$('.magic-hover').hover(function () {
    cursor.css('width', '60px');
    cursor.css('height', '60px');
    cursor2.css('border', 'transparent');
  }, function () {
    cursor2.css('border', '1px solid #fff ');
    cursor.css('width', '12px');
    cursor.css('height', '12px');
  }
);

// Efeito de digitação da Home
var typed = new Typed('.animate', {
  strings: [
    "Felipe",
    "Developer"
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});