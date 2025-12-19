function Book(title, author, pages, read, id) {
    if (!new.target) {
        throw Error("You must use the 'new' operator.");
    }
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

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read, crypto.randomUUID));
}

function displayLibrary() {
    const books = document.querySelector(".books");
    for (const book of myLibrary) {
        const newBook = document.createElement("div");
        newBook.classList.add("book");

        const newBookTitle = document.createElement("h2");
        newBookTitle.textContent = book.title;

        const newBookInfo = document.createElement('ul');
        for (const item of book.info) {
            const newListItem = document.createElement("li");
            newListItem.textContent = item;
            newBookInfo.appendChild(newListItem);
        }

        books.appendChild(newBook);
        newBook.appendChild(newBookTitle);
        newBook.appendChild(newBookInfo);

    }
}

function addNewBook() {
    const newBookDialog = document.querySelector("dialog")
    const dialogText = document.querySelector(".dialog");
    const newBookButton = document.querySelector(".add-new-book");
    const nextButton = document.querySelector(".next");
    const newBookInput = document.querySelector("input");

    newBookButton.addEventListener("click", function(){
        newBookDialog.showModal();
    });
    
    nextButton.addEventListener("click", function(){

    });

    const newBookInfo = [];
}

const myLibrary =[];

addBookToLibrary("The Hobbit", "J.R.R. Tolkein", 512, false);
addBookToLibrary("Bitlop", "J. F. bOOBAH", 123, true);

displayLibrary();
addNewBook();