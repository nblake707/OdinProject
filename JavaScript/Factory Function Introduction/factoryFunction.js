/* This is the factory function pattern. This is similar to using constructors, but 
    instead of using new to create an object, factory functions set up and return the
    new object when you call the function. 
*/
const personFactory = (name,age) => {
    const sayHello = () => console.log('hello');

/* The line below is a shorthand for creating objects. without the shorthand the following line would read:
            return {name: name, age: age, sayHello: sayHello}

            - If you are creating an object where you are referring to a variable that has the same name
                as the object property youre creating it can be condensed. 

                Another example of this can be found at the end of this file. 
*/
    return {name, age, sayHello };
};

const jeff = personFactory('jamall',27);

// console.log(jeff.name);

// jeff.sayHello();

// Here is the smae thing creaed using the constructor pattern:

// const Person = function(name, age) {
//     this.sayHello = () => console.log('hello!');
//     this.name = name;
//     this.age = age;
// };

// const jeff = new Person('jeff',27);



// ES5 Shorthand Practice

const name = 'Nateyana'
const color = 'Orange'
const number = 34;
const food = 'Curry Goat'

// We may want to log all of these variables - but this can be somewhat confusing

console.log(name, color, number, food) // each value is printed without and indentifier (ex: we are printing the word orange with no hint about what it is referring to)

// If we turn them into an object with brackets the output is much easier to decipher

console.log({name,color,number, food});
