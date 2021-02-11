
var formEl = document.getElementById('submit');
var newWord = document.getElementById('comboWord');
// var subHead = document.getElementById('subHead');

formEl.addEventListener('click', function (event) {
  event.preventDefault();

  document.getElementById('subHead').style.display = "none";
  const firstWord = ['butt cheese', 'fart', 'pee', 'vomit', 'snotty', 'the runs', 'diharrea', 'sbd', 'booger', 'potty', 'shart', 'dung', 'crap', 'excrement', 'feces', 'bodily fluid', 'deuce', 'number two', 'tinkle', 'wizz', 'peepee', 'snot', 'phlegm', 'bile', 'sweaty', 'spit', 'puke', 'chunks', 'barf', 'poo poo'];

  var randomFirst = firstWord[Math.floor(Math.random() * 30)];
  console.log(randomFirst);

  const secondWord = ['sandwich', 'burrito', 'burger', 'omlette', 'pie', 'potpie', 'casserole', 'meat loaf', 'stew', 'steaks', 'soup', 'bake', 'fries', 'salad', 'cereal', 'taco', 'margarita', 'chips', 'sauce', 'pasta', 'oatmeal', 'dip', 'milk', 'coffee', 'juice', 'smoothie', 'pizza', ' and guac', 'cookie', 'brownie', 'cake'];

  var randomSecond = secondWord[Math.floor(Math.random() * 31)];

  const elementColors = [ "red", "brown", "darkolivegreen", "chocolate", "darksalmon", "goldenrod", "sienna", "salmon", "saddlebrown", "tomato"]

  var randomColor = elementColors[Math.floor(Math.random() * 10)];
  console.log(randomColor);
  console.log(randomSecond);

  
  // newWord.appendChild(newHeader);
  // newHeader.innerHTML = '';
  document.getElementById('comboWord').style.color = randomColor;
  newWord.innerHTML = (`${randomFirst} ${randomSecond}`).toUpperCase();
  console.log(newWord);
  return newWord;
});