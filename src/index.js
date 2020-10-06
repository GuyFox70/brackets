module.exports = function check(str, bracketsConfig) {
  let a = str;

  for (let i = 0; i <= str.length - 1; i++) {
    for (let elem of bracketsConfig) {
      a = a.replace(elem.join(''), '');

      if (a.length == 0) {
        return true;
      }
    }
  }

  return false;
}
