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



function tableMaker() {
    for (let i=0;i++;i<myLibrary.length) {
        let table = document.getElementById("bookTable");
        let row = table.insertRow();
        let cell = row.insertCell();
        let thisBook = myLibrary[i];
        cell.innerHTML = thisBook.info();
    }
}
//tableMaker()

function tableTester() {
    let table = document.getElementById("bookTable");
    let row = table.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell();
    let thisBook = myLibrary[0];
    cell1.innerHTML = thisBook.title;
    cell2.innerHTML = thisBook.author;
    cell3.innerHTML = thisBook.pages;
    cell4.innerHTML = thisBook.read;
}
tableTester();