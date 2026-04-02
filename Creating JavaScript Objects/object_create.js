// There is a third way to create an object using the Object.create function
// Object.create also returns an empty object which we can populate ourselves

// So actually, Object.create creates an empty object WITH THE PROTOTYPE FOR THE NEW OBJECT CREATED
// TO BE THE OBJECT WE PROVIDE IN THE ARGUMENT

// Let us define an object which will act sort of like an interface for various objects inheriting it
// So, let us call this object Animal because we will create various different animals which inherit it
const Animal = {
    numOfLegs: 2,
    makeSound: function() {
        console.log(this.sound);
    }
}

// Now, we may want to have many different animals with their own sound properties but the same makeSound method

// Note that the methods we used earlier to create the objects had their own SEPARATE METHODS EVEN WHEN ALL OF THEM
// DID THE SAME THING, which was wasteful and less efficient

// But now, as we are "inheriting" all the objects that share the same method, we only have a single function
// that only changes its functionality according to the object from where it was called

// Let's define our first object Cat
const Cat = Object.create(Animal);

// As we have provided the Animal object as the argument to the Object.create method, the Animal object will be
// the [[Prototype]] for the Cat object
// That means, it will already have the numOfLegs and makeSound attributes
// Let us verify that by console loggint the numberOfLegs property
console.log(`The Cat has ${Cat.numOfLegs} legs.`);

// So now, we just add the sound property to our Cat ourselves (as each animal will have its own sound)
Cat.sound = 'Meow Meow!';

// So, when we now call makeSound(), then the Cat will make the sound Meow Meow!
Cat.makeSound();