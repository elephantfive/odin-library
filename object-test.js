function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator.");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID;
    this.info = function () {
        return this.read ? `${this.title} by ${this.author}, ${this.pages}, read.`
        :`${this.title} by ${this.author}, ${this.pages}, not read yet.`;
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

const myLibrary =[];