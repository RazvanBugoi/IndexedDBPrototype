let notes = document.getElementById('insert');
let add = document.getElementById('add');
let list = document.getElementById('list');

let notesCollection = []; 
let database;
const request = indexedDB.open('Database', 1);

request.onupgradeneeded = function(e) {
    database = e.target.result;
    const personalNotes = database.createObjectStore('personal_notes', {keyPath: 'title'});
}

request.onsuccess = function(e) {
    database = e.target.result;
    parseNotes(database);
}

request.onerror = function(error) {
    alert('error');
}

function parseNotes(database) {
    let tx = database.transaction('personal_notes', 'readonly'); 
    let myNote = tx.objectStore('personal_notes');
    let request = myNote.openCursor()

    request.onsuccess = (e) => {
        let cursor = e.target.result;
        if (cursor) {
            notesCollection.push(cursor.value);
            cursor.continue();
        } else {
            // insertNote(notesCollection);
        }
    }
}


add.onclick = test; 

function insertNote(notesCollection) {
    for (let i=0; i<notesCollection.length; i++){
        let displayItem = document.createElement('li');
        displayItem.innerHTML = notesCollection[i].title;
        list.appendChild(displayItem);
    }
}

function test() {
    if(notes.value == '') alert('Input field should not be empty.');
    obj = {
        title: 'exemplul 1',
        date: new Date().getDate(),
        time: new Date().getTime()
    };
    let tx = database.transaction('personal_notes', 'readwrite');
    let myPost = tx.objectStore('personal_notes');
    myPost.add(obj);
}