function commandProcessor() {
    let state = '';
    return {
        append,
        removeStart,
        removeEnd,
        print
    };

    function append(txt) {
        return state += txt;
    }
    function removeStart(n) {
        return state = state.slice(n);
    }
    function removeEnd(n) {
        return state = state.slice(0, -n);
    }
    function print() {
        return console.log(state);
    }
}
let firstZeroTest = commandProcessor();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();