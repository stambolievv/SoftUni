function cutAndReverse(str) {
    const firstHalf = str.slice(0, str.length / 2).split('').reverse().join('');
    const secondHalf = str.slice(str.length / 2).split('').reverse().join('');
    console.log(firstHalf);
    console.log(secondHalf);
  }
  cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');