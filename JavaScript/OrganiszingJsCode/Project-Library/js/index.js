let myLibrary = [];

// book constructor 
function book(title,author){
this.title = title;
this.author = author;
}

function render(){

// call helper method to clear display div
clearAllChildren();

    myLibrary.map(book => {

        var bookTitle = book.title;
        var authorTitle = book.author;
    
        var para = document.createElement("P");
        para.innerHTML = `${bookTitle} <br/> ${authorTitle}`;
        document.getElementById("display-books").appendChild(para);
    })
}

// helper method - clears all div child elements

function clearAllChildren() {

     // Must delete all previous dom paragraphs created 
     var displayDiv = document.getElementById("display-books");
     // var childNode = displayDiv.childNodes[0];
     // displayDiv.removeChild();
     var child = displayDiv.lastElementChild;
     while(child) {
         displayDiv.removeChild(child);
         child = displayDiv.lastElementChild;
     }

     // https://www.geeksforgeeks.org/remove-all-the-child-elements-of-a-dom-node-in-javascript/#:~:text=Remove%20all%20the%20child%20elements%20of%20a%20DOM%20node%20in,which%20produces%20the%20same%20output.
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





















