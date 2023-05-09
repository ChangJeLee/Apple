//div의 스크롤바 내린 양 + 눈에 보이는 div 박스의 높이 == div의 실제 높이 일 경우 
//alert()
$('.lorem').on('scroll', function() {
  var top = document.querySelector('.lorem').scrollTop;
  var realScroll = document.querySelector('.lorem').scrollHeight;
  var divHei = document.querySelector('.lorem').clientHeight;
  if(top + divHei > realScroll - 1){
    alert('뚜두등장!');
  }
});
$(window).on('scroll', function(){
    if (window.scrollY > 100) {
      $('.navbar-brand').css('font-size', '10px');
    } else if (window.scrollY < 100) {
      $('.navbar-brand').css('font-size', '20px');
    }
});
document.querySelector('html').scrollTop;  //현재 웹페이지 스크롤양
document.querySelector('html').scrollHeight; //현재 웹페이지 실제높이
document.querySelector('html').clientHeight; //현재 웹페이지 보이는 높이임