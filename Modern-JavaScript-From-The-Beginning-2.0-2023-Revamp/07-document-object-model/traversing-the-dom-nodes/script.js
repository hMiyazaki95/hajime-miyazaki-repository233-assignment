let output;
const parent = document.querySelecror('.parent');

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;

// replace white space with Hello
parent.lastChild.textContent = 'Hello';

// Parent Node

const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement;

// can use parentNode or ParentElement 
child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// Siblings
const secondItem = document.querySelector('.child:nth-child(2)');

// next sibling is text node
output = secondItem.nextSibling;
output = secondItem.previousSibling;



console.log(output);


