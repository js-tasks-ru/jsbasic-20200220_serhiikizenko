/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    result = str.slice(0, maxlength - 1) + '…';
    console.log(result);
  } else {
    return str;
  }
}
