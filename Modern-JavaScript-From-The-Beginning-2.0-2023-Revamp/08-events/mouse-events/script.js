const logo = document.querySelector('img');

const onClick = () => console.log('click event');
const onDoubleClick = () => {
    if (document.body.style.backgroundColor !== 'navy') {
        document.body.style.backgroundColor = 'navy';
        document.body.style.color = 'orange';

        
        // Select all li elements inside the ul
        const liElements = document.querySelectorAll('#item-list li');
        
        // Apply the outline and box-sizing style to each li element
        liElements.forEach(li => {
            li.style.outline = '2px solid orange';
            li.style.borderBottom = '2px solid orange';
            li.style.boxSizing = 'border-box'; // Add this line to include padding in the width
        });
    
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        // Select all li elements inside the ul
        const liElements = document.querySelectorAll('#item-list li');
        liElements.forEach(li => {
            li.style.outline = 'none';
            li.style.borderBottom = 'none';
            li.style.boxSizing = 'content-box'; // Reset box-sizing to default
        });
    }
};

const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseOver = () => console.log('mouse over event');
const onMouseOut = () => console.log('mouse out event');
const onDragStart = () => console.log('drag start event');
const onDrag = () => console.log('drag event');
const onDragEnd = () => console.log('drag end event');

// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);

