var button = $('.tab-button');
var content = $('.tab-content');

//for(let i = 0; i < button.length; i++) {
//    button.eq(i).on('click', function() {
//        button.removeClass("orange");
//        button.eq(i).addClass("orange");
//        content.removeClass("show");
//        content.eq(i).addClass("show");
//    });
//}

//위 코드를 함수로 축약하기 

// for(let i = 0; i < button.length; i++) {
//     button.eq(i).on('click', function() {
//         tabOpen(i);
//     });
// }

// 더 축약하기 
// $('.list').click(function(e) {
//     for(let i = 0; i < button.length; i++) {
//         if($(e.target).is($('.tab-button').eq(i))){
//             tabOpen(i);
//         }
//     }
// })

//html에 사용자가 모르는 숫자를 입력(data-id=0) 해서 그걸 이용하는 방법 
$('.list').click(function(e) {
    tabOpen(parseInt(e.target.dataset.id));
})

function tabOpen(a) {
    button.removeClass("orange");
    button.eq(a).addClass("orange");
    content.removeClass("show");
    content.eq(a).addClass("show");    
}