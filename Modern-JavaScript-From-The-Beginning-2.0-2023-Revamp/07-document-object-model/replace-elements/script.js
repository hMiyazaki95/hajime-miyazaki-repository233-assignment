function replaceFirstItem() {
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = 'Replaced First';

    firstItem.replaceWith(li);
}

function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li> Replaced Second</li>';    
}

function replaceAllItems() {
const lis = document.querySelectorAll('li');

    // lis.forEach((item, index) => {
        
    //     // item.outerHTML = '<li> Replaced All</li>';
    //     if (index === 1){
    //         firstItem.innerHTML = 'Second Item';
    //     } else {
    //         firstItem.innerHTML = 'Replace All';
    //     }
    // });

    lis.forEach(
        (item, index) =>
           (item.outerHTML = index === 1 ? '<li>Second Item</li>': '<li>Item</li>')
    );
}

// this function is to replace the h1 with h2
function replaceChildHEading(){
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'Shopping List'
    header.replaceChild(h2, h1);
}


replaceFirstItem();
replaceSecondItem();
replaceAllItems();
replaceChildHEading();

