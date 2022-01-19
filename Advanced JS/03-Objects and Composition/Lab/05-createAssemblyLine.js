function createAssemblyLine() {
    function hasClima(obj) {
        return Object.assign(obj, {
            temp: 21,
            tempSettings: 21,
            adjustTemp() {
                if (this.temp < this.tempSettings) {
                    this.temp++;
                } else if (this.temp > this.tempSettings) {
                    this.temp--;
                }
            }
        });
    }
    function hasAudio(obj) {
        return Object.assign(obj, {
            currentTrack: { name: null, artist: null },
            nowPlaying() {
                console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
            }
        });
    }
    function hasParktronic(obj) {
        return Object.assign(obj, {
            checkDistance(distance) {
                let result = '';
                if (distance < 0.1) {
                    result = 'Beep! Beep! Beep!';
                } else if (distance >= 0.1 && distance < 0.25) {
                    result = 'Beep! Beep!';
                } else if (distance >= 0.25 && distance < 0.5) {
                    result = 'Beep!';
                }
                console.log(result);
            }
        });
    }
    return { hasClima, hasAudio, hasParktronic };
}
const assemblyLine = createAssemblyLine();
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
console.log(myCar);