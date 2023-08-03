const clearBtn = document.querySelector('#clear');

function onClear() {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    // itemList.innerHTML =  '';

    // items.forEach((item)) => { item.remove());

    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

// function onClear() {
//   alert('Clear Items');
// }

// Javascript Event listener
// clearBtn.onclick = function(){
//     alert('Clear Items');
// };

// clearBtn.onclick = function(){
//    console.log('Clear Items');
// };

// addEventListener()
// clearBtn.addEventListener('click', () => alert('Clear Items'));
// clearBtn.addEventListener('click', () => console.log('Clear Items'));

clearBtn.addEventListener('click', onClear);

// setTimeOut(() => clearBtn.removeEventListener('click', onClear), 5000);

setTimeout(() => clearBtn.click(), 5000);