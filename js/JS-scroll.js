$(document).ready(function(){

    // Delay in scroll

    var RandomNumber1 = Math.floor(Math.random() * 100) + 1

    var RandomNumber2 = Math.floor(Math.random() * 100) + 1

    var RandomNumber3 = Math.floor(Math.random() * 100) + 1

    var RandomNumber4 = Math.floor(Math.random() * 100) + 1

    var RandomNumber5 = Math.floor(Math.random() * 100) + 1

    var RandomNumber6 = Math.floor(Math.random() * 100) + 1

    var RandomNumber7 = Math.floor(Math.random() * 100) + 1

    var RandomNumber8 = Math.floor(Math.random() * 100) + 1

    var RandomNumber9 = Math.floor(Math.random() * 100) + 1

    var RandomNumber10 = Math.floor(Math.random() * 100) + 1

    var RandomNumber11 = Math.floor(Math.random() * 100) + 1

    var RandomNumber12 = Math.floor(Math.random() * 100) + 1

    var RandomNumber13 = Math.floor(Math.random() * 100) + 1

    var RandomNumber14 = Math.floor(Math.random() * 100) + 1

    var RandomNumber15 = Math.floor(Math.random() * 100) + 1

    var RandomNumber16 = Math.floor(Math.random() * 100) + 1

    var RandomNumber17 = Math.floor(Math.random() * 100) + 1

    var RandomNumber18 = Math.floor(Math.random() * 100) + 1

    var RandomNumber19 = Math.floor(Math.random() * 100) + 1

    var RandomNumber20 = Math.floor(Math.random() * 100) + 1

    $("html, body").mousewheel(function (delta, deltaX, deltaY) {

      $(".img-bg .img-bg-1").css('margin-top', (deltaX * RandomNumber1) + 'px');

      $(".img-bg .img-bg-2").css('margin-top', (deltaX * RandomNumber2) + 'px');

      $(".img-bg .img-bg-3").css('margin-top', (deltaX * RandomNumber3) + 'px');

      $(".img-bg .img-bg-4").css('margin-top', (deltaX * RandomNumber4) + 'px');

      $(".img-bg .img-bg-5").css('margin-top', (deltaX * RandomNumber5) + 'px');

      $(".img-bg .img-bg-6").css('margin-top', (deltaX * RandomNumber6) + 'px');

      $(".img-bg .img-bg-7").css('margin-top', (deltaX * RandomNumber7) + 'px');

      $(".img-bg .img-bg-8").css('margin-top', (deltaX * RandomNumber8) + 'px');

      $(".img-bg .img-bg-9").css('margin-top', (deltaX * RandomNumber9) + 'px');

      $(".img-bg .img-bg-10").css('margin-top', (deltaX * RandomNumber10) + 'px');

      $(".img-bg .img-bg-11").css('margin-top', (deltaX * RandomNumber11) + 'px');

      $(".img-bg .img-bg-12").css('margin-top', (deltaX * RandomNumber12) + 'px');

      $(".img-bg .img-bg-13").css('margin-top', (deltaX * RandomNumber13) + 'px');

      $(".img-bg .img-bg-14").css('margin-top', (deltaX * RandomNumber14) + 'px');

      $(".img-bg .img-bg-15").css('margin-top', (deltaX * RandomNumber15) + 'px');

      $(".img-bg .img-bg-16").css('margin-top', (deltaX * RandomNumber16) + 'px');

      $(".img-bg .img-bg-17").css('margin-top', (deltaX * RandomNumber17) + 'px');

      $(".img-bg .img-bg-18").css('margin-top', (deltaX * RandomNumber18) + 'px');

      $(".img-bg .img-bg-19").css('margin-top', (deltaX * RandomNumber19) + 'px');

      $(".img-bg .img-bg-20").css('margin-top', (deltaX * RandomNumber20) + 'px');

      

      setTimeout(function() {

        $(".img-bg *").css('margin-top', 0 + 'px');

      }, 1000);

    });

  

    

  

    // Touch scroll dalay

    var ts;

    var TouchScrollCounterDown = 0;

    var TouchScrollCounterUp = 0;

  

    $(document).bind('touchstart', function (e){

       ts = e.originalEvent.touches[0].clientY;

    });

    

    $(document).bind('touchend', function (e){

       var te = e.originalEvent.changedTouches[0].clientY;

       if(ts > te+5){

        // console.log(++TouchScrollCounterDown);

        $(".img-bg .img-bg-1").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber1 / 10)) + 'px');

        $(".img-bg .img-bg-2").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber2 / 10)) + 'px');

        $(".img-bg .img-bg-3").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber3 / 10)) + 'px');

        $(".img-bg .img-bg-4").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber4 / 10)) + 'px');

        $(".img-bg .img-bg-5").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber5 / 10)) + 'px');

        $(".img-bg .img-bg-6").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber6 / 10)) + 'px');

        $(".img-bg .img-bg-7").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber7 / 10)) + 'px');

        $(".img-bg .img-bg-8").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber8 / 10)) + 'px');

        $(".img-bg .img-bg-9").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber9 / 10)) + 'px');

        $(".img-bg .img-bg-10").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber10 / 10)) + 'px');

        $(".img-bg .img-bg-11").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber11 / 10)) + 'px');

        $(".img-bg .img-bg-12").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber12 / 10)) + 'px');

        $(".img-bg .img-bg-13").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber13 / 10)) + 'px');

        $(".img-bg .img-bg-14").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber14 / 10)) + 'px');

        $(".img-bg .img-bg-15").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber15 / 10)) + 'px');

        $(".img-bg .img-bg-16").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber16 / 10)) + 'px');

        $(".img-bg .img-bg-17").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber17 / 10)) + 'px');

        $(".img-bg .img-bg-18").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber18 / 10)) + 'px');

        $(".img-bg .img-bg-19").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber19 / 10)) + 'px');

        $(".img-bg .img-bg-20").css('margin-top', - ((++TouchScrollCounterDown) / (RandomNumber20 / 10)) + 'px');

        

        setTimeout(function() {

          $(".img-bg *").css('margin-top', 0 + 'px');

        }, 1000);

      

       }else if(ts < te-5){

        // console.log(++TouchScrollCounterUp);

        $(".img-bg .img-bg-1").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber1 / 10)) + 'px');

        $(".img-bg .img-bg-2").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber2 / 10)) + 'px');

        $(".img-bg .img-bg-3").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber3 / 10)) + 'px');

        $(".img-bg .img-bg-4").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber4 / 10)) + 'px');

        $(".img-bg .img-bg-5").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber5 / 10)) + 'px');

        $(".img-bg .img-bg-6").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber6 / 10)) + 'px');

        $(".img-bg .img-bg-7").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber7 / 10)) + 'px');

        $(".img-bg .img-bg-8").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber8 / 10)) + 'px');

        $(".img-bg .img-bg-9").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber9 / 10)) + 'px');

        $(".img-bg .img-bg-10").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber10 / 10)) + 'px');

        $(".img-bg .img-bg-11").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber11 / 10)) + 'px');

        $(".img-bg .img-bg-12").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber12 / 10)) + 'px');

        $(".img-bg .img-bg-13").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber13 / 10)) + 'px');

        $(".img-bg .img-bg-14").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber14 / 10)) + 'px');

        $(".img-bg .img-bg-15").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber15 / 10)) + 'px');

        $(".img-bg .img-bg-16").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber16 / 10)) + 'px');

        $(".img-bg .img-bg-17").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber17 / 10)) + 'px');

        $(".img-bg .img-bg-18").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber18 / 10)) + 'px');

        $(".img-bg .img-bg-19").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber19 / 10)) + 'px');

        $(".img-bg .img-bg-20").css('margin-top', ((++TouchScrollCounterUp) / (RandomNumber20 / 10)) + 'px');

        

        setTimeout(function() {

          $(".img-bg *").css('margin-top', 0 + 'px');

        }, 1000);

       }

    });







    // Scroll Scroll-arrow

    $("#Scroll-arrow").click(function() {

      $(".img-bg .img-bg-1").css('margin-top', - (3 * RandomNumber1) + 'px');

      $(".img-bg .img-bg-2").css('margin-top', - (3 * RandomNumber2) + 'px');

      $(".img-bg .img-bg-3").css('margin-top', - (3 * RandomNumber3) + 'px');

      $(".img-bg .img-bg-4").css('margin-top', - (3 * RandomNumber4) + 'px');

      $(".img-bg .img-bg-5").css('margin-top', - (3 * RandomNumber5) + 'px');

      $(".img-bg .img-bg-6").css('margin-top', - (3 * RandomNumber6) + 'px');

      $(".img-bg .img-bg-7").css('margin-top', - (3 * RandomNumber7) + 'px');

      $(".img-bg .img-bg-8").css('margin-top', - (3 * RandomNumber8) + 'px');

      $(".img-bg .img-bg-9").css('margin-top', - (3 * RandomNumber9) + 'px');

      $(".img-bg .img-bg-10").css('margin-top', - (3 * RandomNumber10) + 'px');

      $(".img-bg .img-bg-11").css('margin-top', - (3 * RandomNumber11) + 'px');

      $(".img-bg .img-bg-12").css('margin-top', - (3 * RandomNumber12) + 'px');

      $(".img-bg .img-bg-13").css('margin-top', - (3 * RandomNumber13) + 'px');

      $(".img-bg .img-bg-14").css('margin-top', - (3 * RandomNumber14) + 'px');

      $(".img-bg .img-bg-15").css('margin-top', - (3 * RandomNumber15) + 'px');

      $(".img-bg .img-bg-16").css('margin-top', - (3 * RandomNumber16) + 'px');

      $(".img-bg .img-bg-17").css('margin-top', - (3 * RandomNumber17) + 'px');

      $(".img-bg .img-bg-18").css('margin-top', - (3 * RandomNumber18) + 'px');

      $(".img-bg .img-bg-19").css('margin-top', - (3 * RandomNumber19) + 'px');

      $(".img-bg .img-bg-20").css('margin-top', - (3 * RandomNumber20) + 'px');



      setTimeout(function() {

        $(".img-bg *").css('margin-top', 0 + 'px');

      }, 1000);

    });



});