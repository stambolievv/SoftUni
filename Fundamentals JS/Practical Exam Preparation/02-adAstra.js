function astra(str) {
    const pattern = /(#|\|)(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/g;

    const result = [];
    let total = 0;

    let match = pattern.exec(str);
    while (match !== null) {
        const { name, date, cal } = match.groups;
        total += Number(cal);
        result.push(`Item: ${name}, Best before: ${date}, Nutrition: ${cal}`);

        match = pattern.exec(str);
    }
    console.log(`You have food to last you for: ${Math.trunc(total / 2000)} days!`);
    console.log(result.join('\n'));
}
astra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);