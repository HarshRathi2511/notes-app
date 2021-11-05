const chalk = require("chalk")
const { demandOption, argv } = require("yargs")
const yargs = require("yargs")
//Yargs gives you:
// commands and (grouped) options (my-program.js serve --port=5000).
// a dynamically generated help menu based on your arguments:
const notesUtil = require("./notes.js") //getting functions of notes.js

//Customize yargs version
yargs.version("1.1.0")

//add,remove,read,list all notes =>COMMANDS

//Create ADD COMMAND
yargs.command({
  //verify by running node app.js --help
  command: 'add',
  describe: 'Add a new note',
  builder:{ //object declaring the options the command accepts

   title:{ //one of the option
       describe:'Note title',
       demandOption: true,  //compulsory to provide the title as an arg
       type: 'string'
   },

   body:{ //second option 
       describe: 'Body for the note',
       demandOption:true,
       type:'string'
   }
  },
  handler (argv) {  //when command executed
    notesUtil.addNote(argv.title,argv.body)
  }, //a function which will be passed the parsed argv.
})

//Create REMOVE COMMAND 
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder : {
        title :{
            describe:'Remove a note',
            demandOption :true,
            type: 'string'
        }
    },
    handler (argv) {
        notesUtil.removeNote(argv.title)
    }
})

//Create LIST COMMAND 
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler() {
        console.log('List all the notes !')
    }
})

//Create READ COMMAND 
yargs.command({
    command: 'read',
    describe: 'Read all the notes',
    handler() {
        console.log('Read all the notes !')
    }
})

yargs.parse() //now the cmd line knows to register all the commands
// console.log(yargs.argv) //without this the app doesn't run
