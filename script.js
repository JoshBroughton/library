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

let theHobbit = new Book("The Hobbit", "JRR Tolkien", "295", "read")
let endersGame = new Book("Ender's Game", "Orson Scott Card", "324", "read")
let bloodMeridian = new Book("Blood Meridian", "Cormac McCarthy", "337", "not read")

addBookToLibrary(theHobbit)
addBookToLibrary(endersGame)
addBookToLibrary(bloodMeridian)

let table = document.getElementById("bookTable");

for (let i=0;i++;i<myLibrary.length) {
    let row = table.insertRow(-1);
    let cell = row.insertCell(0);
    cell.innerHTML = myLibrary[i].info;
}