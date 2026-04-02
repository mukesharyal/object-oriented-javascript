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