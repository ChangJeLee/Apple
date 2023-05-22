
$.get('https://codingapple1.github.io/hello.txt')
 .done(function(data){
   // console.log(data);
}).fail(function(){
    console.log('실패함');
})

$.get('https://codingapple1.github.io/price.json')
 .done(function(data){
    //console.log(data.price);
}).fail(function(){
    console.log('실패함');
})

fetch('https://codingapple1.github.io/price.json')
  .then(res => res.json())
  .then(function(data){
    //console.log(data)
  })
  .catch(function(error){
    console.log('실패함')
  });