// So, to not be wasteful and have the same functionality defined again and again, we first create an object
// which will contain the functionality that is common to each of the users
// Let us call that object as User
const User = {
    incrementAge: function() {
        this.age++;
    }
}

// Now that we have the interface for the user, all of the users can point to that incrementAge function
// via the prototype chain instead of all of them defining their own incrementAge function

// This is made possible using the Object.create method
// As we already know, Object.create method RETURNS AN EMPTY OBJECT WITH ITS PROTOTYPE BEING THE OBJECT PASSED AS ARGUMENT
function createUser(name, age) {

    const newUser = Object.create(User);

    newUser.name = name;
    newUser.age = age;
    
    return newUser;
}

// Now, we just create the users using the function, but have the common functionality not in the object itself, but
// its PROTOTYPE
const firstUser = createUser('Mukesh', '22');
firstUser.incrementAge();
console.log(firstUser.age);

// Let us create another object
const secondUser = createUser('Second', 20);

// Now, since the function incrementAge is the same for both of them down the prototype chain, its value will be the same
// for either the first or the second user
console.log("Is the function the same? ", firstUser.incrementAge === secondUser.incrementAge);