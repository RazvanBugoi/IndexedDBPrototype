let notes = document.getElementById('insert');
let add = document.getElementById('add');
let list = document.getElementById('list');

let prototype = [];

add.onclick = insertNote 

function insertNote() {
    if(notes.value == '') alert('Input field should not be empty.');
    let info = document.createElement('li');
    info.innerHTML = `Test`;
    console.log(info);
    list.appendChild(info);
}