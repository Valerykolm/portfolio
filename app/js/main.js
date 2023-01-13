$(document).ready(function () {
  var menuBtn = $('.top-nav_btn');
  var menu = $('.top-nav_menu');
  menuBtn.on($(menuBtn).click(function (e) { 
    e.preventDefault();
    menu.toggleClass('top-nav_menu__active');
  }));
})

$(document).ready(function (){
  $('.blocks').slick(
    {
      arrows: false,
      dots: true,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    }
  );

  var elem = document.querySelector('.calc-range');
  var init = new Powerange(elem, { min: 0, max: 30000, start: 0, hideRange: true, step: 100 });

  $('.calc-range').on('change', function(event) {
    $('.calc-sum_have_num').text($(this).val().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
  });

});

