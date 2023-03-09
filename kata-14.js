const calculateChange = function(total, cash) {
  let change = cash - total;
  let obj = {};
  while (change > 0) {
    if (change >= 2000) {
      obj.twentyDollar = (obj.twentyDollar || 0) + 1;
      change -= 2000;
    } else if (change >= 1000 && change < 2000) {
      obj.tenDollar = (obj.tenDollar || 0) + 1;
      change -= 1000;
    } else if (change >= 500 && change < 1000) {
      obj.fiveDollar = (obj.fiveDollar || 0) + 1;
      change -= 500;
    } else if (change >= 200 && change < 500) {
      obj.twoDollar = (obj.twoDollar || 0) + 1;
      change -= 200;
    } else if (change >= 100 && change < 200) {
      obj.oneDollar = (obj.oneDollar || 0) + 1;
      change -= 100;
    } else if (change >= 25 && change < 100) {
      obj.quarter = (obj.quarter || 0) + 1;
      change -= 25;
    } else if (change >= 10 && change < 25) {
      obj.dime = (obj.dime || 0) + 1;
      change -= 10;
    } else if (change >= 5 && change < 10) {
      obj.nickel = (obj.nickel || 0) + 1;
      change -= 5;
    } else if (change >= 1 && change < 5) {
      obj.penny = (obj.penny || 0) + 1;
      change -= 1;
    }
  }
  return obj;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));