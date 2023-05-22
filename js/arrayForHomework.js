var 출석부 = ['흥민', '영희', '철수', '재석'];

function findName(name) {
    출석부.forEach(function(a){
        if(name == a);
        //console.log(name);
    });
}


for(var i = 2; i < 10; i++) {
    for(var j = 1; j < 10; j++){
        //console.log(`i * j = ${i*j}`);
    }
}
var sum = 0;
function calc(score, result){
    score.forEach(function(a){
        sum += a;
    });
    if(result - sum/score.length > 0) {
        console.log(`평균보다 ${Math.abs(sum/score.length - result)}점 올랐네요`);
        sum = 0;
    } else if(result - sum/score.length < 0) {
        console.log(`평균보다 ${Math.abs(sum/score.length - result)}점 떨어졌네요. 재수 추천`);
        sum = 0;
    } else {
        console.log('지난 평균과 동일하네요.');
    }
}

calc([40, 40, 40], 20);
calc([10, 20, 30, 40, 50], 40) ;