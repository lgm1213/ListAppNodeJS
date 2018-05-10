// // var obj = {
// // 	name: 'luis'
// // };

// // var stringObj = JSON.stringify(obj);
// // console.log(typeof stringObj);
// // console.log(stringObj);

// var personString = '{"name": "luis","age":34}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);
const fs = require('fs');

let originalNote = {
	title: 'Some Title String',
	body: 'Some Body Text'
};

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);