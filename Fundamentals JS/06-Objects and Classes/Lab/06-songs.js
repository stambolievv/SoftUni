function songs(arr) {
    class Song {
        constructor(typeList, songName, timeOfSong) {
            this.typeList = typeList;
            this.name = songName;
            this.time = timeOfSong;
        }
    }

    let numberOfSongs = arr.shift();
    let commandType = arr.pop();

    let listOfSongs = [];

    for (const iterator of arr) {
        let [type, name, time] = iterator.split('_');
        let currentSong = new Song(type, name, time);
        listOfSongs.push(currentSong);

        if (commandType === 'all') {
            listOfSongs.forEach((s) => {
                console.log(s.name);
            });
        } else {
            let filtered = listOfSongs.filter((i) => i.typeList === commandType);
            filtered.forEach((s) => {
                console.log(s.name);
            });
        }
    }
}
songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite']);
songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater']);
songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);