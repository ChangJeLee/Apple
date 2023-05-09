var count = 0;

$('.badge').on('click', function(){
  count += 1;
  if (count % 2 == 1) {
    $('.badge').html('White 🔄');
    $('.main-bg').css('background','white');
    $('h4').css('color','black');
  } else {
    $('.badge').html('Dark 🔄');
    $('.main-bg').css('background','black');
    $('h4').css('color','white');
  }
});