
// $('.form-select').eq(0).on('input', function () {
//   var value = $('.form-select').eq(0).val();
//   if (value == '셔츠') {
//     $('.form-select').eq(1).removeClass('mt-hide');
//   } else {
//     $('.form-select').eq(1).addClass('mt-hide');
//   }
// });

var pants = [28, 30, 32, 34];
var shirts = [90, 95, 100, 105, 110]

// var pantSize = `<option>28</option>
//                 <option>30</option>
//                 <option>32</option>`;

// var shirtSize = `<option>95</option>
//                 <option>100</option>
//                 <option>105</option>`;

$('.form-select').eq(0).on('input', function () {
  //var value = e.currentTarget.value;
  var value = this.value;
  if (value == '셔츠') {
    $('.form-select').eq(1).removeClass('mt-hide');
    $('.form-select').eq(1).html('');
    //$('.form-select').eq(1).html(shirtSize);
    shirts.forEach(function(a){
      $('.form-select').eq(1).append(`<option>${a}</option>`)
    });
  } else if(value == '바지') { 
    $('.form-select').eq(1).removeClass('mt-hide');
    $('.form-select').eq(1).html('');
    //$('.form-select').eq(1).append(pantSize);
    pants.forEach((a)=>{ //arrow function function이랑 this 쓸 때 좀 달라질 수 있음 
      $('.form-select').eq(1).append(`<option>${a}</option>`)
    });
  } else {
    $('.form-select').eq(1).addClass('mt-hide');
  }
});

var obj = {name : 'lee', age : 20}

for (var key in obj){
  console.log(obj[key]);
}

// 자바스크립트로 html 생성법 1
// var a = document.createElement('p');
// a.innerHTML = '안녕';
// document.querySelector('#test').appendChild(a);

// 자바스크립트로 html 생성법 2
//var 템플릿 = '<p>안녕</p>';
//document.querySelector('#test').insertAdjacentHTML('beforeend', 템플릿);
//$('#test').append(템플릿);

// detail.html 81 ~ 85







