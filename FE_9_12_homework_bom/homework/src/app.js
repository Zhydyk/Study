const rootNode = document.getElementById('root');

const todoItems = [
    { isDone: false, id: 12345, description: 'Todo 1' }
];
let itemCounter = 0,
    maxItems = 10;

// Your code goes here
// function addItemsTodo(mainEl) {
//     let h1El = document.createElement('h1');
//     h1El.innerHTML = 'Simple TODO Aplication';

//     let buttonEl = document.createElement('button');
//     buttonEl.innerHTML = 'Add new task';
//     buttonEl.setAttribute('id', 'add');

//     mainEl.appendChild(h1El);
//     mainEl.appendChild(buttonEl);


// }
let addItems = document.getElementById('add');
if (addItems) {
    addItems.addEventListener('click', function() {
        let mainEl = document.getElementById('main');
        clearDivEl(mainEl);
        addElements(mainEl);

        //         let btnSave = document.getElementById('addEl');
        //         if (btnSave) {
        //             btnSave.addEventListener('click', function() {
        //                 let mainEl = document.getElementById('main');
        //                 clearDivEl(mainEl);
        //                 // addItemsTodo(mainEl);
        //     })
        // }
    })
}

function addElements(mainEl) {
    let h1El = document.createElement('h1');
    h1El.innerHTML = 'Add task';

    let inputEl = document.createElement('input');
    inputEl.setAttribute('id', 'input');
    inputEl.setAttribute('type', 'text');
    inputEl.setAttribute('oninput', 'handleChange(event)');

    //button add and cancel 
    let containButtonsDivEl = document.createElement('div');
    containButtonsDivEl.setAttribute('class', 'buttonsDiv');

    let addButtonEl = document.createElement('button');
    addButtonEl.setAttribute('id', 'add');
    addButtonEl.setAttribute('onclick', 'addItem()');
    addButtonEl.setAttribute('disabled', 'true');
    addButtonEl.innerHTML = 'Save changes';

    let btnCancelEl = document.createElement('button');

    btnCancelEl.setAttribute('id', 'cancel');
    btnCancelEl.setAttribute('onclick', 'cancelAction()');
    btnCancelEl.innerHTML = 'Cancel';





    let divListEl = document.createElement('div');
    divListEl.setAttribute('class', 'list');


    // ulElement
    let ulEl = document.createElement('ul');
    ulEl.setAttribute('id', 'list');



    mainEl.appendChild(h1El);
    mainEl.appendChild(inputEl);
    mainEl.appendChild(containButtonsDivEl);
    containButtonsDivEl.appendChild(btnCancelEl);
    containButtonsDivEl.appendChild(addButtonEl);
    mainEl.appendChild(divListEl);
    divListEl.appendChild(ulEl);


    inputEl.oninput = function handleChange(event) {
        addButtonEl = document.getElementById('add');
        addButtonEl.disabled = !event.target.value;
    }
    btnCancelEl.onclick = function cancelAction() {
        window.location.assign('index.html');
    }

    addButtonEl.onclick = function addItem() {
        let inputValue = document.getElementById('input').value;
        if (inputValue !== '') {
            let liEl = document.createElement('li');
            liEl.setAttribute('class', 'item-style');
            liEl.setAttribute('draggable', 'true');

            let checkboxIcon = document.createElement('img');
            checkboxIcon.setAttribute('src', './assets/img/todo-s.png');

            let spanEl = document.createElement('span');

            let iconDeleteEl = document.createElement('img');
            iconDeleteEl.setAttribute('src', './assets/img/remove-s.jpg');

            // window.location.assign('index.html');

            document.getElementById('input').value = '';
            addButtonEl.disabled = 'false';

            ulEl.appendChild(liEl);
            liEl.appendChild(checkboxIcon);
            liEl.appendChild(spanEl);
            spanEl.appendChild(document.createTextNode(' ' + inputValue));
            liEl.appendChild(iconDeleteEl);

            checkboxIcon.onclick = function() {
                checkboxIcon.src = './assets/img/done-s.png';
                liEl.style.setProperty('background-color', '#999999');
                insertBottom(liEl, ulEl);
            }
            iconDeleteEl.onclick = function() {
                liEl.remove();
            }

        } else if (inputValue === '') {
            addButtonEl.disabled = 'false';
        } else {
            // document.getElementById('warning-message').style.display = 'block';
            inputEl.disabled = 'false';
        }
        let insertBottom = (item, list) => {
            item.remove();
            list.appendChild(item);
        }

    }

}

function clearDivEl(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}