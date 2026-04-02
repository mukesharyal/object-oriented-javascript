// In the dot notation method to create an object, we first initialise the object as an empty object
// Then, we meticulously add every single property on the object using the dot notation
let myObject = {};

// Now, we add the various properties we want to add using the dot syntax
myObject.name = 'Mukesh';
myObject.age = 22;

myObject.introduceYourself = function() {
    console.log(`Hello! I am ${this.name}. I am ${this.age} years old.`);
};

myObject.happyBirthday = function() {
    console.log(`Happy birthday, ${this.name}!`);
    this.age++;
};



// Now, we call the functions
myObject.happyBirthday();

myObject.introduceYourself();