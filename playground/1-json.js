const fs = require('fs')

// const book = {
//     title :'Ego',
//     author:'Halliday'
// }

//stringify returns the json data from the object 
// const bookJSON = JSON.stringify(book)   

// fs.writeFileSync('1-json.json',bookJSON)

//to get the data from the json file 
// const dataBuffer = fs.readFileSync('1-json.json') //binary data 
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataJSON = fs.readFileSync('1-json.json').toString()
const data = JSON.parse(dataJSON)
console.log(data.name)

data.name = 'Harsh'


fs.writeFileSync('1-json.json',JSON.stringify(data))