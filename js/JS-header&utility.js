// SVG follow mouse

document.addEventListener('DOMContentLoaded', () => {

    

    // Set default mouse position 

    let mousePositionX = -100,

        mousePositionY = -100,

    

    // Select element

    mouseCircle = document.getElementById('cursor');





    document.onmousemove = (e) => {

        mousePositionX = e.clientX;

        mousePositionY = e.clientY;

    }



    let delay = 3,

        delayedMousePositionX = 0,

        delayedMousePositionY = 0;

    

    function delayMouseFollow() {

        requestAnimationFrame(delayMouseFollow);



        delayedMousePositionX += (mousePositionX - delayedMousePositionX) / delay;

        delayedMousePositionY += (mousePositionY - delayedMousePositionY) / delay; 



        mouseCircle.style.cx = mousePositionX + 'px';

        mouseCircle.style.cy = mousePositionY + 'px';

    }

    delayMouseFollow();



});



$(document).ready(function(){

    // Cursor: cursor-scale

    $("a[target!='_self'], #Non-Projects-svg-area path").hover(function(){

        $("#cursor").addClass("cursor-scale");

    }, function(){

        $("#cursor").removeClass("cursor-scale");

    });





    // Scroll Scroll-arrow

	$("#Scroll-arrow").click(function(){

        $("html, body").scrollTop($(window).height());

	});



    // Menu mobile

    // Open menu mobile function

    function OpenMenuMobile() {

        $("#Menu-mobile").removeClass("far-away");

        setTimeout(function() {

            $("#Menu-mobile-trigger").addClass("menu-mobile-open");

            $("#Menu-mobile-bg").addClass("menu-mobile-bg-scale");

            $('#Menu-mobile-trigger h4').html("close");

            $("#Menu-mobile #Grid").addClass("menu-mobile-Grid-scale");

            $("#Menu-mobile #Grid-row").addClass("menu-mobile-Grid-row-scale");

            $("#Menu-mobile-voices h2").addClass("menu-mobile-voices-in-position");

            $("#Menu-mobile h4").addClass("menu-mobile-mail-in-position");

            $("#Menu-mobile-indicator").addClass("menu-mobile-indicator-in-position");

            // Project page menu voices background

            $(".project-page #menu-voices-bg h4").addClass("project-page-menu-mobile-menu-voices-bg");

            $(".project-page #menu-structure svg").addClass("project-page-menu-mobile-menu-structure");

        }, 1);

    }

    // Close menu mobile function

    function CloseMenuMobile() {

        $("#Menu-mobile-trigger").removeClass("menu-mobile-open");

        $("#Menu-mobile-bg").removeClass("menu-mobile-bg-scale");

        $('#Menu-mobile-trigger h4').html("menu");

        $("#Menu-mobile #Grid").removeClass("menu-mobile-Grid-scale");

        $("#Menu-mobile #Grid-row").removeClass("menu-mobile-Grid-row-scale");

        $("#Menu-mobile-voices h2").removeClass("menu-mobile-voices-in-position");

        $("#Menu-mobile h4").removeClass("menu-mobile-mail-in-position");

        $("#Menu-mobile-indicator").removeClass("menu-mobile-indicator-in-position");

        // Project page menu voices background

        $(".project-page #menu-voices-bg h4").removeClass("project-page-menu-mobile-menu-voices-bg");

        $(".project-page #menu-structure svg").removeClass("project-page-menu-mobile-menu-structure");

        setTimeout(function() {

            $("#Menu-mobile").addClass("far-away");

        }, 1);

    }

    // Open and close menu mobile

	$("#Menu-mobile-trigger").click(function(){

        if (!$("#Menu-mobile-trigger").hasClass("menu-mobile-open")) {

            OpenMenuMobile();

        } else {

            CloseMenuMobile();

        }

    });

    $("#Menu-mobile a").click(function(){

        setTimeout(function() {

            CloseMenuMobile();

        }, 100);

    });

    // Close menu mobile on resize after md

    $(window).resize( function(){

        if ($(window).width() >= 768) {

            if ($("#Menu-mobile-trigger").hasClass("menu-mobile-open")) {

                CloseMenuMobile();

            }

        }

    });



});