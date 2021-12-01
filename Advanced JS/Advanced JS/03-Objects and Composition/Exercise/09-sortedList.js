function sortedList() {
    const arr = [];
    return {
        add(num) {
            arr.push(num);
            arr.sort((a, b) => a - b);
        },
        remove(i) {
            if (i >= 0 && i < arr.length) {
                arr.splice(i, 1);
            }
        },
        get(i) {
            return arr[i];
        },
        get size() {
            return arr.length;
        }
    };
}
let list = sortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);