function pow(x, n){
	var result = x

	for (var i = 1; i < n;  i++){
		result *= x;
	}
	return result;
}
var x = prompt("какое число x?", '');
var n = prompt("в какую степень n?", '');
	
	console.log(' ', pow);
    console.log('значение x: ', x);
    console.log('значение n: ', n);
    


if (n <= 1) {
  alert('Степень ' + n +
    'не поддерживается, введите целую степень, большую 1'
  );
} else {
  alert( pow(x, n) );
}