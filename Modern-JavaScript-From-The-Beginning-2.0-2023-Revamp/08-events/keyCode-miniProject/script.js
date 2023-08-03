// method 1
// window.addEventListener('keydown', (e) => {
//     const insert = document.getElementById('insert');

//     insert.innerHTML = `
//     <div class="key">
//     // this display string space as actual empty
//     ${e.key === ' ' ? 'space' : e.key} 
//     <small>e.key</small>
//     </div>

//    <div class="key">
//     ${e.keyCode}
//     <small>e.keyCode</small>
//    </div>

//    <div class="key">
//     ${e.code}
//     <small>e.code</small>
//     </div>
//     `;
// });

// Method 2
function showKeyCode(e){
    const insert = document.getElementById('insert');

    const keyCodes = {
        'e.key': e.key === ' ' ? 'space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code,
    };

    for (let key in keyCodes) {
        const div = document.createElement('div');
        div.className = 'key';
        const small = document.createElement('small');

        const keyText = document.createTextNode(key);
    }
}

window.addEventListener('keydown', showKeyCodes);
