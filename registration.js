let form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');
let fname = document.querySelector('#fname')
let email = document.querySelector('#email')
let phone = document.querySelector('#phone')

form.addEventListener('submit', addItem);
function addItem(event) {
    event.preventDefault();
    const obj = {
        name: document.getElementById('fname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    }

    //let newUser = new Input(fname.value, email.value, phone.value);
    axios.post('https://crudcrud.com/api/c82e5c5a765b459abda551a95ce03bad/registration', obj)
        .then(res => { console.log(res); showOutput(res.data) })
        .catch(err => {
            document.body.innerHTML = document.body.innerHTML + "Something wrong happened"
            console.error(err)
        })

    //let newUserStr = JSON.stringify(newUser);
    //localStorage.setItem(extraItem.value, newUserStr);
    //localStorage.setItem((new Date()).getTime(), newUserStr); // To get input as per sec

    fname.value = '';
    email.value = '';
    phone.value = '';
}

itemList.addEventListener('click', removeItem);
function removeItem(event) {
    if (event.target.classList.contains('delete')) {
        let li = event.target.parentElement;
        const id = li.id
        axios.delete(`https://crudcrud.com/api/c82e5c5a765b459abda551a95ce03bad/registration/${id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        itemList.removeChild(li);
    }
}

function showOutput(res) {
    //let newItem = document.getElementById('fname').value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(res.name));

    //let extraIt = document.getElementById('email').value;
    li.appendChild(document.createTextNode(" " + res.email));
    li.id = res._id

    //let category = document.getElementById('phone').value;
    li.appendChild(document.createTextNode(" " + res.phone));

    let delbutton = document.createElement('button');
    delbutton.className = 'btn btn-danger btn-sm delete';
    delbutton.appendChild(document.createTextNode('Delete'));
    li.appendChild(delbutton);

    let editbutton = document.createElement('button');
    editbutton.className = 'btn btn-primary btn-sm edit';
    editbutton.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbutton);

    itemList.appendChild(li);
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/c82e5c5a765b459abda551a95ce03bad/registration")
        .then((res) => {
            //console.log(res)
            //showOutput(res.data[0])
            for (let i = 0; i < res.data.length; i++) {
                showOutput(res.data[i])
                //console.log(res.data[i])
            }
        })
        .catch((err) => console.log(err))

})