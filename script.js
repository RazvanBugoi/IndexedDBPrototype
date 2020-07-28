let notes = document.getElementById('insert');
let add = document.getElementById('add');

let prototype = [];

add.onclick = insertNote 

function insertNote(item) {
    if(item.value == '') alert('Input field should not be empty.');
    let notes = document.createElement('li');
    notes.innerHTML = `${item.value}`;
    list.appendChild(notes);
}