let library = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
}

const findRomanNum = (object, value) => object[value];

const findClosesNum = (value) => {
  let k = Object.keys(library);
  let keys = k.map((k) => Number(k))
  let closest;

  for (let i = 0; i < keys.length; i++) {
    if (value === keys[i]) {
      closest = keys[i]
    } else if (value > keys[i]) {
      closest = keys[i];
    }
  }

  return closest;
}

const converToRoman = (num) => {
  let closestNum = findClosesNum(num);
  let romanNums = [];

  let romanNum = findRomanNum(library, closestNum);
  romanNums.push(romanNum);

  let _closestNum = num - closestNum;
  while (_closestNum <= num && _closestNum > 0) {
    if (_closestNum === 1) {
      let romanNum = findRomanNum(library, _closestNum);
      romanNums.push(romanNum);
      return romanNums.join('');
    }

    __closestNum = findClosesNum(_closestNum);
    let romanNum = findRomanNum(library, __closestNum);
    romanNums.push(romanNum);
    _closestNum = _closestNum - __closestNum;

  }

  return romanNums.join('');
}

let romanNumerals = converToRoman(348);

console.log(romanNumerals);
