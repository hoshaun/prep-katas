const urlEncode = function(text) {
  let encoded = '';
  for (let i = 0; i < text.length; i++) {
    if (i !== 0 && i !== text.length - 1 && text[i] === ' ') {
      encoded += '%20';
    } else if (text[i] !== ' ') {
      encoded += text[i];
    }
  }
  return encoded;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));