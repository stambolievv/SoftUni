function areaAndVolume(areaFunc, volFunc, inputData) {

    const cubes = JSON.parse(inputData);

    // const result = [];
    // for (const cube of cubes) {
    //     const cubeArea = areaFunc.apply(cube);
    //     const cubeVolume = volFunc.apply(cube);
    //     result.push({ area: cubeArea, volume: cubeVolume });
    // }

    const result = cubes.map(cube => ({
        area: areaFunc.apply(cube),
        volume: volFunc.apply(cube)
    }));

    return result;

    //* return JSON.parse(inputData).map(cube => ({ area: areaFunc.apply(cube), volume: volFunc.apply(cube) }));
}
//? Inputs :
function area() {
    return Math.abs(this.x * this.y);
}
function vol() {
    return Math.abs(this.x * this.y * this.z);
}
const data = `[
    { "x": "1", "y": "2", "z": "10" },
    { "x": "7", "y": "7", "z": "10" },
    { "x": "5", "y": "2", "z": "10" }
]`;
console.log(areaAndVolume(area, vol, data));