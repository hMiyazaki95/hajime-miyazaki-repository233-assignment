// console.log(document.getElementById('app-title'));
// console.log(document.getElementById('app-title').id);
// console.log(document.getElementById('app-title').className);
// console.log(document.getElementById('app-title').getAttribute('id'));

// console.log(output);

// Set attributes
document.getElementById('app-title').title = 'Shopping List';
//document.getElementById('app-title').setAttribute('class', 'title');

// to avoid above type all the name into the console.log on by one do below
const title = document.getElementById('app-title');


// Get/change content
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerHTML = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

// Change Styles
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.InnerText = 'Apple Juice';
secondItem.style.color = 'red';

// use these methods on other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';

document.querySelector()


