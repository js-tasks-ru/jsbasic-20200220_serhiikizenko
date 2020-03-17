/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let test = [];
  for (let item of users) {
    test.push(item.name);
  }
  return test;
}
