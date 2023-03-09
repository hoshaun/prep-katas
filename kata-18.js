const squareCode = function(message) {
  let code = '';
  let slices = [];
  const str = message.replaceAll(' ', '');
  const cols = Math.ceil(Math.sqrt(str.length));
  
  for (let i = 0; i < (cols ** 2); i += cols) {
    let slice = str.slice(i, i + cols);
    if (slice) {
      slices.push(slice);
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let slice of slices) {
      code += slice.charAt(i);
    }
    code += ' ';
  }
  
  return code;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));