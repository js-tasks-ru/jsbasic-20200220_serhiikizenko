/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  const ul = document.createElement('ul');
<<<<<<< HEAD
  
  for (let item of friends) {
    let li = document.createElement('li');
    li.innerHTML = `${item.firstName} ${item.lastName}`;
    ul.appendChild(li); 
  }
=======

  ul.innerHTML = friends.map(item => `
      <li>${item.firstName} ${item.lastName}</li>
  `).join('');
>>>>>>> b0c32748b26baa04651a142274d596ceacd026ba

  return ul;
}
