'use strict';


let arr = ['543', '2999', '7998', '456', '6481', '200', '1900'];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].charAt(0) === '2' || arr[i].charAt(0) === '4') {
    console.log(arr[i]);
  }
}

function showPrimes(n) {
  nextPrime: for (let i = 1; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    console.log( i + ' Делители этого числа: 1 и ' + i); 
  }
}
showPrimes(100);