/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let res = str.split("");
  res.forEach(function(item, index, array) {
    if (item === '-') {
      array[index + 1] = array[index + 1].toUpperCase();
      array.splice(index, 1);
    }
  });
  res = res.join('');
  return res;
}
