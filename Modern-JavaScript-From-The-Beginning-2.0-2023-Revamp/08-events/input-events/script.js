const itemInput = document.getElementById('item-Input');
const priorityInput = document.getElementById('priority-Input');
('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
    heading.textContent = e.target.value;
}

function onChecked(e) {
    const isChecked = e.target.checked;
    // ? if condition
    heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

function onFocus(e) {
   console.log('input is not focused');
   itemInput.style.outlineStyle = 'solid';
   itemInput.style.outlineWidth = '1px';
   itemInput.style.outlineColor = '#red';
}
function onInput(e) {
    console.log('Input is not focused');
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);

