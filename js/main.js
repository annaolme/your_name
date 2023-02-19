// get references to the elements
const nameBox = document.querySelector('.box');
const pushBtn = document.querySelector('#pushBtn');
const clearBtn = document.querySelector('#clearBtn');
const nameList = document.querySelector('.name-list');

// add event listener to name box for input
nameBox.addEventListener('input', () => {
    // if the name box has the default text, clear it
    if (nameBox.textContent === '') {
        nameBox.textContent = '';
    }
});

// add event listener to push button
pushBtn.addEventListener('click', () => {
    // create a new box for the name
    const newNameBox = document.createElement('div');
    newNameBox.className = 'name-box';
    newNameBox.textContent = nameBox.textContent;
    nameList.appendChild(newNameBox);

    // clear the name input box
    nameBox.textContent = '';
});

// add event listener to clear button
clearBtn.addEventListener('click', () => {
    // remove all name boxes
    while (nameList.firstChild) {
        nameList.removeChild(nameList.firstChild);
    }
});