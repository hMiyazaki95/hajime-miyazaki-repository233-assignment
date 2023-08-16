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

    // create item DOM element
    addItemToDOM(item);
    
    // Add item to local storage
    addItemToLocalStorage(newItem);

    checkUI();

    // Add li to the DOM
    itemInput.value = '';


}



function addItemToDOM(item){
    // create list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-item btn-link text-red');
    // Append the button to the list item
    li.appendChild(button);
    //console.log(button);

    //add item to the list
    itemList.appendChild(li);
}

function addItemToStorage(item){
    let itemsFromStorage;

    if (localStorage.getItem('items') === null){
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    // Add new item to array
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

function filterItems(e) {
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();
        // index must be greater than or equal to 0
        if (itemName.indexOf(text) != -1){
            item.style.display = 'flex';
            //console.log(true);
        } else {
            item.style.display = 'none';
            //console.log(false);
        }
    });
    //console.log(text);
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
// type of user 
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);

checkUI();

// localStorage.setItem('name', 'Brad');
// console.log(localStorage.getItem('name'));
// // localStorage.removeItem('name');
// localStorage.clear();