let myLibrary = [];

// book constructor 
function book(title,author){
this.title = title;
this.author = author;
}

function render(){

    // Must delete all previous dom paragraphs created 
    var displayDiv = document.getElementById("display-books");
    displayDiv.removeChild(displayDiv)

    myLibrary.map(book => {

        var bookTitle = book.title;
        var authorTitle = book.author;
    
        var para = document.createElement("P");
        para.innerHTML = `${bookTitle} <br/> ${authorTitle}`;
        document.getElementById("display-books").appendChild(para);
    })
}
 

function addBookToLibrary() {

    // must grab user input from form
    var title = document.getElementById("title").value;

    var author = document.getElementById("author").value;

    // must take user's input to create book object 
    var book1 = new book(title,author);

    // add object to array 
    myLibrary.push(book1);
};





















