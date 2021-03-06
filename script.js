let myLibrary = [];

class Book {
    constructor(title, author, pages, read)
    {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info() {
        return this.title + " by " + this.author + ", " + this.pages + ", " + this.read
    }
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

//function that pushes the current library to localStorage
function updateStorage() {
    localStorage.setItem('library', JSON.stringify(myLibrary));

    let recoveredLib = localStorage.getItem('library');

    console.log(JSON.parse(recoveredLib));
}

//function to check if localstorage is populated, and if so import the books
function getFromStorage() {
    if(!localStorage.getItem('library')) {
        updateStorage();
    } else {
        myLibrary = JSON.parse(localStorage.getItem('library'));
    }

}
getFromStorage();

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
        //create a "remove book" botton on each row
        let btn = document.createElement("BUTTON");
        btn.setAttribute("index", i);
        btn.innerText = "Remove Book";
        //give the button a DOM method
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
//defines the DOM method executed for the add book button. Pulls up a form
//for the user to fill out
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
//function that defines what happens when new book form is submitted
function formSubmit() {
    let book = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    if (document.getElementById("read").checked == true) {
        readStatus = true;
    } else if (document.getElementById("notRead").checked == true) {
        readStatus = false;
        //false == "" is true apparently, so use some random other characters
    } else if (document.getElementById("read").checked == false && document.getElementById("notRead").checked == false) {
        readStatus = "LOL";
    }
    //rejects input if they leave anything blank
    if (book == "" || author == "" || pages == "" || readStatus == "LOL") {
        alert("Please complete all elements of the form!");
        closeForm();
        return;
    }
    let aNewBook = new Book(book, author, pages, readStatus);
    addBookToLibrary(aNewBook);
    appendBookToTable(aNewBook);
    closeForm();
    updateStorage();
}
//adding the DOM method to the button
let submitButton = document.getElementById("submitButton");
submitButton.onclick = formSubmit;

//removes a book from the library
function removeBook(btn, i) {
    let index = parseInt(btn.getAttribute('index'));
    myLibrary.splice(index, 1);
    let delRow = document.querySelector(`[ind='${i}']`);
    delRow.remove();
    updateStorage();
}

//introducing data persistance using localStorage
//first, test if there is data stored from previous session, and use this

/*if (storage is populated) {
    use that library
    insert function method back into it??
} else {
    start with a blank library
}*/

