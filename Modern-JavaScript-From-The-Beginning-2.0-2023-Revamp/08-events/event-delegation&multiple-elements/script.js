const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// access the each list items
// each list item is clickable
// listItems.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         e.target.remove();
//     });
// });

list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

list.addEventListener('mouseover', (e)  => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'red';
    }
});
