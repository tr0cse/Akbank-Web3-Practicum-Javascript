const oddOrEven = (num) => {
  const len = num.toString().length;
  let digits = 10;
  let divide = 1;
  let sum = 0;
  for (let i = 1; i <= len; i++) {
    let digit = parseInt((num % digits) / divide, 10);
    divide *= 10;
    digits *= 10;
    num -= digit;
    sum += digit;
  }
  if (sum % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
