function colorize() {
    const rows = document.getElementsByTagName('tr');
    for (let i = 1; i < rows.length; i += 2) {
        rows[i].style.backgroundColor = 'teal';
    }
}