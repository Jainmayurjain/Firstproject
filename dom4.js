//QuerySelector 
let header = document.querySelector('#main-header');
header.style.borderBottom='5px solid #000';

let submit = document.querySelector('input[type="submit"]');
submit.value = 'Wroom';

let lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none';

//QuerySelectorAll
let secondList= document.querySelectorAll('.list-group-item');
secondList[1].style.color='green';
let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');
for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='green'
    even[i].style.backgroundColor='coral'
}
