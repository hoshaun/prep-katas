const makeCase = function(input, casings) {
  const styles = [
    'camel', 
    'pascal', 
    'snake', 
    'kebab', 
    'title', 
    'vowel', 
    'consonant', 
    'upper', 
    'lower'
  ];
  let str = '';

  if (casings.constructor === Array) {
    for (let style of styles) {
      if (casings.includes(style)) {
        str = caser(str === '' ? input : str, style);
      }
    }
  } else {
    str = caser(input, casings);
  }
  return str;
}

const caser = function(input, casing) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let str = '';
  let i = 0;
  switch(casing) {
    case 'camel':
      while (i < input.length) {
        if (input[i] === ' ') {
          str += input[i+1].toUpperCase();
          i += 2;
        } else {
          str += input[i];
          i++;
        }
      }
      break;
    case 'pascal':
      while (i < input.length) {
        if (i === 0) {
          str += input[i].toUpperCase();
          i++;
        } else if (input[i] === ' ') {
          str += input[i+1].toUpperCase();
          i += 2;
        } else {
          str += input[i];
          i++;
        }
      }
      break;
    case 'snake':
      while (i < input.length) {
        if (input[i] === ' ') {
          str += '_';
        } else {
          str += input[i];
        }
        i++;
      }
      break;
    case 'kebab':
      while (i < input.length) {
        if (input[i] === ' ') {
          str += '-';
        } else {
          str += input[i];
        }
        i++;
      }
      break;
    case 'title':
      while (i < input.length) {
        if (i === 0) {
          str += input[i].toUpperCase();
          i++;
        } else if (input[i] === ' ') {
          str += ' ' + input[i+1].toUpperCase();
          i += 2;
        } else {
          str += input[i];
          i++;
        }
      }
      break;
    case 'vowel':
      while (i < input.length) {
        if (vowels.includes(input[i])) {
          str += input[i].toUpperCase();
        } else {
          str += input[i];
        }
        i++;
      }
      break;
    case 'consonant':
      while (i < input.length) {
        if (!vowels.includes(input[i])) {
          str += input[i].toUpperCase();
        } else {
          str += input[i];
        }
        i++;
      }
      break;
    case 'upper':
      str = input.toUpperCase();
      break;
    case 'lower':
      str = input.toLowerCase();
      break;
    default:
      //
  }
  return str;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));