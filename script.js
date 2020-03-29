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
  result = String(result);
  console.log(result[0] + ' ' + result[1]);
  return result; 
}
opNumbers(num);