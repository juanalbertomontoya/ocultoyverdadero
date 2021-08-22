/* Detecta el scroll para cambiar estilos */

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll > 10) {
    $(".menu").addClass("scroll");
  } else {
    $(".menu").removeClass("scroll");
  }
});

/* Anima los botones al hover */

$(".boton-menu").hover(function () {
  $(this).toggleClass("on");
});

/* Activa el boton mobile */

$(".boton-menu-mobile").click(function () {
  $(".botones-menu").toggleClass("on");
});
