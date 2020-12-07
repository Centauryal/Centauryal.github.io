//========================
//PRELOADER
//========================
$(window).load(function() {
  // makes sure the whole site is loaded
  $("#status").fadeOut();
  $("#preloader")
    .delay(150)
    .fadeOut("slow");
  
  $("body")
    .delay(150)
    .css({ overflow: "visible" });
});
//========================
//CUSTOM SCROLLBAR
//========================
$("html").niceScroll({
  mousescrollstep: 70,
  cursorcolor: "#ea9312",
  cursorwidth: "5px",
  cursorborderradius: "10px",
  cursorborder: "none"
});

//========================
//SMOOTHSCROLL
//========================
$(function() {
  $("a[href*=#]:not([href=#])").click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
});

//========================
//NAVBAR
//========================
(function($) {
  $(document).ready(function() {
    
    $(".navbar").hide();

    
    $(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {
          $(".navbar")
            .removeClass("animated fadeOutUp")
            .addClass("animated fadeInDown")
            .fadeIn();
        } else {
          $(".navbar")
            .removeClass("animated fadeInDown")
            .addClass("animated fadeOutUp")
            .fadeOut();
        }
      });
    });
  });

  // Initiate venobox lightbox
  $(document).ready(function() {
    $('.venobox').venobox();
  });

})(jQuery);

//========================
//icon hover effect
//========================
$("#services img").hover(
  function() {
    $(this).addClass("animated pulse");
  },
  function() {
    $(this).removeClass("animated pulse");
  }
);
