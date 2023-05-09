$('#login').on('click', function(){
  $('.black-bg').addClass('show-modal');
});
// 모달을 addClass로 띄웠으면 removeClass로 지워야함;; 다른거로 지우려고 하면 안 닫힘 

$('#close').on('click', function(){
  $('.black-bg').removeClass('show-modal');
});

//$('.black-bg').on('click', function(){
//  $('.black-bg').removeClass('show-modal');
//});
// 이렇게만 하면 이벤트 버블링이라는게 일어남(이벤트가 상위 html로 퍼지는 현상임)
// 실제로 검정 background클릭 시 모달 제거하게 의도하였으나, 
// 흰 모달창을 눌러도 모달창 + 배경이 눌리니 두 번 눌리는 것임
// 고칠 수 있음 >> 유용한 이벤트관련 함수들

/*
  e.target; // 유저가 실제로 누른 것
  e.currentTarget //이벤트 리스너 달린 곳
  e.preventDefault(); //이벤트 기본동작 막음
  e.stopPropagation(); // 내 상위요솔 퍼지는 이벤트 버블링 막아줌
*/

$('.black-bg').on('click', function(e){
  if($(e.target).is($('.black-bg')) ){
    $('.black-bg').removeClass('show-modal');
    e.stopPropagation();
  } 
});

$('form').on('submit', function(e){
  if (document.getElementById('email').value == '' || document.getElementById('pw').value == '') {
    alert('아이디 패스워드 입력하쇼');
    e.preventDefault();
  } 
  else if (document.getElementById('pw').value.length < 6){
    alert('왜케 비번이 짧음?');
    e.preventDefault();
  }
});

