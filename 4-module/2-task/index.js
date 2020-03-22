/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  let tableRows = table.rows;
  let i = 0;
  for (let item of tableRows) {
    item.cells[i].style.backgroundColor = 'red';
    i += 1;
  }
}

