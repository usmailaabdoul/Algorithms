// const Substrs = (str) => {
//     let i, j, subStr = [];
  
//     for (i = 0; i < str.length; i++) {
//       for (j = i + 1; j < str.length + 1; j++) {
//         subStr.push(str.slice(i, j))
//       }
//     }
//     return subStr;
//   }
  
//   const compareStr = (str) => {
//     var i, newStr = [];
  
//     for (i = 0; i < str.length; i++) {
//         var string = str[i];
//       var sortedStr = string.split('').sort().join('')
//       newStr.push(sortedStr)
//     }
   
//     let duplicate = str => str.filter((items, index) => str.indexOf(items) != index)
//     return duplicate(newStr);
//   }
  
//   var results = compareStr(Substrs('mom'));
  
//   console.log(results);

  const Substrings = (str) => {
    let i, j, subStr = [];
  
    for (i = 0; i < str.length; i++) {
      for (j = i + 1; j < str.length + 1; j++) {
        subStr.push(str.slice(i, j))
      }
    }
    return subStr;
  }
  
  const pairSubStrings = (strings) => {
    var i, j, newArrOfString = [];
    let arrOfStrings = Substrings(strings);

    for (i = 0; i < arrOfStrings.length; i++) {
      for (j = i + 1 ; j < arrOfStrings.length; j++) {
        	let a = arrOfStrings[i].split('').sort().join('');
        	let b = arrOfStrings[j].split('').sort().join('');

       		if(a == b) {
            let p = [arrOfStrings[i],arrOfStrings[j]]
            newArrOfString.push(p)
          }

      }
    }
    return newArrOfString;
  }
  
  var results = pairSubStrings('mom');
  
  console.log(results);
