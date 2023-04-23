let itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#ccc';
console.log(itemList.parentElement.parentElement);

console.log(itemList.firstElementChild);
console.log(itemList.firstChild);

console.log(itemList.lastElementChild);
console.log(itemList.lastChild);

console.log(itemList.nextElementSibling);
console.log(itemList.nextSibling);

console.log(itemList.previousElementSibling);
console.log(itemList.previousSibling);

let newchild = document.createElement('div');
console.log(newchild)

let newDiv = document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');
let newDivText = document.createTextNode('HEllo');
newDiv.appendChild(newDivText);

console.log(newDiv)

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);

let newli = document.createElement('li');
newli.className='helloli';
newli.id='hello1li';
newli.setAttribute('title','Hello li');
let newliText = document.createTextNode('HEllo');
newli.appendChild(newliText);

console.log(newli)

let ul = document.querySelector('div .list-group');
let li = document.querySelector('ul li');
ul.insertBefore(newli,li);
