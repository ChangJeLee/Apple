let secNum = 5;
setInterval(function() {
    secNum -= 1;
    if (secNum != 0) {
      $('.alert').html(`${secNum}초 이내 구매시 사은품 증정!`);
    } else if (secNum == 0) {
      $('.alert').hide();
    }
  }, 1000);
