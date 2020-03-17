/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let filtered = []; 
  for (let item of arr) {
    if (a <= item && item <= b) {
      filtered.push(item);
    }
  }
  return filtered;
}
