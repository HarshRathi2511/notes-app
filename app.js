// const fs = require('fs') //to import the fs module  
//fs variable contains the stuff returned by 'fs' 

// fs.writeFileSync('notes.txt','My name is Harsh!') //a notes.txt file is created after this 

//To append a message to notes.txt
// fs.appendFileSync('notes.txt',' I\'m a pro node js developer


// const firstName = require('./utils.js')  //this file gets executed first 

// const name = 'Harsh'
// console.log(firstName)

// const addNumbers = require('./utils.js')

// const sum = addNumbers(4,5)

// console.log(sum)

const getNotes = require('./notes.js')

const message=  getNotes()

console.log(message)