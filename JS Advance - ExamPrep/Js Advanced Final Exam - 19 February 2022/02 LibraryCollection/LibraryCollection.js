class LibraryCollection{
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.books = [];
    }

    addBook(bookName, bookAuthor){
        if(this.books.length + 1 > this.capacity){
            throw new Error("Not enough space in the collection.");
        }
        this.books.push({
           bookName: bookName,
           bookAuthor: bookAuthor,
            payed: false
        });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName){
        let currBook = this.books.find(a => a.bookName === bookName);
        if(!currBook){
            throw new Error(`${bookName} is not in the collection.`);
        }
        if(currBook.payed)
        {
            throw new Error(`${bookName} has already been paid.`);
        }
        currBook.payed = true;
        return `${bookName} has been successfully paid.`;


    }

    removeBook(bookName){
        let currBook = this.books.find(a => a.bookName === bookName);
        if(!currBook){
            throw new Error("The book, you're looking for, is not found.");
        }
        if(!currBook.payed){
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
      this.books = this.books.filter(a => a.bookName !== bookName);
        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor){
        if(bookAuthor){
            let currBook = this.books.find(a => a.bookAuthor === bookAuthor);
            if(!currBook){
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
            return `${currBook.bookName} == ${bookAuthor} - ${currBook.payed ? `Has Paid`: `Not Paid`}.`
        }
        let buff = `The book collection has ${this.capacity - this.books.length} empty spots left.`

        for(let book of Object.values(this.books).sort((a,b)=> a.bookName.localeCompare(b.bookName))){

            buff += `\n${book.bookName} == ${book.bookAuthor} - ${book.payed ? `Has Paid`: `Not Paid`}.`
        }

        return buff;


    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
library.addBook('Ulysses2', 'James Joyce2');
library.addBook('Ulysses3', 'James Joyce3');
library.payBook(`Ulysses2`);
library.removeBook(`Ulysses2`);

console.log(library.getStatistics());




