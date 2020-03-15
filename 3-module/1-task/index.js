/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  const filtered = [];
  let result = '';

  for (let item of data) {
    if (item.age <= age) {
      filtered.push(item);
    }
  }
  
  for (let item of filtered) {
    result += `${item.name}, ${item.balance}\n`;
  }
  result = result.trim();
  return result;
}

