function animalType(params) {
    let animals = params[0];
    switch (animals) {
        case 'dog': console.log('mammal'); break;
        case 'crocodile':
        case 'tortoise':
        case 'snake': console.log('reptile'); break;
        default: console.log('unknown'); break;
    }
}
animalType(['cat']);