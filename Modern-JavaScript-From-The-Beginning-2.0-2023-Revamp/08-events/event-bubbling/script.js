const button = document.querySelector('form button');
// targeting the <div class="form-control">
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

// add item button will show the pop ups but not adding at this point yet.
button.addEventListener('click', (e) => {
    alert('Button was clicked');
    //  use it only when we have parent and child with the same event listener
    e.stopPropagation(); 
});

div.addEventListener('click', () => {
    alert('Div was clicked');
});

form.addEventListener('click', () => {
    alert('Form was clicked');
});

document.body.addEventListener('click', () => {
    alert('body was clicked');
});