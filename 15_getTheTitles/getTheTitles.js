

const getTheTitles = function(ln) {
    let books = [];

    for(let i in ln) {
        books.push(ln[i].title);
    }

    return books
};

// const books = [
//   {
//     title: 'Book',
//     author: 'Name'
//   },
//   {
//     title: 'Book2',
//     author: 'Name2'
//   }
// ]

// getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
