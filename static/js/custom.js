$(document).ready(function(){
    var widthbox;
    widthbox = $(window).width();
    widthChecker(widthbox)
    $(window).on('resize',function(){
      widthbox = $(window).width();
      widthChecker(widthbox)
    })
    function widthChecker(widthbox){
      if(widthbox <= 991){
        $('.navbar-nav .nav-item').on('click',function(){
              $('.navbar-toggler').trigger('click');
        })
      }
    }
})
