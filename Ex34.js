const list = document.querySelector('#list')

function addItem () {

const NewItem = document.createElement('li');

NewItem.textContent = 'new item'

list.appendChild(NewItem);

}

function removeItem () {
    if ( list.lastChild) {
        list.removeChild(list.lastChild)
    } else {
        alert ("waxba majiro saaxiib")
    }
}