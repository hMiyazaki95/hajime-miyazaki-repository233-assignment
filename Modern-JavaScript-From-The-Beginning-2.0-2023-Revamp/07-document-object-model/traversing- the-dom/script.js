let output;

// Get child elements

const parent = document.querySelector('.parent');

output = parent.children;

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[2].nodeName;

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get Parent elements from a chile

const child = document.querySelector('.child');

output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
output = secondItem.nextElementSibling.style.color = 'green';
output = secondItem.previousElementSibling.style.color = 'orange';


console.log(output);