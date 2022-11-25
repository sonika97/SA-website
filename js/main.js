
function changeBackground(){
  if (Window.scrollY > window.innerHeight/2) {
    document.body.classList.add('bg-color');
  }
  else{
    document.body.classList.remove('bg-color');
  }
}
 window.addEventListener('scroll', changeBackground);
  
  /*Testimonials slider*/

  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 1,
        spaceBetween: 20
      }
    }
  });

   /* Animation on scroll*/
   
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

//counting number

jQuery(function($){
    scrollTrigger( $('.counter'), countUp );
    $(document).scroll(function() {
        scrollTrigger( $('.counter'), countUp );
    });
});

var countUp = function() {
    $('.counter').each(function() {
        var $this = $(this);
        var countTo = $this.attr('data-count');
        var decimal = $this.attr('data-decimal');
        var dataBefore = ($this.attr('data-before')) ? $this.attr('data-before') : '';
        var dataAfter = ($this.attr('data-after')) ? $this.attr('data-after') : '';

        $({ countNum : $this.text() }).animate({
            countNum: countTo
        },
        {
            duration: 3000,
            easing: 'linear',
            step: function() {
                (decimal == 0) ? decimalNum = 1 : decimalNum = Math.pow(10,decimal);
                $this.text(dataBefore + Math.round(this.countNum*decimalNum)/decimalNum + dataAfter);
        },
            complete: function() {
                $this.text(dataBefore + Math.round(this.countNum*decimalNum)/decimalNum + dataAfter);
            }
        });  
        $this.animate({ opacity: 1 }, 3000);
    });
}

var scrollTrigger = function(scrollElement, scrollAction) {
    var nm = $("html").scrollTop();
    var nw = $("body").scrollTop();
    var n = (nm > nw ? nm : nw);
    
    var element = scrollElement;
    var elementTop = element.offset().top;
    var screenHeight = $(window).height();
    
    if( n + screenHeight > elementTop) {
        if( $(element).hasClass('scrollTrigger') == true ) {
            scrollAction();
        }
        $(element).removeClass('scrollTrigger');
    }
}
