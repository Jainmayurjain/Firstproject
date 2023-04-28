let form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');
let item = document.querySelector('#item')
let extraItem = document.querySelector('#extraItem')
let categ = document.querySelector('#category')

class Input {
    constructor(amount, description, category) {
        this.amount = amount;
        this.description = description;
        this.category = category;
    }
}

form.addEventListener('submit', addItem);
function addItem(event) {
    event.preventDefault();
    let newItem = document.getElementById('item').value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    let extraIt = document.getElementById('extraItem').value;
    li.appendChild(document.createTextNode(" " + extraIt));

    let category = document.getElementById('category').value;
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

    let newUser = new Input(item.value, extraItem.value, categ.value);
    let newUserStr = JSON.stringify(newUser);
    localStorage.setItem(extraItem.value, newUserStr);

    itemList.addEventListener('click', removeItem);
    function removeItem(event) {
        if (event.target.classList.contains('delete')) {
                let li = event.target.parentElement;
                localStorage.removeItem(newUser.description);
                itemList.removeChild(li);
        }
    }

    itemList.addEventListener('click', editItem);
    function editItem(event) {
        if (event.target.classList.contains('edit')) {
            let li = event.target.parentElement;
            //localStorage.removeItem(newUser.description)
            item.value = newUser.amount;
            extraItem.value = newUser.description;
            categ.value = newUser.category;
            //itemList.removeChild(li);
        }
    }

}