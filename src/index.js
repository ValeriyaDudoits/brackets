module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) return false;

  let arr = str.split('');
  let stack = [];

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < bracketsConfig.length; j++) {
      if (arr[i] === bracketsConfig[j][1]) {

        if (stack[stack.length - 1] === j) {

          stack.pop(j);
          break;

        } else if (arr[i] === bracketsConfig[j][0]) {

          stack.push(j);
          break;

        } else {

          return false;

        }
      } else if (arr[i] === bracketsConfig[j][0]) {

        stack.push(j);
        break;

      }
    }
  }

  return stack.length === 0 ? true : false;
}
