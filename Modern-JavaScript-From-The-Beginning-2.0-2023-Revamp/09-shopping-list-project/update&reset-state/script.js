const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtm = itemForm.querySelector('button');
let isEditMode = false;

function displayItems() {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach((item) => addItemToDOM(item));
    checkUI();
}

function onAddItemSubmit(e){
    e.preventDefault();

    const newItem = itemInput.value;

    //Validate Input
    if (newItem === '') {
        alert('Please add an item');
        return;
    }

    //Check for edit mode
    if (isEditMode) {
        const ItemToEdit = itemList.querySelector('.edit-mode');

        removeItemFromStorage(itemToEdit.textContent);
        itemToEdit.classList.remove('edit-mode');
        itemToEdit.classList.add('edit-mode');
        isEditMode = false;
    } else { // prevent adding duplicate items
        if (checkIfItemExists(newItem)) {
            alert('That item already exists!');
            return;
        }
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

function addItemToStorage(item) {
    const itemsFromStorage = getItemsFromStorage();
    
    //.Add new item to array
    itemsFromStorage.push(item);

    // Convert to JSON string and set to local storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}


function getItemsFromStorage() {
    let itemsFromStorage;

    if(localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }
    return itemsFromStorage;

}


// handler
function onClickItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        removeItem(e.target.parentElement.parentElement);
    } else {
        //console.log(1);
        setItemToEdit(e.target);
    }
        
}

function checkIfItemExists(item) {

    const itemsFromStorage = getItemsFromStorage();
    return itemsFromStorage.include(item);

    // longer way
    // const itemsFromStorage = getItemsFromStorage();

    // if (itemsFromStorage.includes(item)){
    //     return true;
    // } else {
    //     return false;
    // }
}

function setItemToEdit(item) {
    isEditMode = true;

    // Remove edit-mode class from all items
    itemList.querySelectorAll('li')
    .forEach((i) => {
        i.classList.remove('edit-mode');
        i.style.color = ''; // Reset color for other items
    });

    // Add edit-mode class to clicked item
    item.classList.add('edit-mode');
    item.style.color = '#228B22'; // Change text color to #228B22
    
    formBtm.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
    formBtm.style.backgroundColor = '#228B22';
    itemInput.value = item.textContent;
}


function removeItem(item) {
    if (confirm('Are you sure?')) {
        // Remove item from DOM
        item.remove();

        // Remove item from storage
        removeItemFromStorage(item.textContent);

        checkUI();
    }
}

function removeItemFromStorage(item) {
   let itemsFromStorage = getItemsFromStorage();

    //console.log(itemsFromStorage);

   // Filter out item to be removed
   // filter() return new array with the deleted items removed
   itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

   // Re-set to localStorage
   localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function clearItems(){
    // while the itemlist ul has first child 
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }

    // Clear from localStorage
    localStorage.removeItem('items');
    // Call checkUI to update button visibility
    checkUI();
}

function filterItems(e) {
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if (itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function checkUI() {
    itemInput.value = '';

    const items = itemList.querySelectorAll('li');
  
    if (items.length === 0){
      clearBtn.style.display = 'none';
      itemFilter.style.display = 'none';
    } else {
      clearBtn.style.display = 'block';
      itemFilter.style.display = 'block';
    }

    formBtm.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
    // change it back to the color #333
    formBtm.style.backgroundColor = '#333';

    isEditMode = false;
}







//initialize app

function init() {
//Event listeners
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', onClickItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);
document.addEventListener('DOMContentLoaded', displayItems);

checkUI();
}

init()


