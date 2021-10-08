// const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')

// const message=  getNotes()
const command = process.argv[2]

if(command=='add') {
    console.log('Adding note')
} else {
    console.log('Note removed')
}

// console.log(message)

// console.log(chalk.green.bold.inverse("Success!"))

console.log(process.argv)   //array that contains all the arguments(exec file,file that is running,Arg passed via command line) provided by the command line 
console.log(process.argv[2])
