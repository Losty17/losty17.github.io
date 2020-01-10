$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.img-blur').css({
            transform: `translateY(${-scroll/7}px) scale(${1.1 - scroll/3000})`
        })
        $('.img-parallax').css({
            transform: `translateY(${-scroll/3}px) scale(.8)`
        })
    }
})
