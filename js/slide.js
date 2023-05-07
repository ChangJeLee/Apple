
var nowImg = 1;

$('.next').on('click', function(){
  if(nowImg == 1){
    $('.slide-container').css('transform', 'translateX(-100vw)');
    nowImg += 1;
  } else if (nowImg == 2) {
    $('.slide-container').css('transform', 'translateX(-200vw)');
    nowImg += 1;
  }
});

$('.before').on('click', function(){
  if(nowImg == 3){
    $('.slide-container').css('transform', 'translateX(-100vw)');
    nowImg -= 1;
  } else if (nowImg == 2) {
    $('.slide-container').css('transform', 'translateX(0vw)');
    nowImg -= 1;
  }
});

$('.slide-3').on('click', function(){
  $('.slide-container').css('transform', 'translateX(-200vw)');
  nowImg = 3;
})

$('.slide-2').on('click', function(){
  $('.slide-container').css('transform', 'translateX(-100vw)');
  nowImg = 2;
})

$('.slide-1').on('click', function(){
  $('.slide-container').css('transform', 'translateX(0vw)');
})
