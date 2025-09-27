const getTheTitles = function(books) {
    let titles = [];
    for (let i in books) {
        const book = books[i]
        titles.push(book.title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
