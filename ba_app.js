const myform= document.querySelector('#my-form');
const nameInput= document.querySelector('#name');
const emailInput= document.querySelector('#email');
const msg= document.querySelector('.msg');
const userList= document.querySelector('#users');

myform.addEventListener('submit', onsubmit);

function onsubmit(event){
    event.preventDefault();
    if(nameInput.value==='' || emailInput.value===''){
        msg.classList.add('error');
        msg.innerHTML='Required fields have not been filled';
        setTimeout(()=> {msg.classList.remove('error');msg.remove();},3000);
    }
    else{
        const li =document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);
        localStorage.setItem('name', nameInput.value)
        localStorage.setItem('email', emailInput.value)
        console.log(localStorage.getItem('name'));
        nameInput.value='';
        emailInput.value='';
    }
}