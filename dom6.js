let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

form.addEventListener('submit',addItem);
function addItem(event){
    event.preventDefault();
    let newItem = document.getElementById('item').value; // It will get input value 
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    let delbutton = document.createElement('button');
    delbutton.className='btn btn-danger btn-sm float-right delete';
    delbutton.appendChild(document.createTextNode('X'));
    li.appendChild(delbutton);

    let editbutton = document.createElement('button');
    editbutton.className='btn btn-primary btn-sm float-right editbutton';
    editbutton.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbutton);

    itemList.appendChild(li); // Appending newly created li with button to ul
}

itemList.addEventListener('click', removeItem);
function removeItem(event){
    if(event.target.classList.contains('delete')){    //To make only delete button function not complete li 
       if(confirm('Are you sure?')){   // It will popup message before deleting
         let li = event.target.parentElement;   //This will target to parent of delete button i.e. li tag in which it is
         itemList.removeChild(li);  // Now we have to remove that respective li tag
       }
    }
}