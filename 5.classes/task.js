class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = state;
      this.type = type;
    }
  
    fix() {
      if (this.state < 0) {
        return (this.state = 0);
      }
  
      this.state = this.state * 1.5;
  
      if (this.state > 100) {
        return (this.state = 100);
      }
    }
  
    set state(value) {
      if (value < 0) {
        this._state = 0;
      } else if (value > 100) {
        this._state = 100;
      } else {
        this._state = value;
      }
    }
  
    get state() {
      return this._state;
    }
}
  
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
}
  
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
}
  
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
}
  
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
}
  
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
}
  
class Library {
  
    constructor(name) {
      this.name = name;
      this.books = []
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book)
      }
    }
  
    findBookBy(type, value) {
      let book = this.books.find(item => item[type] === value);
      if (book) {
        return book;
      } else {
        return null;
      }
    }
  
    giveBookByName(bookName) {
      let book = this.books.find(item => item.name === bookName);
      if(!book) {
        return null
      } else {
        let bookIndex = this.books.findIndex(item => item.name === bookName)
        this.books.splice(bookIndex, 1)
        return book;
      }
    }
}
  
class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, lesson) {
      const correctMark = mark >= 2 && mark <= 5;
  
      if (!this.marks[lesson] && correctMark) {
        this.marks[lesson] = [];
      }
  
      if (correctMark) {
        this.marks[lesson].push(mark);
      }
    }
  
    getAverageBySubject(sub) {
      if (!this.marks[sub]) {
        return 0;
      }
  
      let sum = this.marks[sub].reduce((acc, sum) => acc + sum, 0);
      return sum / this.marks[sub].length;
    }
  
    getAverage() {
      if (Object.keys(this.marks).length === 0) {
        return 0;
      }
  
      let allSubs = Object.keys(this.marks);
      let allSubsSum = allSubs.reduce((acc, sub) => acc + this.getAverageBySubject(sub), 0)
  
  
      return allSubsSum / allSubs.length;
    }
}
  
  