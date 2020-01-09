$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('.img-blur').css({
        filter: "blur(" + (scroll/150) + "px)"
    })
})