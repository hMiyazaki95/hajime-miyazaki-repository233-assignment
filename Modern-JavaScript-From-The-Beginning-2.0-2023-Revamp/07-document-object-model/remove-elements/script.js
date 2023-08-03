function removeClearButton() {
    const clearBtn = document.querySelector('.clear');
    clearBtn.remove();
}

function removeFirstItem() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
}
// parameter takes the index in the list
function removeItem(itemNumber) {
    const ul = document.querySelector('ul');
    // access to the element  based on the itemNumber
    const li = document.querySelector('li')[itemNumber];
    // remove the element from the list
    ul.removeChild(li);
}

function removeItem3(itemNumber) {
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
}

const removeItem4 = (itemNumber) => {
    document.querySelectorAll('li')[itemNumber - 1].remove();
}
removeClearButton();
//removeFirstItem();
//removeItem(2);
removeItem2(1); // this removes the item in the index of the 1 element
