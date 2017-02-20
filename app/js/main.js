$(document).ready(function(){

  $("#dropdown-button").on("click", function(){
    $(".mobile-nav").toggleClass("is-open");
    $(".clickable-overlay").toggleClass("on");
    $(this).toggleClass("become-x");
  });


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


    // $(window).on("resize",function(){
    //    if($(window).width()<650){
    //      $("#gallery").justifiedGallery({
    //          rowHeight : 150,
    //          lastRow : 'justify',
    //          margins : 50,
    //      });  //
    //    } else {
    //      $("#gallery").justifiedGallery({
    //          rowHeight : 400,
    //          lastRow : 'justify',
    //          margins : 50,
    //      });  //...
    //    }
    // });
});
