let rootNode = document.getElementById('root');
let itemNumber = 1,
    maxItems = 10;

// Your code goes here

// DIV WITH INPUT HEADER
let inputDivEl = document.createElement('div'),
    inputEl = document.createElement('input');


inputDivEl.appendChild(inputEl);
inputDivEl.setAttribute('class', 'header-input');
inputEl.setAttribute('placeholder', 'Add New Action');
inputEl.setAttribute('type', 'text');

let addButtonEl = document.createElement('i');

addButtonEl.setAttribute('class', 'material-icons addbutton');
addButtonEl.innerHTML = 'add_box';
inputDivEl.appendChild(addButtonEl);
rootNode.appendChild(inputDivEl);

// hr
let hrEl = document.createElement('hr');
rootNode.appendChild(hrEl);

// add div action under the hr
let divActionEl = document.createElement('div');

divActionEl.setAttribute('class', 'list-action');
rootNode.appendChild(divActionEl);
//div element for img
let divImgEl = document.createElement('div'),
    imgEl = document.createElement('img');

divImgEl.setAttribute('class', 'container-img');
divImgEl.appendChild(imgEl);
imgEl.setAttribute('src', '../homework/assets/img/cat.png');
rootNode.appendChild(divImgEl);

let warningMessageEl = document.createElement('h4');
warningMessageEl.setAttribute('class', 'warning-message');
warningMessageEl.innerHtml = 'Maximum item per list are created';

addButtonEl.addEventListener('click', emptyNewAction);

function emptyNewAction() {
    let text = inputEl.value;
    if (text === '') {
        return;
    }
    inputEl.value = '';
    let containerForActionEl = document.createElement('div');
    containerForActionEl.setAttribute('class', 'container-action');
    containerForActionEl.setAttribute('draggable', 'true');

    let checkboxEl = document.createElement('input'),
        labelEl = document.createElement('label');

    checkboxEl.setAttribute('type', 'checkbox');
    checkboxEl.setAttribute('id', 'subscribeNews');

    labelEl.setAttribute('for', 'subscribeNews');

    containerForActionEl.appendChild(checkboxEl);
    containerForActionEl.appendChild(labelEl);

    let EnterText = document.createElement('span');
    EnterText.innerHtml = text;

    containerForActionEl.appendChild(EnterText);

    let deleteButton = document.createElement('i'),
        markButton = document.createElement('i');

    deleteButton.setAttribute('class', 'material-icons delete');
    deleteButton.innerHTML = 'delete';

    markButton.setAttribute('class', 'material-icons mark-text');
    markButton.innerHTML = 'check_box_outline_blank';

    labelEl.appendChild(markButton);
    labelEl.appendChild(deleteButton);

    divActionEl.appendChild(containerForActionEl);

    if (divActionEl.childNodes.length === maxItems) {
        rootNode.insertBefore(warningMessageEl, inputDivEl);
        inputEl.setAttribute('disabled', 'true');
        return;
    } else {
        inputEl.focus();
    }

}
divActionEl.addEventListener('click', function(event) {
    if (event.target.classList.contains('mark')) {
        event.target.innerHTML = 'check-box';
    }
}, false);
divActionEl.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        event.target.parentNode.remove();
        if (warningMessageEl.style.display === 'block') {
            warningMessageEl.style.display = 'none';
            inputEl.removeAttribute('disabled');
        }
    }
}, false);