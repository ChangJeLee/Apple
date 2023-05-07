var count = 0;

$('.badge').on('click', function(){
  count += 1;
  if (count % 2 == 1) {
    $('.badge').html('White 🔄');
  } else {
    $('.badge').html('Dark 🔄');
  }
});