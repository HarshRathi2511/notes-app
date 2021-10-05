const validator = require('validator')

const getNotes = require('./notes.js')

const message=  getNotes()

console.log(message)

console.log(validator.isURL('https://google.com')) //=>true
