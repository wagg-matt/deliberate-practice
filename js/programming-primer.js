var favouriteBooks = [];

function addFavouriteBook(bookName) {
  if (!bookName.includes("Great")) {
    favouriteBooks.push(bookName);
  }
};

function printFavouriteBooks() {
  console.log(`Favourite books: ${favouriteBooks.length}`);
  
  for(let book of favouriteBooks) {
    console.log(book);
  }
};

addFavouriteBook("A Song of Ice and Fire");
addFavouriteBook("The Great Gatsby");
addFavouriteBook("Crime & Punishment");
addFavouriteBook("Great Expectations");
addFavouriteBook("You Don't Know JS");

console.log(favouriteBooks);

printFavouriteBooks();
