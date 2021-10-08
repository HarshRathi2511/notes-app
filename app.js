// const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes.js')

const message=  getNotes()

console.log(message)

// console.log(validator.isURL('https://google.com')) //=>true

//npm install chalk@2.4.1

console.log(chalk.green.bold.inverse("Success!"))
console.log('hah')

//nodemon ->to get hot reload functionality for node js => ctrl c to exit 