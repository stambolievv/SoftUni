function myMethods(array) {
    let arr = array;

    function myIncludes(arr, value) {
        for (const iterator of arr) {
            if (iterator === value) {
                return true;
            }
        }
        return false;

        //Examples: --------------------------------------------------------------

        //The includes() returns true if the given value is part of the array

        //let myArray = ["Peter", "George", "Mary"];
        //myArray.includes("George"); // true
        //myArray.includes("John"); // false
    }

    function myIndexOf(arr, value) {
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] === value) {
                return index;
            }
        }
        return -1;

        //Examples: --------------------------------------------------------------

        //The indexOf() returns the index where the given value is stored
        //# Returns -1 if value is not found

        //let myArray = ["Peter", "George", "Mary"];
        //myArray.indexOf("Mary"); // 2
        //myArray.indexOf("Nick"); // -1
    }

    function mySlice(arr, start, end) {
        let copy = [];
        if (start == undefined) {
            start = 0;
        }
        if (end == undefined) {
            end = arr.length;
        }
        for (let i = start; i < end; i++) {
            copy.push(arr[i]);
        }
        return copy;

        //Examples: --------------------------------------------------------------

        //The slice() function creates new array from part of another
        //# Note that the original array will not be modified

        //let myArray = ["one", "two", "three", "four", "five"];
        //let sliced = myArray.slice(2);
        //console.log(myArray);
        ////["one","two","three","four","five"]
        //console.log(sliced); // ["three","four","five"]
        //console.log(myArray.slice(2, 4)); // ["three","four"]
    }

    function mySplice(arr, start, count, elements) {
        let left = arr.slice(0, start);
        let remove = arr.slice(start, start + count);
        let right = arr.slice(start + count);
        arr.length = 0;
        for (const iterator of left) {
            arr.push(iterator);
        }
        if (right != undefined) {
            for (const iterator of elements) {
                arr.push(iterator);
            }
        }
        for (const iterator of right) {
            arr.push(iterator);
        }
        return remove;

        //Examples: --------------------------------------------------------------

        //The splice() function adds/removes items to/from an array, and returns the removed item(s)
        //# This function changes the original array

        //let nums = [5, 10, 15, 20, 25, 30];
        //let mid = nums.splice(2, 3); // start, delete-count
        //console.log(mid.join('|')); // 15|20|25
        //console.log(nums.join('|')); // 5|10|30

        //nums.splice(3, 2, "twenty", "twenty-five");
        //console.log(nums.join('|')); // 5|10|15|twenty|twenty-five|30
    }

    function myMap(arr, operator) {
        let result = [];
        for (const iterator of arr) {
            result.push(operator(iterator));
        }
        return result;

        //Examples: --------------------------------------------------------------

        //The map() function creates new array by applying a function to every element

        //let myArr = ['one', 'two', 'three', 'four'];
        //let lengths = myArr.map(x => x.length);
        //console.log(lengths); // [3,3,5,4]

        //let numsAsStrings = ["5", "3", "14", "-2", "8"]
        //let nums = numsAsStrings.map(Number);
        //console.log(nums); // [5, 3, 14, -2, 8]
        //let incr = nums.map(x => x + 1);
        //console.log(incr); // [6, 4, 15, -1, 9]
    }

    function myFilter(arr, predicate) {
        let result = [];
        for (const iterator of arr) {
            if (predicate(iterator)) {
                result.push(iterator);
            }
        }
        return result;

        //Examples: --------------------------------------------------------------

        //The filter() function creates new array from elements matching predicate
        //# Predicate is a function returning a Boolean value (true or false)

        //let myArr = ['one', 'two', 'three', 'four'];
        //let longWords = myArr.filter(x => x.length > 3);
        //console.log(longWords); // ['three','four']

        //let nums = [5, -11, 3, -2, 8]
        //let positiveNums = nums.filter(x => x > 0);
        //console.log(positiveNums); // [5, 3, 8]
    }

    function sorting(arr) {
        arr.sort((a, b) => a - b);
        let newArr = arr.slice(0, 4);
        // console.log(newArr.join(' '));
        // console.log(arr[0], arr[1]);

        return newArr.join(' ');

        //Examples: --------------------------------------------------------------

        //The sort() function sorts the items of an array
        //# Sorting can be alphabetic or numeric, and either ascending (up) or descending (down)

        //let names = ["Peter", "George", "Mary"];
        //names.sort(); // Default behaviour – alphabetical order
        //console.log(names); // ["George","Mary","Peter"]

        //let numbers = [20, 40, 10, 30, 100, 5];
        //numbers.sort(); // Unexpected result on arrays of numbers!
        //console.log(numbers); // [10,100,20,30,40,5]

        //# If result > 0, b is sorted before a , If result < 0, a is sorted before b , If result = 0, a and b are equal (no change)

        //let nums = [20, 40, 10, 30, 100, 5];
        //nums.sort((a, b) => a - b); // Compare elements as numbers                   <-- Use that
        //console.log(nums.join('|')); // 5|10|20|30|40|100

        //let words = ['nest', 'Eggs', 'bite', 'Grip', 'jAw'];
        //words.sort((a, b) => a.localeCompare(b));                                    <-- Use that
        //// ['bite', 'Eggs', 'Grip', 'jAw', 'nest']

        //let wordsLength = ['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'];
        //wordsLength.sort((a, b) => a.length - b.length);                             <-- Use that
        //// ['Jack', 'Isacc', 'George', 'Theodor', 'Harrison']
    }

    // console.log(myIncludes(arr, 8));
    // console.log(myIncludes(arr, 10));
    // console.log(myIndexOf(arr, -3));
    // let predict = myFilter(arr, x => x > 7);
    // let nums = myMap(arr, x => x + 1);
    // let result = mySplice(arr, 3, 2, []);
    // let newArr = mySlice(arr, 1, 3);
    // let sorted = sorting(arr);
    // console.log(sorted);
    // console.log(predict);
    // console.log(nums);
    // console.log(result);
    // console.log(newArr);

}
myMethods([5, 8, -3, 11, 44, 13, -8]);