//If the function is a method then we use ES6 method definition syntax 
//Otherwise use arrow 

const square = function (x) {
  return x * x;
};

const square = (x) => {
  return x * x;
};

const square = (x) => x * x;

console.log(square(3));

const event = {
  name: "party",
  printList: function () {
    console.log(this.name);
  },
};

const event = {
    name: "party",
    printList:  () => {
      console.log(this.name);  //we cant access the name using 'this'
    },
  };

const event = {
  name: "party",
  guestList : ['Harsh','Lavanya','Kinjal'],
  printList() {
    console.log(this.name); //alternative syntax to set up methods to objects 
    this.guestList.forEach((guest ) =>console.log(guest + ' is attending ' + this.name))
  },
};
//function keyword has its 'this' method 

event.printList()
