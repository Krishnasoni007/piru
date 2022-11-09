window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("navbar").style.boxShadow =
      "2px 0px 8px 0px #dbdbdb";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.boxShadow = "none";
  }
}
$(".navbar-toggler").click(function () {
  if ($(".navbar-toggler").hasClass("collapsed")) {
    $(".collapse-bg").css({
      display: "none",
    });
    $("body").attr("style", "overflow-y:auto");
  } else {
    $(".collapse-bg").css({
      display: "block",
    });
    if (
      (document.getElementById("navbar").style.backgroundColor = "transparent")
    ) {
      document.getElementById("navbar").style.backgroundColor = "white";
    }
    $("body").attr("style", "overflow-y:hidden");
  }
});

// click the overlay to hide the drawer
$(".collapse-bg").click(function () {
  $(".navbar-toggler").removeClass("collapsed");
  $(".navbar-collapse").removeClass("show");
  $(".collapse-bg").css({
    display: "none",
  });
});

var x = window.matchMedia("(min-width: 575px)");
myFunction(x);
x.addListener(myFunction);
function myFunction(x) {
  if (x.matches) {
    // this area is for hero section
    document.addEventListener("mousemove", function (e) {
      document.querySelectorAll(".hero-data-col").forEach(function (move) {
        let x = e.clientX / 50;
        let y = e.clientY / 50;
        move.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  }
}
// this area is for cunting effect
var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});