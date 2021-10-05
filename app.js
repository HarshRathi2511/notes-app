const fs = require('fs') //to import the fs module  
//fs variable contains the stuff returned by 'fs' 

fs.writeFileSync('notes.txt','My name is Harsh!') //a notes.txt file is created after this 

//To append a message to notes.txt
fs.appendFileSync('notes.txt',' I\'m a pro node js developer')