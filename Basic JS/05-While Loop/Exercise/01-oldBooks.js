function oldBooks(params) {
    let index = 0;
    let fav = params[index];
    index++;

    let bookFound = false;
    let bookNext = params[index];
    while (bookNext !== 'No More Books') {
        if (bookNext === fav) {
            bookFound = true;
            break;
        }
        index++;
        bookNext = params[index];
    }

    if (bookFound === false) {
        console.log('The book you search is not here!');
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}
oldBooks(['Troy', 'Stronger', 'Life Style', 'Troy']);