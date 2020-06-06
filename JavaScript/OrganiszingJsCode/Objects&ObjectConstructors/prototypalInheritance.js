// Example 1 - When using constructors to make objects it is best to define functions on the prototype of that object.


// function Student(name, grade) {
//     this.name = name
//     this.grade = grade
// }

// Student.prototype.sayName = function () {
//     console.log(this.name)
// }

// Student.prototype.gotToProm = function () {
//     console.log("Lets go to prom!")
// }

// var student = new Student("Kelly", "Senior")

// console.log(student.gotToProm());


// Example 2 - Using Object.create is the reccomended method of setting the prototype of an object

// function Student() {

// }

// Student.prototype.sayName = function() {
//     console.log(this.name)
// }

// function EighthGrader(name) {
//     this.name = name
//     this.grade = 8
// }

// EighthGrader.prototype = Object.create(Student.prototype)

// const carl = new EighthGrader("carl")
// carl.sayName()
// console.log(carl.grade)


/* 

This will not work

EighthGrader.prototype = Student.prototype

Literally sets the EighthGrader's prototype to Student.prototype (instead of a copy) -> This will cause problems if we want to edit something in the future

*/


function Student (){

}

Student.prototype.sayName = function() {
    console.log(this.name)
}

function EighthGrader(name) {
    this.name = name
    this.grade = 8
}

// don't do this!! -> instead use object.create 
EighthGrader.prototype = Student.prototype

function NinthGrader(name){
    this.name = name
    this.grade = 9
}

// unadvised - This will actually edit the Student.prototype whenever we want to make changes to NinthGrader.prototype
// NinthGrader.prototype = Student.prototype

NinthGrader.prototype = Object.create(Student.prototype) // This is the reccomened way. The above 

NinthGrader.prototype.sayName = function() {console.log("Sally")}

const carl = new EighthGrader("carl")
console.log(carl.sayName()) // This will log Sally bc we edited the sayName function


