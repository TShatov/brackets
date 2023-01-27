module.exports = function check(str, bracketsConfig) {
  console.log('Строка: ', str);
  console.log('Конфиг: ', bracketsConfig);

  const OPEN_BRACKETS = [];
  const CLOSED_BRACKETS = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    OPEN_BRACKETS.push(bracketsConfig[i][0]);
    CLOSED_BRACKETS.push(bracketsConfig[i][1]);
  }

  const BRACKETS_PAIR = CLOSED_BRACKETS.reduce((acc, item, index) => {
    acc[item] = OPEN_BRACKETS[index];
    return acc;
  }, {});

  console.log(BRACKETS_PAIR);

  if (str.length % 2 !== 0) {
    console.log('false');
    return false;
  }

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    
    if (OPEN_BRACKETS.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      let topElement = stack.pop();

      if (BRACKETS_PAIR[currentSymbol] !== topElement) {
        console.log('Stack false: ', stack);
        return false;
      } 
    }
  }
  return stack.length === 0;
}

// if (str.length % 2 !== 0) {
//   console.log('false');
//   return false;
// }

// const OPEN_BRACKETS = [];
// const CLOSED_BRACKETS = [];

// for (let i = 0; i < bracketsConfig.length; i++) {
//   OPEN_BRACKETS.push(bracketsConfig[i][0]);
//   CLOSED_BRACKETS.push(bracketsConfig[i][1]);
// }

// const BRACKETS_PAIR = CLOSED_BRACKETS.reduce((acc, item, index) => {
//   acc[item] = OPEN_BRACKETS[index];
//   return acc;
// }, {});

// //console.log(BRACKETS_PAIR);

// let stack = [];

// for (let i = 0; i < str.length; i++) {
//   let currentSymbol = str[i];
//   console.log('Current: ', currentSymbol);

  
//   if (OPEN_BRACKETS.includes(currentSymbol)) {
//     stack.push(currentSymbol);
//     //console.log('Stack push: ', stack);
//   } else {
//     if (stack.length === 0) {
//       console.log('false empty');
//       return false;
//     }

//     let topElement = stack[stack.length - 1];
//     console.log('TopElement: ', topElement);

//     if (BRACKETS_PAIR[currentSymbol] === topElement) {
//       stack.pop();
//       console.log('Stack pop');
//     } else {
//       console.log('false end');
//       return false;
//     }
//   }
// }
// return stack.length === 0;