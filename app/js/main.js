$(document).ready(function(){

  $("#dropdown-button").on("click", function(){
    $(".mobile-nav").toggleClass("is-open");
    $(".clickable-overlay").toggleClass("on");
    $(this).toggleClass("become-x");
  });

  $(".clickable-overlay").on("click",function(){
    $(".mobile-nav").toggleClass("is-open");
    $(".clickable-overlay").toggleClass("on");
    $("#dropdown-button").toggleClass("become-x")
  });



  $("#video-menu-button").on("click", function(){
    $(".side-nav").toggleClass("open");
    $("#video-page-wrapper").toggleClass("pushed");
    $(".click-to-close").toggleClass("cover");
  });

  $(".click-to-close").on("click", function(){
    $(".side-nav").toggleClass("open");
    $("#video-page-wrapper").toggleClass("pushed");
    $(".click-to-close").toggleClass("cover");
  });

  $("#video-wrapper").fitVids()

  $( '.swipebox' ).swipebox({
      loopAtEnd: true
    }
  );

  if (window.matchMedia('(max-width: 650px)').matches) {
      $("#gallery").justifiedGallery({
          rowHeight : 150,
          lastRow : 'justify',
          margins : 20,
      });
    } else {
      $("#gallery").justifiedGallery({
          rowHeight : 350,
          lastRow : 'justify',
          margins : 50,
      });
    }
});
