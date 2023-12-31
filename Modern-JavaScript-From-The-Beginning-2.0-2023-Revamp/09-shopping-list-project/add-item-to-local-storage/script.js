const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const items = itemList.querySelectorAll('li');


function onAddItemSubmit(e){
    e.preventDefault();

    const newItem = itemInput.value;

    //Validate Input
    if (newItem === '') {
        alert('Please add an item');
        return;
    }

    //create item DOM element
    addItemToDOM(newItem);

    // Add item to local storage
    addItemToStorage(newItem);
    
    checkUI();

    itemInput.value = '';

    // // Call checkUI to update button visibility
    // checkUI();
}

function addItemToDOM(item) {
        // create list item
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(item));
    
        const button = createButton('remove-item btn-link text-red');
        // Append the button to the list item
        li.appendChild(button);
        //console.log(button);
    
        itemList.appendChild(li);
}

function addItemToStorage(item) {
    let itemsFromStorage;

    if(localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    
    //.Add new item to array
    itemsFromStorage.push(item);

    // Convert to JSON string and set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
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
    if (e.target.parentElement.classList.contains
        ('remove-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();

            checkUI();
        }
    }
}

function clearItems(){
    // while the itemlist ul has first child 
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    // Call checkUI to update button visibility
    checkUI();
}

function checkUI() {
  const items = itemList.querySelectorAll('li');

  if (items.length === 0){
    clearBtn.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearBtn.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}

//Event listeners
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);


checkUI();
