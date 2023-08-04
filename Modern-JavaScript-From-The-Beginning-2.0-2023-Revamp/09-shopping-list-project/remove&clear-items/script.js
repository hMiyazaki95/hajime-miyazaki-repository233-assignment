

const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('item-clear');


function addItem(e){
    e.preventDefault();

    const newItem = itemInput.value;

    //Validate Input
    if (newItem === '') {
        alert('Please add an item');
        return;
    }

    // create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-item btn-link text-red');
    // Append the button to the list item
    li.appendChild(button);
    console.log(button);

    itemList.appendChild(li);

    itemInput.value = '';
}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function removeItem(e) {
    // click icon
    if (e.target.parentElement.classList.contains('remove-item')) {
        e.target.parentElement.parentElement.remove();
    }
}

function clearItems(){
    // while the itemlist ul has first child 
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

//Event listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
