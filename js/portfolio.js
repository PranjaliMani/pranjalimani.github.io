$(function(){
    $('.portfolioslider').slick({
        arrows: false,
        adaptiveHeight: true
    });

    // Custom carousel nav
    $('.carousel-prev').click(function(){ 
      $(this).parent().find('.slick-slider').slick('slickPrev');
    } );
    
    $('.carousel-next').click(function(e){
      e.preventDefault(); 
      $(this).parent().find('.slick-slider').slick('slickNext');
    });    
  });

  