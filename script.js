let num = 266219;

function opNumbers(num) { 
  if (!num) 
    return 0; 
  let result = 1; 
  while (num) { 
    result *= num % 10; 
    num = Math.floor(num / 10); 
  } 
  result = result ** 3; 
  console.log(result); 
  let arr = []; 
  while (result) { 
    arr.unshift(result % 10); 
    result = Math.floor(result / 10); 
  } 
  console.log(arr[0] , arr[1]); 
  return result; 
  }

  opNumbers(num);