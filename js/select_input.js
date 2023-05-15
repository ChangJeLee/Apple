
// $('.form-select').eq(0).on('input', function () {
//   var value = $('.form-select').eq(0).val();
//   if (value == '셔츠') {
//     $('.form-select').eq(1).removeClass('mt-hide');
//   } else {
//     $('.form-select').eq(1).addClass('mt-hide');
//   }
// });

var pantSize = `<option>28</option>
                <option>30</option>
                <option>32</option>`;

var shirtSize = `<option>95</option>
                <option>100</option>
                <option>105</option>`;

$('.form-select').eq(0).on('input', function () {
  //var value = e.currentTarget.value;
  var value = this.value;
  if (value == '셔츠') {
    $('.form-select').eq(1).removeClass('mt-hide');
    $('.form-select').eq(1).html('');
    $('.form-select').eq(1).html(shirtSize);
  } else if(value == '바지') { 
    $('.form-select').eq(1).removeClass('mt-hide');
    $('.form-select').eq(1).html('');
    $('.form-select').eq(1).append(pantSize);
  } else {
    $('.form-select').eq(1).addClass('mt-hide');
  }
});

// 자바스크립트로 html 생성법 1
// var a = document.createElement('p');
// a.innerHTML = '안녕';
// document.querySelector('#test').appendChild(a);

// 자바스크립트로 html 생성법 2
//var 템플릿 = '<p>안녕</p>';
//document.querySelector('#test').insertAdjacentHTML('beforeend', 템플릿);
//$('#test').append(템플릿);

// detail.html 81 ~ 85







