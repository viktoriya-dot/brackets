const OPEN_BRACKETS = ['(', '{', '[', '1', '3', '5']
  const BRACKETS_PAIR = {
    [')'] : '(',
    ['}'] : '{',
    [']'] : '[',
    ['2'] : '1',
    ['4'] : '3',
    ['6'] : '5',
   };
module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for (i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
   if (OPEN_BRACKETS.includes(currentSymbol)) {
    stack.push(currentSymbol)
  } else if ('|78'.includes(currentSymbol)) {
    if (stack.length === 0) {
      stack.push(currentSymbol)
    } else {
        if (currentSymbol === stack[stack.length - 1]) {
          stack.pop();
        } else {
          stack.push(currentSymbol);
        }
      }
      } else {
      if (stack.length === 0) {
        return false;
      }

    let topStackElement = stack[stack.length - 1]
    if (BRACKETS_PAIR[currentSymbol] === topStackElement) {
      stack.pop()
    } else {
      return false

    }
  }
}
return stack.length === 0
}

