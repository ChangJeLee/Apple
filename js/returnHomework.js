function convertMil(a, b) {
    var hourToMil = a * 60 * 1000;
    var minToMil = b * 1000;
    return parseInt(hourToMil + minToMil);
  }
 // console.log(convertMil(2,10));

  function discount(a, b) {
    if (b == true) {
        var result = a * 0.9 - 1.5;
        return parseFloat(result.toFixed(2));
    } else {
        return a * 0.9;
    }

  }
 // console.log(discount(70,false));
 // console.log(discount(10,true));