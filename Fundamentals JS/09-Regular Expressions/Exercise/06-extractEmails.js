function extractEmails(str) {
    let pattern = /(?:^|(?<=\s))(?:[^\W\_]+[\w\.\-]?[^\W\_]+)@(?:[a-zA-Z]+(?:[\.\-_][A-Za-z]+)+)(?:\b|(?=\s))/g;
    let match = str.match(pattern);
    console.log(match.join('\n'));

    // console.log(str.match(/(?:^|(?<=\s))(?:[^\W\_]+[\w\.\-]?[^\W\_]+)@(?:[a-zA-Z]+(?:[\.\-_][A-Za-z]+)+)(?:\b|(?=\s))/g).join('\n'));
}
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');