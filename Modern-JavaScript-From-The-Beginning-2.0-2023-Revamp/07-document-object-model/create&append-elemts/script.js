// Clean & Performant
function createNewItem(item){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');

    li.appendChild(button);

    document.querySelector('.items').appendChild(li);

}

function createButton(classes){
    const button = document.createElemenet('button');
    button.className = classes;

    // icon will be created inside the button
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    return button;
}

function createIcon(classes){
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';
    return icon;
}

// list of item add manually
createNewItem('Cheese');
createNewItem('Sauce');


