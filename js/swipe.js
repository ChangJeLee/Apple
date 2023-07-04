var startPoint = 0;
var pushImg = false;

// mousedown, mouseup, mousemove
$('.slide-box').eq(0).on('mousedown', function (e) {
    startPoint = e.clientX;
    pushImg = true;
});

$('.slide-box').eq(0).on('mousemove', function (e) {
    if (pushImg == true) {
        $('.slide-container').css('transform', `translateX(${e.clientX - startPoint}px)`);
    }
});

$('.slide-box').eq(0).on('mouseup', function (e) {
    pushImg = false;
    if (e.clientX - startPoint < -100) {
        $('.slide-container')
        .css('transition', 'all 1s')
        .css('transform', 'translateX(-100vw)');
        
    } else {
        $('.slide-container')
        .css('transition', 'all 1s')
        .css('transform', 'translateX(0vw)');
    }
    setTimeout(()=>{
        $('.slide-container').css('transition', 'none')
    },500)
});


$('.slide-box').eq(0).on('touchstart', function (e) {
    startPoint = e.touches[0].clientX;
    pushImg = true;
});

$('.slide-box').eq(0).on('touchmove', function (e) {
    if (pushImg == true) {
        $('.slide-container')
        .css('transform', `translateX(${e.touches[0].clientX - startPoint}px)`);
    }
});

$('.slide-box').eq(0).on('touchend', function (e) {
    pushImg = false;
    if (e.changedTouches[0].clientX - startPoint < -100) {
        $('.slide-container')
        .css('transition', 'all 1s')
        .css('transform', 'translateX(-100vw)');
        
    } else {
        $('.slide-container')
        .css('transition', 'all 1s')
        .css('transform', 'translateX(0vw)');
    }
    setTimeout(()=>{
        $('.slide-container').css('transition', 'none')
    },500)

});
