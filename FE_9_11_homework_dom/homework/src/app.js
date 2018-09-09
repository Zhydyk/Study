let rootNode = document.getElementById('root');
let itemCounter = 0,
    maxItems = 10;

// h1 Element
let h1El = document.createElement('h1');
h1El.innerHTML = 'TODO Cat List';
rootNode.appendChild(h1El);

let mainHeaderEl = document.createElement('div');
mainHeaderEl.setAttribute('class', 'header-input');

rootNode.appendChild(mainHeaderEl);
// inputElement
let inputEl = document.createElement('input');
inputEl.setAttribute('id', 'input');
inputEl.setAttribute('type', 'text');
inputEl.setAttribute('oninput', 'handleChange(event)')
inputEl.setAttribute('placeholder', 'Add New Action');

//button add and Icon add
let addButtonEl = document.createElement('button'),
    addIconEl = document.createElement('i');

addButtonEl.setAttribute('type', 'button');
addButtonEl.setAttribute('id', 'add');
addIconEl.setAttribute('onclick', 'addItem()');
addButtonEl.setAttribute('disabled', 'true');

addIconEl.setAttribute('class', 'material-icons addbutton');
addIconEl.setAttribute('id', 'add');
addIconEl.innerHTML = 'add_box';

addButtonEl.appendChild(addIconEl);

mainHeaderEl.appendChild(inputEl);
mainHeaderEl.appendChild(addButtonEl);

// hr
let hrEl = document.createElement('hr');
rootNode.appendChild(hrEl);
let divListEl = document.createElement('div');
divListEl.setAttribute('class', 'list');
rootNode.appendChild(divListEl);

// ulElement
let ulEl = document.createElement('ul');
ulEl.setAttribute('id', 'list');

divListEl.appendChild(ulEl);

function handleChange(event) {
    addButtonEl = document.getElementById('add');
    addButtonEl.disabled = !event.target.value;
}

function addItem() {
    let inputValue = document.getElementById('input').value;
    if (itemCounter < maxItems && inputValue !== '') {
        let liEl = document.createElement('li');
        liEl.setAttribute('class', 'item-style');
        liEl.setAttribute('draggable', 'true');
        ulEl.appendChild(liEl);

        let checkboxIcon = document.createElement('i');
        checkboxIcon.setAttribute('class', 'material-icons mark');
        checkboxIcon.appendChild(document.createTextNode('check_box_outline_blank'));
        liEl.appendChild(checkboxIcon);
        let spanEl = document.createElement('span');

        spanEl.appendChild(document.createTextNode(' ' + inputValue));
        liEl.appendChild(spanEl);

        let iconDeleteEl = document.createElement('i');
        iconDeleteEl.setAttribute('class', 'material-icons delete');
        iconDeleteEl.appendChild(document.createTextNode('delete'));

        liEl.appendChild(iconDeleteEl);
        itemCounter++;
        document.getElementById('input').value = '';
        addButtonEl.disabled = 'false';



        liEl.ondragstart = (e) => {
            let elem = e.dataTransfer.setData('li', e.target.className);
            console.log(e);
        }


        checkboxIcon.onclick = function() {
            checkboxIcon.innerText = 'check_box';
        }
        iconDeleteEl.onclick = function() {
            itemCounter--;
            liEl.remove();
            document.getElementById('warning-message').display = 'none';

        }

    } else if (inputValue === '') {
        addButtonEl.disabled = 'false';
    } else {
        document.getElementById('warning-message').style.display = 'block';
        inputEl.disabled = 'false';
    }

}

//div element for img
let divImgEl = document.createElement('div'),
    imgEl = document.createElement('img');

divImgEl.setAttribute('class', 'container-img');
divImgEl.appendChild(imgEl);
imgEl.setAttribute('src', '../homework/assets/img/cat.png');
rootNode.appendChild(divImgEl);

//draggable