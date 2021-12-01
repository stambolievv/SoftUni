function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let roomCount = 1;
    let room = arr[0].split('|');
    for (let i = 0; i < room.length; i++) {
        let contain = room[i].split(' ');
        let itemOrMonster = contain[0];
        let number = Number(contain[1]);

        if (itemOrMonster === 'potion') {
            if (health + number > 100) {
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            } else {
                console.log(`You healed for ${number} hp.`);
                health += number;
            }
            console.log(`Current health: ${health} hp.`);
            roomCount++;
        } else if (itemOrMonster === 'chest') {
            console.log(`You found ${number} coins.`);
            coins += number;
            roomCount++;
        } else {
            health -= number;
            if (health > 0) {
                console.log(`You slayed ${itemOrMonster}.`);
                roomCount++;
            } else {
                console.log(`You died! Killed by ${itemOrMonster}.`);
                console.log(`Best room: ${roomCount}`);
                return;
            }
        }
    }
    console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
}
dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);
dungeonestDark(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110']);