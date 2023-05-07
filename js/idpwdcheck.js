$('#login').on('click', function(){
  $('.black-bg').addClass('show-modal');
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