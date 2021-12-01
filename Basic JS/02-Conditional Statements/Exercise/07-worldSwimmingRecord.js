function worldSwimmingRecord(input) {
    let currentRecord = Number(input[0]);
    let length = Number(input[1]);
    let time = Number(input[2]);

    let needed = length * time;
    let bonus = Math.floor(length / 15) * 12.5;
    let total = needed + bonus;

    if (total < currentRecord) {
        console.log(`Yes, he succeeded! The new world record is ${(needed + bonus).toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${(total - currentRecord).toFixed(2)} seconds slower.`);
    }
}
worldSwimmingRecord(['55555.67', '3017', '5.03']);