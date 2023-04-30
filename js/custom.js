
$(document).ready(function(){
    $("#slider_1").owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:3,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }

    })

    
    $('#slider_2').owlCarousel({
        items: 3,
        margin: 25,
        loop: true,
        nav: true,
        dots:false,
        center:true,
        autoplay:true,
        autoplayTimeout:1000,
        navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    
    });
    
  });