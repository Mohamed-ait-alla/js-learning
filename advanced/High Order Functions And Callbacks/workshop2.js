/*
 * Workshop: Build a Book Organizer
 */

const books = [
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949
  },
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 1960
  },
  {
    title: "The Hobbit",
    authorName: "J.R.R. Tolkien",
    releaseYear: 1937
  },
  {
    title: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    releaseYear: 1925
  },
  {
    title: "Pride and Prejudice",
    authorName: "Jane Austen",
    releaseYear: 1813
  }
];

function sortByYear(book1, book2) {
  if (book1.releaseYear > book2.releaseYear)
    return 1;
  else if (book1.releaseYear < book2.releaseYear) 
    return -1;
  else
    return 0;
}

let filteredBooks = books.filter((book) => book.releaseYear < 1950);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);
