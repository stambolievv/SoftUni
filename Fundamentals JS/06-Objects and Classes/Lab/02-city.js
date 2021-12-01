function city(city) {
    console.log(`name -> ${city.name}`);
    console.log(`area -> ${city.area}`);
    console.log(`population -> ${city.population}`);
    console.log(`country -> ${city.country}`);
    console.log(`postCode -> ${city.postCode}`);

    // for (const iterator of Object.keys(city)) {
    //     console.log(iterator, '->', city[iterator]);
    // }
}
city({
    name: 'Sofia',
    area: 492,
    population: 1238438,
    country: 'Bulgaria',
    postCode: 1000
});