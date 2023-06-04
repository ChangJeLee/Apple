var products = [
  { id: 0, price: 70000, title: 'Blossom Dress' },
  { id: 1, price: 50000, title: 'Springfield Shirt' },
  { id: 2, price: 60000, title: 'Black Monastery' }
];
var newProducts = [...products];
$('#price').click(function(){
  products.sort(function(a,b){
    return a.price - b.price
  });
  
  $('.row').html('');

  products.forEach((a, i)=>{
    var template = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${products[i].title}</h5>
      <p>가격 : ${products[i].price}</p>
    </div>`;
    $('.row').append(template)
  })
});

function appendTemplate(products) {
  products.forEach((a, i) => {
    var template =
      `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${a.title}</h5>
        <p>가격 : ${a.price}</p>
        <button class="buy">구매</button>
        </div>`;
    $('.row').append(template);
  });
}
appendTemplate(products);
//구매버튼 누를 시 localstorage에 array로 저장
$('.buy').click(function (e) {
  var title = $(e.target).siblings('h5').text(); //형제태그인 h5 태그에 있는 것을 가져와라
  if (localStorage.getItem('cart') != null) {
    var newTitle = JSON.parse(localStorage.cart);
    newTitle.push(title);
    localStorage.setItem('cart', JSON.stringify(newTitle));
  } else {
    localStorage.setItem('cart', JSON.stringify([title]));
  }
});


// localStorage.setItem('이름','이창제');
// console.log(localStorage.getItem('이름'));
// localStorage.removeItem('이름');
//localStorage.setItem('num',[1,2,3]); //array 깨짐
// var arr = [1,2,3];
// var newArr = JSON.stringify(arr);
// localStorage.setItem('num',newArr);
// var 꺼낸거 = localStorage.getItem('num');
// console.log(JSON.parse(꺼낸거));
//로컬 스토리지 수정 
//1.꺼내고 2.꺼낸거 수정 3.집어넣기

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

var array2 = [7,3,5,2,40];
array2.sort(function(a,b) {
  return a - b;
});
//동작 원리 : a와 b 가 array에 있는 숫자들임 
// return 오른쪽이 양수면 a를 오른쪽으로 음수면 b를 오른쪽으로 보내줌 
// a와 b를 바꿔주면 내림차순으로 sort 됨
// sort함수는 원형 변형이 있음 
// filter함수는 원형 변형이 없음
var 어레이1 = [7,3,5,2,40];

var 새어레이 = 어레이1.map(function(a){
  return a * 4
}); 
var 어레이 = [7,3,5,2,40];
var 새어레이 = 어레이.filter(function(a){
  return a < 4
}); 
// var array3 = ['a','c','b'];
// array3.sort(function(a,b){
//   return 'a' < 'b';
// });
// console.log(array3);



$('#lower').click(function(){
  var newArray = products.filter(function(a){
    return a.price <= 60000
  });
  
  $('.row').html('');

  newArray.forEach((a, i)=>{
    var template = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${newArray[i].title}</h5>
      <p>가격 : ${newArray[i].price}</p>
    </div>`;
    $('.row').append(template)
  })
});


$('#namesort').click(function(){
  products.sort(function(a,b){
    if (a.title < b.title) {
      return 1
    } else {
      return -1
    }
  });
  
  $('.row').html('');

  products.forEach((a, i)=>{
    var template = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${products[i].title}</h5>
      <p>가격 : ${products[i].price}</p>
    </div>`;
    $('.row').append(template)
  })
});


// 응용1. 가나다순 정렬버튼?
// 응용2. <input>을 이용해 유저가 직접 가격을 입력해서 필터하는 기능?
// 응용3. 원래 순서대로 되돌리기 버튼과 기능을 만들고 싶으면?

//가나다 정렬버튼
$('#abcbutton').click(function(){
  products.sort(function(a,b){
    if (a.title > b.title) {
      return 1
    } else {
      return -1
    }
  });
  
  $('.row').html('');

  products.forEach((a, i)=>{
    var template = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${products[i].title}</h5>
      <p>가격 : ${products[i].price}</p>
    </div>`;
    $('.row').append(template)
  })
});

// input 입력받아 필터하는 기능
$('#search').click(function(){
  var text = document.getElementById("a").value;
  var newArray = products.filter(function(a){
    return a.price <= text
  });
  
  $('.row').html('');

  newArray.forEach((a, i)=>{
    var template = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${newArray[i].title}</h5>
      <p>가격 : ${newArray[i].price}</p>
    </div>`;
    $('.row').append(template)
  })
});



//다시 원래 상태로 정렬버튼
$('#returnbutton').click(function(){
  $('.row').html('');
  newProducts.forEach((a, i)=>{
    var template = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${newProducts[i].title}</h5>
      <p>가격 : ${newProducts[i].price}</p>
    </div>`;
    $('.row').append(template)
  })
});