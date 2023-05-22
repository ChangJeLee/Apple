var products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' }
];

function appendTemplate(src) {
  src.forEach((a, i) => {
    var template =
      `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${a.title}</h5>
        <p>가격 : ${a.price}</p>
        </div>`;
    $('.row').append(template);
  });
}

appendTemplate(products);
var cnt = 0;
$('#more').click(function () {
  if(cnt == 0) {
    cnt += 1;
  $.get('https://codingapple1.github.io/js/more1.json').done((data) => {
      appendTemplate(data);
    });
  } else if(cnt == 1) {
    cnt += 1;
    $.get('https://codingapple1.github.io/js/more2.json').done((data) => {
      appendTemplate(data);
    });
  } else {
    $('#more').addClass('mt-hide');
  }
})
