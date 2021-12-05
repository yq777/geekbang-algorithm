/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
  let result = '';
  for (let index = 0; index < s.length; index++) {
    const code = s[index].charCodeAt(0);
    if (code <= 90 && code >= 65) {
      result += String.fromCharCode(code + 32);
    } else {
      result += s[index];
    }
  }
  return result;
};
