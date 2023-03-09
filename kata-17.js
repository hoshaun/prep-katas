const urlDecode = function(text) {
  let obj = {};
  for (let pair of text.split('&')) {
    let arr = pair.split('=');
    obj[arr[0]] = arr[1].replaceAll('%20', ' ');
  }
  return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);