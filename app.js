const chalk = require("chalk")
const yargs = require("yargs")
//Yargs gives you:
// commands and (grouped) options (my-program.js serve --port=5000).
// a dynamically generated help menu based on your arguments:
const getNotes = require("./notes.js")

//Customize yargs version
yargs.version("1.1.0")



//add,remove,read,list all notes =>COMMANDS

//Create ADD COMMAND
yargs.command({
  //verify by running node app.js --help
  command: 'add',
  describe: 'Add a new note',
  handler: function () {  //when command executed
    console.log("Adding a new note!");
  }, //a function which will be passed the parsed argv.
})

//Create REMOVE COMMAND 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler:function() {
        console.log('Removing a note !')
    }
})

//Create LIST COMMAND 
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler:function() {
        console.log('List all the notes !')
    }
})

//Create READ COMMAND 
yargs.command({
    command: 'read',
    describe: 'Read all the notes',
    handler:function() {
        console.log('Read all the notes !')
    }
})

console.log(yargs.argv)
