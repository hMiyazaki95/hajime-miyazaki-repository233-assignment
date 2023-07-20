function insertAfter(newEl, existingEl){
    existingEl.parentElement.insertBefore(newEl, existingEl);
}

// New element to insert
// this inserts before the top element 
const li = document.createElement('li');
li.textContent = 'Insert Me After';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

//our custom function
insertAfter(li, firstItem);

