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

    $('#buttontext').on('click',function(){
      $('.abcRioButtonLightBlue').click();
      console.log('clicked');
    });
    $('#btnSignout').on('click',function(){
      console.log('clicked');
      signOutme();
    });
    // signOutme();
    function signOutme(){
      var auth2 = window.gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
      });
    }
})
