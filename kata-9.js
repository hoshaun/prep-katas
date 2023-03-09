const camelCase = function(input) {
  let camelCase = '';
  let i = 0;
  while (i < input.length) {
    if (input[i] === ' ') {
      camelCase += input[i+1].toUpperCase();
      i += 2;
    } else {
      camelCase += input[i];
      i++;
    }
  }
  return camelCase;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));