const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "Your notes...";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  //notes is an array containing objects

  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });
  // === is a strict comparison operator in JS which returns true and false

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    console.log(chalk.green.inverse("Note added"));
  } else {
    console.log(chalk.red.inverse("Note title already taken !"));
  }

  console.log(notes);
  saveNotes(notes);
};

const removeNote = function (title) {
  const notes = loadNotes(); //array

  const noteToDelete = notes.filter(function (note) {
    note.title === title;
  });

  const filteredNotes = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > filteredNotes.length) {
    console.log(chalk.green.inverse("Note removed"));
    saveNotes(filteredNotes);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON); //return the objects
  } catch (e) {
    return []; //when there is no notes file
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
}; //to export more than one function
