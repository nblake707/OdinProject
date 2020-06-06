// const Factoryfunction = string => {
//     const capitalizeString = () => string.toUpperCase();
//     const printString = () => console.log(`${capitalizeString()}`);
//     return {printString};
// };

// const taco = Factoryfunction('taco');

// // printString(); // This is private and can only be accessed through the above object
// // capitalizeString(); // This is private and can only be accessed through the above object
// // taco.capitalizeString(); // Also, private
// taco.printString(); // above functions returns this method

const counterCreator = () => {
    let count = 0;
    return () => {
        console.log(count);
        count++;
    };
};

const counter = counterCreator();

counter();
counter();
counter();
counter();
counter();

