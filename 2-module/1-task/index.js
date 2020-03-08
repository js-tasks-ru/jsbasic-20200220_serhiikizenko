/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

function sumSalary(salaries) {
  let result = 0;
  
  for (let prop in salaries) {
    console.log(salaries[prop] + ' = ' + typeof salaries[prop]);
    if (typeof salaries[prop] === 'number') {
      result += salaries[prop];
      console.log(result);
    }
  }
  return result;
}
