function sortedList() {
    class List {
        constructor() {
            this.size = 0;
            this.numbers = [];
        }
        add(number) {
            this.numbers.push(number);
            this.numbers.sort((a, b) => a - b);
            this.size++;
        }
        remove(index) {
            this.outOfBounds(index);
            this.numbers.splice(index, 1);
            this.size--;

        }
        get(index) {
            this.outOfBounds(index);
            return this.numbers[index];
        }
        // get size() {
        //     return this.numbers.length;
        // }
        outOfBounds(index) {
            if (index < 0 || index >= this.numbers.length) {
                throw new Error('Out of Bounds index.');
            }
        }
    }
    let list = new List();
    list.add(5);
    list.add(6);
    list.add(7);
    console.log(list.get(1));
    console.log(list.size);
}
sortedList();