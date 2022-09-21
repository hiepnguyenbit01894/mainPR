$(document).ready(function(){
    $(".slider").owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        slideSpeed: 100,
        items:1,
        margin:10,
        autoHeight:true,
        dots:false,
        autoplay: true,
        loop: true,
    });
   $(".featured_body--main").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoWidth:true,
        dots:false,
        autoplay: true,
        // nav:true,
        navRewind: false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })
})
