function firstAndLastKNums(arr) {
    let k = arr[0];
    let forward = arr.slice(0 + 1, k + 1);
    let backward = arr.slice(arr.length - k);
    // let backward = arr.slice(-k);
    /*---------------------------------------------------------*/
    // let k = arr.shift();
    // let forward = [];
    // for (let i = 0; i < k; i++) {
    //     forward.push(arr[i]);
    // }
    // let backward = [];
    // for (let i = arr.length - k; i < arr.length; i++) {
    //     backward.push(arr[i]);
    // }
    /*---------------------------------------------------------*/
    // let k = arr.shift();
    // console.log(arr.slice(0, k).join(' '));
    // console.log(arr.slice(-k).join(' '));
    /*---------------------------------------------------------*/
    console.log(forward.join(' '));
    console.log(backward.join(' '));

}
firstAndLastKNums([2, 7, 8, 9]);