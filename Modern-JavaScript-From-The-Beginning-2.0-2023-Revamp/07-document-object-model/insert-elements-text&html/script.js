// insertAdjacentElement Example
function insertElement() {
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';

    filter.insertAdjacentElement('beforebegin', h1);
}
// insertAdjacentElement Example
function insertText() {
    const item = document.querySelector('li:first-child');
    // afterend, beforebegin
    item.insertAdjacentText('beforebegin', 'insertAdjacentText');
}

// insertAdjacentHTML example
function insertHTML() {
    const clearBtn = document.querySelector('#clear');
    
    clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
}
// insertBefore example

function insertBeforeItem() {
    const ul = document.querySelector('ul');

    const li = document.querySelector('li');
    li.textContent = 'insertBefore';

    const thirdItem = document.querySelector('li:nth-chils(3)');

    ul.insertBefore(li, thirdItem);
}

// calling your functions
insertElement();
insertText();
insertHTML();
insertBeforeItem();




/*
<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    foo
    <!-- beforeend -->
</p>
<!-- afterend -->
*/

