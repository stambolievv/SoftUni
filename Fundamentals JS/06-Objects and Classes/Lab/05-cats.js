function cats(catsAsArray) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const iterator of catsAsArray) {
        let [name, age] = iterator.split(' ');
        let myCat = new Cat(name, age);
        myCat.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);