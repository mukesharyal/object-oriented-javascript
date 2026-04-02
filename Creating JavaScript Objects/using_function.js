// Now, instead of doing the manual work (for either of the 3 approaches), we will have a function that does the work for us
// So, we are not doing the same thing again and again and again
function createUser(name, age) {
    const newUser = {}

    newUser.name = name;
    newUser.age = age;

    newUser.incrementAge = function() {
        this.age++;
    }
}

// The problem with this is that for each of the users we create using the createUser function, we have a separate
// incrementAge function which does the very same thing, and thus we are being wasteful