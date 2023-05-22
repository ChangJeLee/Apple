var car = ['소나타', 50000, 'white'];
//console.log(car[0]);
car[0] = '그랜져';
//console.log(car[0]);

// var car2 = {
// // key : value
//   name : '소나타', 
//   price : 50000,
//   color : 'white'
// }
// console.log(car2.name);
// console.log(Object.keys(car2));
// console.log(Object.values(car2));
// // array, object 차이점 
// // 상품 정보가 많을 때 object에 보관하는게 편함
// // array는 순서 개념이 있는데 얘는 순서 개념이 없음 (중요)

// console.log(car.slice)
// 내가 한 것
//$('.test').html(`${car2.name} / ${car2.price}`);

// 강사가한거
// $('.car-title').html(car2.name});
// $('.car-price').html(car2.price});

// 오브젝트 안에는 아무거나 다 넣을 수 있음
var car2 = {
    name : 'Sonata',
    price : [50000, 3000, 4000]
}
$('.car-title').html(car2.name);
$('.car-price').html(car2.price[2]);

var products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

for(var i = 0; i < products.length; i++) {
    $('.card-body h5').eq(i).html('상품명 : ' + products[i].title);
    $('.card-body p').eq(i).html('가격 : ' + products[i].price);
}

// 문자 중간 중간에 변수를 넣고싶음  ex) '문자' + a + '문자'
// 백틱이 쓰임
// `문자${a}문자`


