// Step 1: Classes

class Book {
  constructor(id, title, author, totalCopies) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.totalCopies = totalCopies;
    this.availableCopies = totalCopies;
  }

  isAvailable() {
    return this.availableCopies > 0;
  }
}

class Reader {
  constructor(id, name, borrowLimit) {
    this.id = id;
    this.name = name;
    this.borrowLimit = borrowLimit;
    this.borrowedBookIds = [];
  }

  canBorrow() {
    return this.borrowedBookIds.length < this.borrowLimit;
  }
}

class Loan {
  constructor(id, bookId, readerId, loanDate) {
    this.id = id;
    this.bookId = bookId;
    this.readerId = readerId;
    this.loanDate = loanDate;
    this.returnDate = null;
    this.status = "ACTIVE";
  }

  returnBook(date) {
    this.returnDate = date;
    this.status = "RETURNED";
  }
}

class Library {
  constructor() {
    this.books = [];
    this.readers = [];
    this.loans = [];
    this.loanCounter = 1;
  }

  addBook(book) {
    this.books.push(book);
  }

  registerReader(reader) {
    this.readers.push(reader);
  }

  borrowBook(readerId, bookId, date) {
    const book = this.books.find(b => b.id === bookId);
    const reader = this.readers.find(r => r.id === readerId);

    if (!book) {
      return `BORROW FAILED: Book ID ${bookId} does not exist`;
    }
    if (!reader) {
      return `BORROW FAILED: Reader ID ${readerId} does not exist`;
    }
    if (!book.isAvailable()) {
      return `BORROW FAILED: ${reader.name} cannot borrow "${book.title}" (no copies available)`;
    }
    if (!reader.canBorrow()) {
      return `BORROW FAILED: ${reader.name} cannot borrow "${book.title}" (limit reached)`;
    }

    book.availableCopies -= 1;
    reader.borrowedBookIds.push(bookId);

    const loan = new Loan(this.loanCounter++, bookId, readerId, date);
    this.loans.push(loan);

    return `BORROW OK: ${reader.name} borrowed "${book.title}"`;
  }

  returnBook(loanId, date) {
    const loan = this.loans.find(l => l.id === loanId);
    if (!loan || loan.status === "RETURNED") {
      return `RETURN FAILED: Invalid loan`;
    }

    const book = this.books.find(b => b.id === loan.bookId);
    const reader = this.readers.find(r => r.id === loan.readerId);

    loan.returnBook(date);
    book.availableCopies += 1;

    reader.borrowedBookIds = reader.borrowedBookIds.filter(id => id !== book.id);

    return `RETURN OK: "${book.title}" returned by ${reader.name}`;
  }

  printChristmasReport() {
    const output = document.getElementById("output");

    const hBooks = document.createElement("h4");
    hBooks.textContent = "CHRISTMAS LIBRARY REPORT";
    output.appendChild(hBooks);

    this.books.forEach(book => {
      const p = document.createElement("p");
      p.textContent = `${book.title}: ${book.availableCopies} / ${book.totalCopies} available`;
      output.appendChild(p);
    });

    const hLoans = document.createElement("h4");
    hLoans.textContent = "ACTIVE LOANS";
    output.appendChild(hLoans);

    this.loans
      .filter(l => l.status === "ACTIVE")
      .forEach(loan => {
        const reader = this.readers.find(r => r.id === loan.readerId);
        const book = this.books.find(b => b.id === loan.bookId);
        const p = document.createElement("p");
        p.textContent = `${reader.name} → ${book.title}`;
        output.appendChild(p);
      });
  }
}

const library = new Library();

library.addBook(new Book(1, "Clean Code", "Robert Martin", 2));
library.addBook(new Book(2, "The Pragmatic Programmer", "Andrew Hunt", 1));
library.addBook(new Book(3, "Refactoring", "Martin Fowler", 1));

library.registerReader(new Reader(1, "Alice", 2));
library.registerReader(new Reader(2, "Bob", 1));

console.log(library.borrowBook(1, 1, "2025-12-21")); // Alice borrows Clean Code
console.log(library.borrowBook(1, 1, "2025-12-21")); // Alice borrows Clean Code again
console.log(library.borrowBook(2, 1, "2025-12-21")); // Bob tries to borrow Clean Code (fails)
console.log(library.returnBook(1, "2025-12-21")); // Alice returns one copy

library.printChristmasReport();
