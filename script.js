let notes = document.getElementById('insert');
let add = document.getElementById('add');
let list = document.getElementById('list');

let prototype = []; 

const request = indexedDB.open('Database', 1);

request.onupgradeneeded = function(e) {
    database = e.target.result;
    const personalNotes = database.createObjectStore('personal_notes', {keyPath: 'title'});
}

request.onsuccess = function(e) {
    database = e.target.result;
    addNotes();
}

request.onerror = function(error) {
    alert('error');
}

function addNotes() {
    let tx = database.transaction('personal_notes', 'readonly'); 
    let myNote = tx.objectStore('personal_notes');
    let request = myNote.openCursor()
    
    obj = {
        title: null,
        text: 'this is my first note',
        date: new Date().getDate(),
        time: new Date().getTime()
    };

    request.onsuccess = (e) => {
        let cursor = e.target.result;
        if (cursor) {

            cursor.continue();
        } else {
           
        }
    }
}


add.onclick = insertNote 

function insertNote() {
    if(notes.value == '') alert('Input field should not be empty.');
    let info = document.createElement('li');
    info.innerHTML = `${notes.value}`;
    prototype.title = `${notes.value}`;

    let tx = database.transaction('personal_notes', 'readwrite');
    let myPost = tx.objectStore('personal_notes');
    myPost.add(prototype);
    console.log(prototype);
    list.appendChild(info);
}