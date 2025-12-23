class Book {

    constructor(title, author, pages, read, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = id;
        this.info = [author, `${pages} pages`];
        if (read) {
            this.info.push("Read.");
        } else {
            this.info.push("Not read yet.");
    }
    }
    
    toggleRead = () => {
        this.read = this.read ? false : true;
        this.info[2] = this.read ? "Read." : "Not read yet.";
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read, crypto.randomUUID()));
}

function displayLibrary() {
    const books = document.querySelector(".books");
    for (const book of myLibrary) {
        let valid = true;
        for (child of books.children) {
            if (child.id === book.id) {
                valid = false;
                break;
            }
        }
        if (valid) {
            displayBook(book);
        }
    }
}

function displayBook (book) {
    const books = document.querySelector(".books");
    const newBook = document.createElement("div");
    newBook.id = book.id;

    const newBookTitle = document.createElement("h2");
    newBookTitle.textContent = book.title;

    const newBookInfo = document.createElement('ul');
    for (const item of book.info) {
        const newListItem = document.createElement("li");
        newListItem.textContent = item;
        newBookInfo.appendChild(newListItem);
    }

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove Book"
    removeButton.addEventListener("click", function() {
        books.removeChild(newBook);
        myLibrary.pop(book);
    });

    const readStatus = document.createElement("button");
    readStatus.textContent = "Have you read this book?";
    readStatus.addEventListener("click", function() {
        book.toggleRead();
        newBook.children[1].children[2].textContent = book.info[2]; 
    });

    books.appendChild(newBook);
    newBook.appendChild(newBookTitle);
    newBook.appendChild(newBookInfo);
    newBook.appendChild(readStatus);
    newBook.appendChild(removeButton);
}

function addNewBook() {
    const newBookInfo = [];
    const newBookDialog = document.querySelector("dialog");
    const newBookForm = document.querySelector("form");
    const newBookButton = document.querySelector(".add-new-book")

    newBookButton.addEventListener("click", function(){
        newBookDialog.showModal();
    });

    newBookForm.addEventListener("submit", (event) => {
        event.preventDefault();
        for (const row of newBookForm.children) {
            for (const child of row.children) {
                if (child.hasAttribute('id')) {
                    if (child.getAttribute('id') !== 'read') {
                        newBookInfo.push(child.value);
                    } else {
                        if (child['read']) {
                            newBookInfo.push(true);
                        } else {
                            newBookInfo.push(false);
                        }
                    }
                }
            }
        }
        addBookToLibrary(newBookInfo[0], newBookInfo[1], newBookInfo[2], newBookInfo[3]);
        newBookDialog.close();
        displayLibrary();
    });

}

const myLibrary =[];

const theHobbit = addBookToLibrary("The Hobbit", "J.R.R. Tolkein", 512, false);
const Bitlop = addBookToLibrary("Bitlop", "J. F. bOOBAH", 123, true);

displayLibrary();
addNewBook();