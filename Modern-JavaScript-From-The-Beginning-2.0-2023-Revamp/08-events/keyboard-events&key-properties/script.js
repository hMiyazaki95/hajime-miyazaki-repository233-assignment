const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
    console.log('keypress');
};

const onKeyUp = (e) => {
    console.log('onKeyup');
};

const onKeyDown = (e) => {
    // key
    if(e.key === 'Enter') {
        alert('You pressed enter');
    }

    // keyCode
    // https://www.toptal.com/developers/keycode/table-of-all-keycodes
    if (e.KeyCode === 13) {
        console.log('You pressed enter');
    }
    // code
    if (e.code === 'Didit1'){
        console.log('You pressed 1');
    }

    if (e.repeat) {
        console.log('You are holding down ' + e.key);
    }

    console.log('Shift: ' + e.shitKey);
    console.log('Control: ' + e.ctrlKey);
    console.log('Alt: ' + e.altKey);

    if (e.shiftKey && e.key ) {
        console.log('You hit shift + K');
    }
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);