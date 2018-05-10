const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of Note',
  demand: true,
  alias: 't'
  };

const bodyOptions = {
	describe: 'Body text of Note',
	demand: true,
	alias: 'b'
};

const argv = yargs
  .command('add','Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List All Notes')
  .command('read', 'Read A Note', {
  	title: titleOptions
  })
  .command('remove', 'Remove a Note', {
  	title: titleOptions
  })
  .help()
  .argv;


let command = process.argv[2];
// console.log("Command:", command);
// console.log("Process:", process.argv);
// console.log("Yargs", argv);

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note Created :)');
    notes.logNotes(note);
	} else {
		console.log('Note Title Taken');
	}
} else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s)`);
	allNotes.forEach((note) => notes.logNotes(note));
} else if (command === 'read') {
	var note = notes.getNote(argv.title);
	if (note){
    console.log('Note Found');
    notes.logNotes(note);
	} else {
		console.log('Note not Found');
	}
} else if (command === 'remove') {
	var notesRemoved = notes.removeNote(argv.title);
	var message = notesRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);
} else {
  console.log('Command Not Recognized >:(');
}