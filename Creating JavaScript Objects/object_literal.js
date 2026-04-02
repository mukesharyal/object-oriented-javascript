// The first way to create an object is using the Object Literal Method
// In this method, we just define the object literally using the curly brackets
// let myObject = {
//     name: 'Mukesh',
//     age: '22',
//     introduceYourself: () => {
//         console.log(`Hello! I am ${this.name}. I am ${this.age} years old.`);
//     },
//     happyBirthday: () => {
//         console.log(`Happy birthday, ${this.name}!`);
//         this.age++;
//     }
// }

// Now that we have created our object, we can call the happyBirthday function on it
// myObject.happyBirthday();

// Now, when we call the introduceYourself function on the object, the age will have increased by one
// myObject.introduceYourself();

// So, apparently, the this keyword is not defined inside the object, I don't know why
// Let's to the similar thing again by using the variable names themselves, and that is bound to work
// let anotherObject = {
//     myName: 'Mukesh2',
//     age: '22',
//     introduceYourself: () => {
//         console.log(`Hello! I am ${myName}. I am ${age} years old.`);
//     },
//     happyBirthday: () => {
//         console.log(`Happy birthday, ${myName}!`);
//         age++;
//     }
// }

// anotherObject.happyBirthday();

// anotherObject.introduceYourself();

// Well, that doesn't work either, and is actually an even worse way to have the functionality
// That is because myName and age are not defined when the function looks at them
// So, the actual way to go about this is to use the object name itself so that it will be defined in the function
let finalObject = {
    name: 'MukeshFinal',
    age: '22',
    introduceYourself: () => {
        console.log(`Hello! I am ${finalObject.name}. I am ${finalObject.age} years old.`);
    },
    happyBirthday: () => {
        console.log(`Happy birthday, ${finalObject.name}!`);
        finalObject.age++;
    }
}

finalObject.happyBirthday();
finalObject.introduceYourself();

// I think I just realised something which was the reason why the first method was not working, because I was really hoping
// that it should have worked, and was really surprised when it didn't
// But now, I think I know the answer

// The this object was undefined because we were calling it from AN ARROW FUNCTION WHERE THE THIS OBJECT IS NOT DEFINED
// If we had called it from a function using the function keyword, then the this object would have been defined
// Also, the reason why the this object is not defined in the arrow function comes down to the purpose of the arrow function
// We call the arrow function as an anonymous function because it should stay that way
// Having the reference to the object from which it was called (or the context from which it was called) should not be 
// possible from an anonymous function because then it would not be anonymous at all

// Actually, that reason is not true either
// The this keyword is defined according to the lexical scope in the case of arrow functions
// So, this is actually DEFINED and points to the window object in the browser, or the global object in Node
// So, this.name doesn't exist because we have no such variable

// Object literals do not create lexical scope for this
// So, to make it work, we have to use the function keyword in either the traditional way, or the modern way
// This is the TRADITIONAL WAY
let traditionalObject = {
    name: 'Mukesh',
    age: '22',
    introduceYourself: function() {
        console.log(`Hello! I am ${this.name}. I am ${this.age} years old.`);
    },
    happyBirthday: function() {
        console.log(`Happy birthday, ${this.name}!`);
        this.age++;
    }
}

// Let's test this 
traditionalObject.happyBirthday();
traditionalObject.introduceYourself();

// Let's also look at the MODERN WAY for doing the same thing
let modernObject = {
    name: 'Mukesh',
    age: '22',
    introduceYourself() {
        console.log(`Hello! I am ${this.name}. I am ${this.age} years old.`);
    },
    happyBirthday() {
        console.log(`Happy birthday, ${this.name}!`);
        this.age++;
    }
}

// Let's test this 
modernObject.happyBirthday();
modernObject.introduceYourself();

// And sometimes, using the ARROW FUNCTION will make things better for us
// Because instead of the function() style, which looks for the object that called the function, and will set it to
// global if it doesn't find an object, the arrow function will work in a lexical way, therefore, it will go up looking
// for the this value

// So, in some way, using the arrow function is the correct way and the modern way to do JavaScript that prevents us
// from doing the whole this and that hacking to make things work

// So, the general rule is:
// For the function() --> First look at which object called it, if it doesn't exist, just point to global
// For the () => {} ---> Go looking in the lexical way for looking at this, and you will find it one way or the other

// So here is the whole picture that I was just a little aware of. Therefore, little knowledge is dangerous.
// So, arrow functions DO NOT HAVE THE THIS VARIABLE, SO when we use this inside of them, the JavaScript interpreter
// has no other option but to check the execution contexts out of it one at a time, which will just have the lexical
// behavior due to a side effect.

// But with other function()s, even the anonymous ones, without a name, they work the same way. If an object called it, set it
// to the object, otherwise it will point to the global object

// So, the only couple of things to know are these:
// 1. Arrow functions do not have their own this variable
// 2. For functions declared with the function keyword (either anonymous or named), the this points to the object from
// which it was called. If it was called from no object, it is set to global