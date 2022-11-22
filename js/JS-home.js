$(document).ready(function () {

    // Eventi ad ogni viewport

    ViewportHeight1 = window.innerHeight;

    ViewportWidth1 = window.innerWidth;

    ViewportHeight2 = window.innerHeight * 2;

    

    // Ricaricamento Viewport Height al Resize

    $(window).resize(function(){

        ViewportHeight1 = window.innerHeight;

        ViewportWidth1 = window.innerWidth;

        ViewportHeight2 = window.innerHeight * 2;

    });

    

    // Grid Fill

    $(window).scroll(function(){

        var fromTop = window.pageYOffset - (window.innerHeight * 1.25);

        var fromTop18 = (window.pageYOffset - (window.innerHeight * 1.25)) * 1.8;  

        var fromTop19 = (window.pageYOffset - (window.innerHeight * 1.25)) * 1.9;

        var fromTop2 = (window.pageYOffset - (window.innerHeight * 1.25)) * 2;

        $("#Home-2-viewport-hover").css({

            opacity: "calc(" + (fromTop / ViewportHeight2) + ")"});

        $(".grid-fill-1").css('margin-top', ((ViewportHeight2 / 0.75) - fromTop) + 'px');

        $(".grid-fill-1").css({

            width: "calc(100% + " + (1.5 * (1 * (fromTop / ViewportHeight2))) + "rem)"});

        

        $(".grid-fill-2").css('margin-top', ((ViewportHeight2 / 0.85) - fromTop) + 'px');

        $(".grid-fill-2").css({

            width: "calc(100% + " + (1.5 * (1 * (fromTop / ViewportHeight2))) + "rem)"});

    

        $(".grid-fill-3").css('margin-top', ((ViewportHeight2 / 1) - fromTop) + 'px');

        $(".grid-fill-3").css({

            width: "calc(100% + " + (1.5 * (1 * (fromTop / ViewportHeight2))) + "rem)"});

    

        $(".grid-fill-4").css('margin-top', ((ViewportHeight2 / 1.2) - fromTop) + 'px');

        $(".grid-fill-4").css({

            width: "calc(100% + " + (1.5 * (1 * (fromTop / ViewportHeight2))) + "rem)"});

    

        $(".grid-fill-5").css('margin-top', ((ViewportHeight2 / 1.3) - fromTop) + 'px');

        $(".grid-fill-5").css({

            width: "calc(100% + " + (1.5 * (1 * (fromTop / ViewportHeight2))) + "rem)"});

    

        $(".grid-fill-6").css('margin-top', ((ViewportHeight2 / 1.4) - fromTop) + 'px');

        $(".grid-fill-6").css({

            width: "calc(100% + " + (1.5 * (1 * (fromTop / ViewportHeight2))) + "rem)"});

    

        $(".grid-fill-7").css('margin-top', ((ViewportHeight2 / 1.5) - fromTop) + 'px');

        $(".grid-fill-7").css({

            width: "calc(100% + " + (1.5 * (1 * (fromTop / ViewportHeight2))) + "rem)"});

    

        $(".grid-fill-8").css('margin-top', ((ViewportHeight2) - fromTop19) + 'px');

        $(".grid-fill-8").css({

            width: "calc(100% + " + (1.5 * (1 * (fromTop / ViewportHeight2))) + "rem)"});

    

        $(".grid-fill-9").css('margin-top', ((ViewportHeight2/ 1.8) - fromTop) + 'px');

        $(".grid-fill-9").css({

            width: "calc(100% + " + (1.5 * (1 * (fromTop / ViewportHeight2))) + "rem)"});

    

        $(".grid-fill-10").css('margin-top', ((ViewportHeight2) - fromTop18) + 'px');

        $(".grid-fill-10").css({

            width: "calc(100% + " + (1.5 * (1 * (fromTop / ViewportHeight2))) + "rem)"});

    

        $(".grid-fill-11").css('margin-top', ((ViewportHeight2 / 1.9) - fromTop) + 'px');

        $(".grid-fill-11").css({

            width: "calc(100% + " + (1.5 * (1 * (fromTop / ViewportHeight2))) + "rem)"});

    

        $(".grid-fill-12").css('margin-top',  + ((ViewportHeight2) - fromTop2) + 'px');

        $(".grid-fill-12").css({

            width: "calc(100% + " + (5 * (1 * (fromTop / ViewportHeight2))) + "vw)"});

    });

    

    // Graphic-rotate-lines-Swiss line stroke

    $(window).scroll(function(){

        var fromTop = window.pageYOffset;

        $("#Graphic-rotate-lines-Swiss line").css('stroke-array', (fromTop + 10) + 'px');

        $("#Graphic-rotate-lines-Swiss line").css('stroke-dashoffset', ((fromTop / 3) + fromTop + 10) + 'px');

    });

    

    // Japan circle

    $(window).scroll(function(){

        var fromTop = window.pageYOffset;

        $("#Japan-circle").css('margin-top', (- ViewportHeight1 + fromTop / 10.5) + 'px');

    });

    

    // Japan-circles circle stroke

    $(window).scroll(function(){

        var fromTop = window.pageYOffset;

        $("#Japan-circles circle").css('stroke-dashoffset', ((fromTop / 5) + fromTop + 10) + 'px');

    });

    

    // Japan-concept-square

    $(window).scroll(function(){

        var fromTop = window.pageYOffset;

        $("#Japan-concept-square").css('margin-top', (- ViewportHeight1 + fromTop / 10.5) + 'px');

    });

    

    // Japan-project-line svg line

    $(window).scroll(function(){

        var fromTop = window.pageYOffset;

        $("#Japan-project-line svg line").css('stroke-dashoffset', ((fromTop / 5) + fromTop + 10) + 'px');

    });

    

    // Japan-project-line svg line

    $(window).scroll(function(){

        var fromTop = window.pageYOffset;

        $("#Japan-project-line svg circle").css('stroke-dashoffset', ((fromTop / 5) + fromTop + 10) + 'px');

    });

    

    // Lottie-Japan-origami-1

    LottieInteractivity.create({

        player: '#Lottie-Japan-origami-1',

        mode: 'scroll',

        actions: [

            {

                visibility:[0,1],

                type: 'seek',

                frames: [0, 400],

            },

        ]

    });



    // Lottie-Book-grid

    LottieInteractivity.create({

        player: '#Lottie-Book-grid',

        mode: 'scroll',

        container: "#Home-17-viewport-trigger",

        actions: [

            {

                visibility:[0,1],

                type: 'play',

                frames: [0, 120],

            },

        ]

    });

    

    // SVG Path length

    /*var myPath = document.getElementById("Path-length");

    var length = myPath.getTotalLength();

    console.log(length);*/

    

    // Home-section-indicator

    function LottieBookGrid() {

        ViewportHeight = window.innerHeight;

        var Home17Viewport = $('#Home-17-viewport').offset();

        

        if(($(window).scrollTop() > (Home17Viewport.top  - ViewportHeight)) && ($(window).scrollTop() < (Home17Viewport.top + ViewportHeight))){

            $('#Lottie-Book-grid').css('position', 'fixed').css('top', 0 + 'px');

        }

        if($(window).scrollTop() < (Home17Viewport.top - ViewportHeight)){

            $('#Lottie-Book-grid').css('position', 'relative').css('top', 0 + 'px');

        }

        if($(window).scrollTop() > (Home17Viewport.top + (ViewportHeight * 0.25))){

            $('#Lottie-Book-grid').addClass("Lottie-Book-grid-scale");

        }

        if($(window).scrollTop() < (Home17Viewport.top + (ViewportHeight * 0.25))){

            $('#Lottie-Book-grid').removeClass("Lottie-Book-grid-scale");

        }

        if($(window).scrollTop() < (Home17Viewport.top + ViewportHeight)){

            $('#Lottie-Book-grid').removeClass("Lottie-Book-grid-opacity");

        }

        if($(window).scrollTop() > (Home17Viewport.top + ViewportHeight)){

            $('#Lottie-Book-grid').css('position', 'absolute').css('top', ViewportHeight + 'px');

            $('#Lottie-Book-grid').addClass("Lottie-Book-grid-opacity");

        }

    }

    

    LottieBookGrid();

  

    $(window).scroll(function(){

        LottieBookGrid();

    });

  

    $(window).resize(function() {

        LottieBookGrid();

        $(window).scroll(function(){

            LottieBookGrid();

        });

    });

    



    



    // Comments

    $("#more-trigger-1").click(function() {

        $("#more-1-2").addClass("more-timing");

        $("#Home-viewports").addClass("more-for-home");

        $("#Home-section-indicator").addClass("more-for-home");

        $("#more-1-2").addClass("more-for-content");

        $(".palette").addClass("palette-animation");

        $("#more-comment-2").addClass("d-none");

        $("#more-1-2 .more-close a").attr('href', "#Swiss-overlay-title");

        $("#Home").css('overflow-y', 'hidden');

        setTimeout(function() {

            $("#more-1-2").removeClass("more-timing");

        }, 1750);

    });

    

    $("#more-trigger-2").click(function() {

        $("#more-1-2").addClass("more-timing");

        $("#Home-viewports").addClass("more-for-home");

        $("#Home-section-indicator").addClass("more-for-home");

        $("#more-1-2").addClass("more-for-content");

        $(".palette").addClass("palette-animation");

        $("#more-comment-1").addClass("d-none");

        $("#more-1-2 .more-close a").attr('href', "#Economy");

        $("#Home").css('overflow-y', 'hidden');

        setTimeout(function() {

            $("#more-1-2").removeClass("more-timing");

        }, 1750);

    });

    

    $("#more-1-2 .more-close").click(function() {

        $(".palette").removeClass("palette-animation");

        setTimeout(function() {

            $("#more-1-2").addClass("more-timing");

            $("#Home-viewports").removeClass("more-for-home");

            $("#Home-section-indicator").removeClass("more-for-home");

            $("#more-1-2").removeClass("more-for-content");

            $(".palette").removeClass("palette-animation");

            $("#Home").css('overflow-y', 'auto');

            setTimeout(function() {

                $("#more-1-2").removeClass("more-timing");

                $("#more-comment-1").removeClass("d-none");

                $("#more-comment-2").removeClass("d-none");

            }, 1750);

        }, 100);

    });

    

    $("#more-trigger-3").click(function() {

        $("#more-3").addClass("more-timing");

        $("#Home-viewports").addClass("more-for-home");

        $("#Home-section-indicator").addClass("more-for-home");

        $("#more-3").addClass("more-for-content");

        $(".palette").addClass("palette-animation");

        $("#Home").css('overflow-y', 'hidden');

        setTimeout(function() {

            $("#more-3").removeClass("more-timing");

        }, 1750);

    });

    

    $("#more-3 .more-close").click(function() {

        $(".palette").removeClass("palette-animation");

        setTimeout(function() {

            $("#more-3").addClass("more-timing");

            $("#Home-viewports").removeClass("more-for-home");

            $("#Home-section-indicator").removeClass("more-for-home");

            $("#more-3").removeClass("more-for-content");

            $("#Home").css('overflow-y', 'auto');

            setTimeout(function() {

                $("#more-3").removeClass("more-timing");

            }, 1750);

        }, 100);

    });

    

    $("#more-trigger-4").click(function() {

        $("#more-4").addClass("more-timing");

        $("#Home-viewports").addClass("more-for-home");

        $("#Home-section-indicator").addClass("more-for-home");

        $("#more-4").addClass("more-for-content");

        $(".palette").addClass("palette-animation");

        $("#Home").css('overflow-y', 'hidden');

        setTimeout(function() {

            $("#more-4").removeClass("more-timing");

        }, 1750);

    });

    

    $("#more-4 .more-close").click(function() {

        $(".palette").removeClass("palette-animation");

        $("#Home").css('overflow-y', 'auto');

        setTimeout(function() {

            $("#more-4").addClass("more-timing");

            $("#Home-viewports").removeClass("more-for-home");

            $("#Home-section-indicator").removeClass("more-for-home");

            $("#more-4").removeClass("more-for-content");

            setTimeout(function() {

                $("#more-4").removeClass("more-timing");

            }, 1750);

        }, 100);

    });

    

    $("#more-trigger-5").click(function() {

        $("#more-5").addClass("more-timing");

        $("#Home-viewports").addClass("more-for-home");

        $("#Home-section-indicator").addClass("more-for-home");

        $("#more-5").addClass("more-for-content");

        $(".palette").addClass("palette-animation");

        $("#Home").css('overflow-y', 'hidden');

        setTimeout(function() {

            $("#more-5").removeClass("more-timing");

        }, 1750);

    });

    

    $("#more-5 .more-close").click(function() {

        $(".palette").removeClass("palette-animation");

        $("#Home").css('overflow-y', 'auto');

        setTimeout(function() {

            $("#more-5").addClass("more-timing");

            $("#Home-viewports").removeClass("more-for-home");

            $("#Home-section-indicator").removeClass("more-for-home");

            $("#more-5").removeClass("more-for-content");

            setTimeout(function() {

                $("#more-5").removeClass("more-timing");

            }, 1750);

        }, 100);

    });



    // Prevent scroll on more-include

    $(".more-include").mousewheel(function(e){

        e.preventDefault();

    });



    // Prevent scroll on Menu-mobile

    $("#Menu-mobile").mousewheel(function(e){

        e.preventDefault();

    });







    // Home start

    // Photographer start

    function APhotographer() {

        StartReset()

        $("#Title-C3 h2").html("A Photographer");

        $("#img-A1-B4.APhotographer img").attr("src", "img/projects/High-Mountains/High-Mountains-5.jpg");

        $("#img-A1-B4.APhotographer img").addClass("home-img-horizzontal-animation transition-delay-1");

        $("#img-C4-D8 img").attr("src", "img/projects/High-Mountains/High-Mountains-9.jpg");

        $("#img-C4-D8 img").addClass("home-img-horizzontal-animation transition-delay-2");

        $("#img-A9-B12 img").attr("src", "img/projects/Colorlapse/Colorlapse-9.jpg");

        $("#img-A9-B12 img").addClass("home-img-horizzontal-animation transition-delay-2");

        $("#img-D1-E2 img").attr("src", "img/projects/Tessuto-ambientale/Tessuto-ambientale-13.jpg");

        $("#img-D1-E2 img").addClass("home-img-horizzontal-animation transition-delay-4");

        $("#img-D9-E12.APhotographer img").attr("src", "img/projects/High-Mountains/High-Mountains-1.jpg");

        $("#img-D9-E12.APhotographer img").addClass("home-img-horizzontal-animation transition-delay-5");

    }

    // Design start

    function ADesigner() {

        StartReset()

        $("#Title-C3 h2").html("A Designer");

        $("#img-A1-E5 img").attr("src", "img/projects/Dissipatappo/Dissipatappo-4.png");

        $("#img-A1-E5 img").addClass("home-img-horizzontal-animation transition-delay-1");

        $("#img-A5-B9.ADesigner img").attr("src", "img/projects/Il-diamante-di-Prali-e-una-montagna-di-Minerali/Il-diamante-di-Prali-e-una-montagna-di-Minerali-1.jpg");

        $("#img-A5-B9.ADesigner img").addClass("home-img-horizzontal-animation transition-delay-2");

        $("#img-D8-E12 img").attr("src", "img/projects/SuperPhoenix/SuperPhoenix-6.jpg");

        $("#img-D8-E12 img").addClass("home-img-horizzontal-animation transition-delay-3");

        $("#img-B10-D12.img-contain img").attr("src", "img/projects/SuperPhoenix/SuperPhoenix-2.png");

        $("#img-B10-D12.img-contain img").addClass("home-img-horizzontal-animation transition-delay-4");

    }

    // Graphic Design start

    function AGraphicDesigner() {

        StartReset()

        $("#Title-C3 h2").html("A Graphic<br />Designer");

        $("#img-E1-E3 img").attr("src", "img/projects/SuperPhoenix/SuperPhoenix-5.jpg");

        $("#img-E1-E3 img").addClass("home-img-horizzontal-animation transition-delay-1");

        //$("#img-B6-C10 video source").attr("src", "img/projects/High-Mountains/High-Mountains-12.mp4");

        $("#img-B6-C10 video").addClass("home-img-horizzontal-animation transition-delay-2");

        $("#img-D9-E12.AGraphicDesigner img").attr("src", "img/projects/Colorlapse/Colorlapse-12.jpg");

        $("#img-D9-E12.AGraphicDesigner img").addClass("home-img-horizzontal-animation transition-delay-3");

    }

    // Communication Design start

    function ACommunicationDesigner() {

        StartReset()

        $("#Title-C3 h2").html("A Communication<br />Designer");

        $("#img-A3-B7 img").attr("src", "img/projects/nasa-unsplash.jpg");

        $("#img-A3-B7 img").addClass("home-img-horizzontal-animation transition-delay-1");

        $("#img-E1-E4.img-contain img").attr("src", "img/projects/Agro360/Agro360-3.png");

        $("#img-E1-E4.img-contain img").addClass("home-img-horizzontal-animation transition-delay-2");

        $("#img-C9-E11.img-contain img").attr("src", "img/projects/Tessuto-ambientale/Tessuto-ambientale-17.png");

        $("#img-C9-E11.img-contain img").addClass("home-img-horizzontal-animation transition-delay-3");

    }

    // Systemic Design start

    function ASystemicDesigner() {

        StartReset()

        $("#Title-C3 h2").html("A Systemic<br />Designer");

        $("#img-A4-B7 img").attr("src", "img/projects/Treemember/Treemember-7.jpg");

        $("#img-A4-B7 img").addClass("home-img-horizzontal-animation transition-delay-1");

        $("#img-C7-E12.ASystemicDesigner.img-contain img").attr("src", "img/projects/Tessuto-ambientale/Tessuto-ambientale-16.png");

        $("#img-C7-E12.ASystemicDesigner.img-contain img").addClass("home-img-horizzontal-animation transition-delay-2");

    }

    // Creative Developer start

    function ACreativeDeveloper() {

        StartReset()

        $("#Title-C3 h2").html("A Creative<br />Developer");

        //$("#img-A5-B9.ACreativeDeveloper video source").attr("src", "img/projects/High-Mountains/High-Mountains-10.mp4");

        $("#img-A5-B9.ACreativeDeveloper video").addClass("home-img-horizzontal-animation transition-delay-1");

        $("#img-D8-E12 img").attr("src", "img/projects/Treemember/Treemember-1.jpg");

        $("#img-D8-E12 img").addClass("home-img-horizzontal-animation transition-delay-2");

    }

    // 3D start

    function A3Denthusiast() {

        StartReset()

        $("#Title-C3 h2").html("A 3D<br />enthusiast");

        $("#img-A1-B4.A3Denthusiast img").attr("src", "img/projects/Treemember/Treemember-4.jpg");

        $("#img-A1-B4.A3Denthusiast img").addClass("home-img-horizzontal-animation transition-delay-1");

        //$("#img-C1-E3.img-contain.z-2000 img").attr("src", "img/projects/Treemember/Treemember-2.gif");

        $("#img-C1-E3.img-contain.z-2000 img").addClass("home-img-horizzontal-animation transition-delay-2");

        //$("#img-B7-C11 video source").attr("src", "img/projects/Woodie/Woodie-7.mp4");

        $("#img-B7-C11 video").addClass("home-img-horizzontal-animation transition-delay-3");

        $("#img-C8-E12.img-contain.z-2000 img").attr("src", "img/projects/Woodie/Woodie-4.png");

        $("#img-C8-E12.img-contain.z-2000 img").addClass("home-img-horizzontal-animation transition-delay-4");

    }

    // Videomaker start

    function AVideomaker() {

        StartReset()

        $("#Title-C3 h2").html("A Videomaker");

        $("#img-A3-B6 img").attr("src", "img/projects/SuperPhoenix/SuperPhoenix-1.jpg");

        $("#img-A3-B6 img").addClass("home-img-horizzontal-animation transition-delay-1");

        $("#img-C7-E12.AVideomaker img").attr("src", "img/projects/Reverso/Reverso-3.jpg");

        $("#img-C7-E12.AVideomaker img").addClass("home-img-horizzontal-animation transition-delay-2");

    }



    // Reset all the start

    function StartReset() {

        $("#Circle-C2-D3 circle").removeClass("start-timer-visualizer");

        $("#All-the-container img").removeClass();

        $("#All-the-container video").removeClass();

        $("#Title-C3 h2").html("A Andrea");

        setTimeout(function() {

            $("#Circle-C2-D3 circle").addClass("start-timer-visualizer");

        }, 10);

    }

    

    // Reset all the start

    function StartReset() {

        $("#Circle-C2-D3 circle").removeClass("start-timer-visualizer");

        $("#All-the-container img").removeClass();

        $("#All-the-container video").removeClass();

        $("#Title-C3 h2").html("A Andrea");

        setTimeout(function() {

            $("#Circle-C2-D3 circle").addClass("start-timer-visualizer");

        }, 10);

    }

    

    // Random start

    function RandomSart() {

		var arr = [ APhotographer, ADesigner, AGraphicDesigner, ACommunicationDesigner, ASystemicDesigner, ACreativeDeveloper, A3Denthusiast],

			rand = Math.floor(Math.random() * arr.length),

			func = arr[rand];

		func();

    }

    

    // Set the function for the keeping randomize the start

    var interval;

    var Timer = function(){

        interval = setInterval(function(){

            StartReset()

            RandomSart()

        }, 5500);

    };



    // Execute the function and start the loop

    setTimeout(function() {

        $('#Circle-C2-D3 circle.start-timer-visualizer').removeClass("start-timer-visualizer-first-delay");

        RandomSart()

        setTimeout(function() {

            Timer()

        }, 5500);

    }, 2500);



    // After the hover start: restart the timer

    $(".interactive-column").mouseenter(function(){

        clearInterval(interval);

        Timer()

    });







    // Randomic function

    $("#A .1").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });

    

    $("#A .2").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#A .3").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#A .4").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#A .5").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#A .6").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#A .7").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#A .8").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#A .9").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#A .10").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#A .11").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#A .12").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });

    

    $("#B .1").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#B .2").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#B .3").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#B .4").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#B .5").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#B .6").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#B .7").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#B .8").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#B .9").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#B .10").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#B .11").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#B .12").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#C .1").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });

    

    $("#C .2").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#C .3").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#C .4").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#C .5").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#C .6").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#C .7").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#C .8").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#C .9").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#C .10").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#C .11").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#C .12").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#D .1").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });

    

    $("#D .2").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#D .3").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#D .4").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#D .5").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#D .6").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#D .7").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#D .8").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#D .9").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#D .10").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#D .11").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#D .12").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#E .1").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });

    

    $("#E .2").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#E .3").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#E .4").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#E .5").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#E .6").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#E .7").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#E .8").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#E .9").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#E .10").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#E .11").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });



    $("#E .12").hover( function() {

        RandomSart()

    }, function () {

        StartReset()

    });







    // What if the user click? Scroll and Scroll-arrow

	/*$(".interactive-column").click(function(){

        $("#Scroll-information-home").addClass("scroll-information-home-animation");

        $("#Scroll-arrow").addClass("scroll-highlight");

        setTimeout(function() {

            $("#Scroll-arrow").removeClass("scroll-highlight");

        }, 2000);

        setTimeout(function() {

            $("#Scroll-information-home").removeClass("scroll-information-home-animation");

        }, 4000);

    });*/

    // 

    var ScrollInformationInterval;

    var ScrollInformationTimer = function(){

        if ($("#Scroll-information-home").hasClass("scroll-information-home-animation")) {

            $("#Scroll-information-home").removeClass("scroll-information-home-animation");

        }

        setTimeout(function() {

            $("#Scroll-information-home").addClass("scroll-information-home-animation");

            $("#Scroll-arrow").addClass("scroll-highlight");

        }, 10);

        ScrollInformationInterval = setInterval(function(){

            $("#Scroll-arrow").removeClass("scroll-highlight");

            $("#Scroll-information-home").removeClass("scroll-information-home-animation");

        }, 4000);

    };

    

    // 

    $(".interactive-column").click(function(){

        clearInterval(ScrollInformationInterval);

        ScrollInformationTimer()

    });



    // Scroll away the grid

    $(window).scroll(function(){

        var fromTop0 = window.pageYOffset;

        $("#Home-0-grid").css('bottom', ( fromTop0 / 1.2) + 'px');

        $("#Home-0-grid-row").css('left', ( fromTop0 / 0.8 * (ViewportWidth1 / ViewportHeight1)) + 'px');

    });

    

    // Home 0 viewport: css grid and Scroll-arrow

    function Home0ViewportEvents() {

        Home0Viewport = window.innerHeight * 1.25;

        if($(window).scrollTop() > (Home0Viewport)){

            $("#Home #Scroll-arrow").css('position', 'absolute');

            $("#Home #Scroll-arrow").css('top', 'calc(225vh - var(--Margin-top-bottom) - 2.4rem)');

            // Scroll-arrow

            $("#Scroll-arrow").click(function(){

                $("html, body").scrollTop(ViewportHeight1 * 3.25);

	        });

        } else {

            $("#Home #Scroll-arrow").css('position', 'fixed');

            $("#Home #Scroll-arrow").css('top', 'calc(100vh - var(--Margin-top-bottom) - 2.4rem)');

            // Scroll-arrow

            $("#Scroll-arrow").click(function(){

                $("html, body").scrollTop(ViewportHeight1 * 1.25);

	        });

            $("#Scroll-information-home").click(function(){

                if ($("#Scroll-information-home").hasClass("scroll-information-home-animation")) {

                    $("html, body").scrollTop(ViewportHeight1 * 1.25);

                }

	        });

        }

    }



    Home0ViewportEvents();



    $(window).scroll(function(){

        Home0ViewportEvents();

    });

  

    $(window).resize(function() {

        Home0ViewportEvents();

        $(window).scroll(function(){

            Home0ViewportEvents();

        });

    });











    // Home-section-indicator

    function HomeSectionIndicator() {

        ViewportHeight = window.innerHeight;

        var Home34Viewport = $('#Home-3-4-viewport').offset();

        var Home914Viewport = $('#Home-9-14-viewport').offset();

        var Home17Viewport = $('#Home-17-viewport').offset();

        var Home21Viewport = $('#Home-21-viewport').offset();

        

        if(($(window).scrollTop() > (Home34Viewport.top - (ViewportHeight / 1))) && ($(window).scrollTop() < (Home21Viewport.top - ViewportHeight))){

            $('#Home-section-indicator').css('position', 'fixed').css('top', 0 + 'px').css('bottom', 'auto');

        }

        if($(window).scrollTop() < (Home34Viewport.top - (ViewportHeight / 1))){

            $('#Home-section-indicator').css('position', 'absolute').css('top', (Home34Viewport.top - ViewportHeight) + 'px').css('bottom', 'auto');

        }

        if($(window).scrollTop() > (Home21Viewport.top - ViewportHeight)){

            $('#Home-section-indicator').css('position', 'absolute').css('top', 'auto').css('bottom', (ViewportHeight - Home21Viewport.top) + 'px');

        }







        if($(window).scrollTop() > (Home914Viewport.top + (ViewportHeight / 2))){

            $('#Home-section-indicator h5').html("Project phases");

        } else {

            $('#Home-section-indicator h5').html("Design");

        }



        if($(window).scrollTop() > (Home17Viewport.top)){

            $('#Home-section-indicator h5').html("Communication");

        }

    

    }

    

    HomeSectionIndicator();

  

    $(window).scroll(function(){

        HomeSectionIndicator();

    });

  

    $(window).resize(function() {

        HomeSectionIndicator();

        $(window).scroll(function(){

            HomeSectionIndicator();

        });

    });









    // Performance optimaizer

    function OnOffHeavySection() {

        ViewportHeight = window.innerHeight;

        var Home1Viewport = $('#Home-1-viewport').offset();

        var Home3Viewport = $('#Home-3-viewport').offset();

        var Home13Viewport = $('#Japan-concept').offset();

        var Home1820Viewport = $('#Home-18-20-viewport').offset();

    



        if($(window).scrollTop() > (Home3Viewport.top)){

            $('#Home-0-viewport *').addClass("d-none");

            $('#particles-js-1').addClass("d-none");

        } else {

            $('#Home-0-viewport *').removeClass("d-none");

            $('#particles-js-1').removeClass("d-none");

        }



        if($(window).scrollTop() > (Home13Viewport.top)){

            $('#particles-js-2').removeClass("d-none");

        } else {

            $('#particles-js-2').addClass("d-none");

        }



        if($(window).scrollTop() > (Home1820Viewport.top)){

            $('#particles-js-2').addClass("d-none");

        } else {

            $('#particles-js-2').removeClass("d-none");

        }

    }

    

    OnOffHeavySection();

    

    $(window).scroll(function(){

        OnOffHeavySection();

    });

    

    $(window).resize(function() {

        OnOffHeavySection();

        $(window).scroll(function(){

            OnOffHeavySection();

        });

    });

});