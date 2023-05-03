let form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');
let fname = document.querySelector('#fname')
let email = document.querySelector('#email')
let phone = document.querySelector('#phone')

/*class Input {
    constructor(amount, description, category) {
        this.amount = amount;
        this.description = description;
        this.category = category;
    }
}*/

form.addEventListener('submit', addItem);
function addItem(event) {
    event.preventDefault();
    let newItem = document.getElementById('fname').value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    let extraIt = document.getElementById('email').value;
    li.appendChild(document.createTextNode(" " + extraIt));
    li.id=extraIt

    let category = document.getElementById('phone').value;
    li.appendChild(document.createTextNode(" " + category));

    let delbutton = document.createElement('button');
    delbutton.className = 'btn btn-danger btn-sm delete';
    delbutton.appendChild(document.createTextNode('Delete'));
    li.appendChild(delbutton);

    let editbutton = document.createElement('button');
    editbutton.className = 'btn btn-primary btn-sm edit';
    editbutton.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbutton);

    itemList.appendChild(li);
    //let newUser = new Input(fname.value, email.value, phone.value);
    axios.post('https://crudcrud.com/api/c82e5c5a765b459abda551a95ce03bad/registration',
    {
      name:fname.value,
      email:email.value,
      phone:phone.value
    })
    .then(res => {console.log(res); showOutput(res.data)})
    .catch(err => {document.body.innerHTML=document.body.innerHTML+"Something wrong happened"
        console.error(err)})

    //let newUserStr = JSON.stringify(newUser);
    //localStorage.setItem(extraItem.value, newUserStr);
    //localStorage.setItem((new Date()).getTime(), newUserStr); // To get input as per sec

    fname.value = '';
    email.value = '';
    phone.value = '';

    /*function showOutput(res) {
        document.getElementById('res').innerHTML = `
        <div class="card mt-3">
          <div class="card-body">
            <pre>${res.name},${res.email},${res.phone}</pre>
          </div>
        </div>`;
      }*/

}