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

let theHobbit = new Book("The Hobbit", "JRR Tolkien", "295", "Read")
let endersGame = new Book("Ender's Game", "Orson Scott Card", "324", "Read")
let bloodMeridian = new Book("Blood Meridian", "Cormac McCarthy", "337", "Not Read")

addBookToLibrary(theHobbit)
addBookToLibrary(endersGame)
addBookToLibrary(bloodMeridian)

//function to create html table of book library. iterates
//over library and inserts rows and cells with the info
function tableMaker() {
    for (let i=0;i<myLibrary.length;i++) {
        let table = document.getElementById("bookTable");
        let row = table.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        let cell4 = row.insertCell();
        //let cell5 = row.insertCell();
        let btn = document.createElement("BUTTON");
        btn.innerText = "Remove Book"
        let thisBook = myLibrary[i];
        cell1.innerText = thisBook.title;
        cell2.innerText = thisBook.author;
        cell3.innerText = thisBook.pages;
        cell4.innerText = thisBook.read;
        row.appendChild(btn);
    }    
}
tableMaker();
//TODO: add onclick function to add new books to library
function buttonClick() {
    let button = document.getElementById("newBook")
    button.onclick = function() {
        let title = prompt("Enter the book title", "");
        let author = prompt("Enter the author's name", "");
        let pages = prompt("Enter the number of pages", "");
        let read = prompt('Enter "Read" if you have read the book, or "Not Read" otherwise', "");
        let aNewBook = new Book(title, author, pages, read);
        addBookToLibrary(aNewBook);
        let table = document.getElementById("bookTable");
        let row = table.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        let cell4 = row.insertCell();
        cell1.innerText = aNewBook.title;
        cell2.innerText = aNewBook.author;
        cell3.innerText = aNewBook.pages;
        cell4.innerText = aNewBook.read;
    }
}
buttonClick()
