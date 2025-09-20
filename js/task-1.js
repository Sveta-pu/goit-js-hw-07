const ulCategories = document.querySelector('#categories');
const liItems = ulCategories.querySelectorAll('li.item');

console.log(`Number of categories:${liItems.length}`);

liItems.forEach(x => {
  const h2X = x.querySelector('h2');
  const elements = x.querySelectorAll('li').length;

  console.log(`Category:${h2X.textContent}`);
  console.log(`Elements ${elements}`);
});
