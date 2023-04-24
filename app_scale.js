const myform= document.querySelector('#my-form');
const nameInput= document.querySelector('#name');
const emailInput= document.querySelector('#email');
const numberInput = document.querySelector('#number');
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
        class Input {
            constructor(name,phone,email){
                this.name=name;
                this.phone=phone;
                this.email=email;
            }
        }
        let newUser = new Input(nameInput.value,numberInput.value,emailInput.value);
        let newUserStr = JSON.stringify(newUser);
        localStorage.setItem(emailInput.value, newUserStr);
        nameInput.value='';
        emailInput.value='';
    }
}