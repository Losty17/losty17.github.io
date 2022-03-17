$(window).scroll(function(){
    var scroll = $(window).scrollTop()
    if(scroll < 300){
        $('.img-blur').css({
            transform: `translateY(${-scroll/7}px) scale(${1.1 - scroll/3000})`
        })
        $('.img-blur h1').css({
            transform: `translateY(${+scroll/30}px) scale(${.8 + scroll/3000})`
        })
    }
    if(scroll < 180){
        $('.img-blur p').css({
            transform: `rotate(${scroll}deg)`
        })
    }else{
        $('.img-blur p').css({
            transform: `rotate(180deg)`
        })
    }
    
    if (scroll >= 900) {
        $('.navbar-site').css({
            background: rgb(13, 0, 27);  
        })
    }
})
