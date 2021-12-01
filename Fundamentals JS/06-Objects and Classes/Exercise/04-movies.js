function movies(arr = []) {
    let moviesList = [];
    for (const string of arr) {
        if (string.includes('addMovie')) {
            let [_, ...filmName] = string.split(' ');
            let moviesData = {};
            moviesData.name = filmName.join(' ');
            moviesList.push(moviesData);
        } else if (string.includes('directedBy')) {
            let [...all] = string.split(' ');
            let filmName = all.splice(0, all.indexOf('directedBy'));
            let filmDirector = all.splice(all.indexOf('directedBy') + 1);
            for (const obj of moviesList) {
                for (const key of Object.keys(obj)) {
                    filmName.join(' ') == (obj[key]) ? obj.director = filmDirector.join(' ') : null;
                }
            }
        } else if (string.includes('onDate')) {
            let [...all] = string.split(' ');
            let filmName = all.splice(0, all.indexOf('onDate'));
            let filmDate = all.splice(all.indexOf('onDate') + 1);
            for (const obj of moviesList) {
                for (const key of Object.keys(obj)) {
                    filmName.join(' ') == (obj[key]) ? obj.date = filmDate.join(' ') : null;
                }
            }
        }
    }
    moviesList.forEach(element => {
        if (element.name.length > 0 && element.director != undefined && element.date != undefined) {
            console.log(JSON.stringify(element));
        }
    });
}
movies([
    'addMovie fifo',
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen',
]);