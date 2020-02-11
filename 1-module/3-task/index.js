/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let length = str.length;

  if (!length) {
    return str;
  } else if (length === 1) {
    return length = str.toUpperCase();
  } else if (length > 1) {
    return length = str[0].toUpperCase() + str.slice(1);
  }
}
