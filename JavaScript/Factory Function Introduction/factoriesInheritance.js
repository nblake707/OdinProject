const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`)
    return {sayName}
}

const Nerd = (name) => {
    // create a person and pull out the sayName function
    const {sayName} = Person(name)
    const doSomethingNerdy = () => console.log('nerd stuff')
    return {sayName, doSomethingNerdy}
}

// This is how we include all of another object in our factory

const Nerd = (name) => {
    const prototype = Person(name)
    const doSomethingNerdy = () => {
        console.log('nerd stuff')   
    }
    return Object.assign()
}

const jeff = Nerd('jeff') // my name is jeff
jeff.doSomethingNerdy() // nerd stuff
