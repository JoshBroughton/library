let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + ", " + this.read
    }
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

let theHobbit = new Book("The Hobbit", "JRR Tolkien", "295", false)
let endersGame = new Book("Ender's Game", "Orson Scott Card", "324", true)
let bloodMeridian = new Book("Blood Meridian", "Cormac McCarthy", "337", false)

addBookToLibrary(theHobbit)
addBookToLibrary(endersGame)
addBookToLibrary(bloodMeridian)

//function to create html table of book library. iterates
//over library and inserts rows and cells with the info
function tableMaker() {
    for (let i=0;i<myLibrary.length;i++) {
        let table = document.getElementById("bookTable");
        let row = table.insertRow();
        row.setAttribute("ind", i);
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        let cell4 = row.insertCell();
        let btn = document.createElement("BUTTON");
        btn.setAttribute("index", i);
        btn.innerText = "Remove Book";
        btn.onclick = function() {removeBook(btn, i)};
        let thisBook = myLibrary[i];
        cell1.innerText = thisBook.title;
        cell2.innerText = thisBook.author;
        cell3.innerText = thisBook.pages;
        if (thisBook.read === true) {
            cell4.innerText = "Read";
        } else {
            cell4.innerText = "Not Read";
        }
        
        row.appendChild(btn);
    }    
}
tableMaker()
//appends a new book object to the previously created table
function appendBookToTable(aNewBook) {
    let table = document.getElementById("bookTable");
    let row = table.insertRow();
    let rowCount = table.tBodies[0].rows.length;
    row.setAttribute("ind", rowCount);
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell();
    let btn = document.createElement("BUTTON");
    btn.onclick = function() {removeBook(btn, rowCount)};
    btn.innerText = "Remove Book"
    cell1.innerText = aNewBook.title;
    cell2.innerText = aNewBook.author;
    cell3.innerText = aNewBook.pages;
    if (aNewBook.read === true) {
        cell4.innerText = "Read";
    } else {
         cell4.innerText = "Not Read";
    }
    row.appendChild(btn)
}
//defines the DOM method executed for the add book button. Would like this
//to pull up a form that restricts user input appropriately
function openForm() {
    document.getElementById("newBookForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("newBookForm").style.display = "none";
    document.getElementById("bookForm").reset();
}



function addBookButton() {
    let button = document.getElementById("newBook");
    button.onclick = function() {
        openForm()
    }
}
addBookButton()
function formSubmit() {
    let book = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    if (document.getElementById("read").value = "Read") {
        readStatus = true;
    } else {
        readStatus = false;
    }
    let aNewBook = new Book(book, author, pages, readStatus);
    addBookToLibrary(aNewBook);
    appendBookToTable(aNewBook);
    closeForm();
}

let submitButton = document.getElementById("submitButton");
submitButton.onclick = formSubmit;

function removeBook(btn, i) {
    let index = parseInt(btn.getAttribute('index'));
    myLibrary.splice(index, 1);
    let delRow = document.querySelector(`[ind='${i}']`);
    delRow.remove();
}
