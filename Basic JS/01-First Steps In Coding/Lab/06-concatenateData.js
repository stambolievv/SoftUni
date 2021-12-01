function concatenateData(input) {
    let name = input[0];
    let surname = input[1];
    let year = Number(input[2]);
    let town = input[3];
    console.log('You are ' + name + ' ' + surname + ', a ' + year + '-years old person from ' + town + '.');
}
concatenateData(['John', 'Johnson', '20', 'Sofia']);