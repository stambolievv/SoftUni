function arenaTier(arr) {
    const arena = {};
    for (const line of arr) {
        if (line === 'Ave Cesar') {
            return formatAndPrint(arena);
        } else if (line.includes(' -> ')) {
            addGladiator(line);
        } else if (line.includes(' vs')) {
            duelGladiator(line);
        }
    }

    function formatAndPrint(arena) {
        //sort the arena by the gladiator's total skill points or name
        arena = Object.entries(arena).sort((firstGladiator, secondGladiator) => {
            const totalSkillsFirst = Object.values(firstGladiator[1]).reduce((total, current) => { return total += current; }, 0);
            const totalSkillsSecond = Object.values(secondGladiator[1]).reduce((total, current) => { return total += current; }, 0);
            return (totalSkillsSecond - totalSkillsFirst) || (secondGladiator[0].localeCompare(firstGladiator[0]));
        });
        //for every gladiator, sort their techniques by skill points or name
        arena.forEach(gladiator => {
            const [name, abilities] = gladiator;
            const sortedObject = {};
            //make an array and sort gladiator's techniques
            const sortedArray = Object.entries(abilities).sort((firstPair, secondPair) => {
                return (secondPair[1] - firstPair[1]) || (firstPair[0].localeCompare(secondPair[0]));
            });
            //format the array and add to the new object 
            sortedArray.join(' ').split(' ').forEach(ability => {
                const [technique, skill] = ability.split(',');
                sortedObject[technique] = Number(skill);
            });
            //replace the old object with the new sorted one
            gladiator[1] = sortedObject;
        });
        //print all gladiators left in the arena
        arena.forEach(gladiator => {
            const [name, abilities] = gladiator;
            const totalSkills = Object.values(abilities).reduce((total, current) => { return total += current; }, 0);
            console.log(`${name}: ${totalSkills} skill`);
            Object.entries(abilities).forEach(pair => console.log(`- ${pair[0]} <!> ${pair[1]}`));
        });
    }

    function addGladiator(command) {
        const [gladiator, technique, skill] = command.split(' -> ');
        if (arena.hasOwnProperty(gladiator)) {
            if (arena[gladiator].hasOwnProperty(technique)) {
                if (Number(arena[gladiator][technique]) < Number(skill)) {
                    arena[gladiator][technique] = Number(skill);
                }
            } else {
                Object.assign(arena[gladiator], { [technique]: Number(skill) });
            }
        } else {
            arena[gladiator] = { [technique]: Number(skill) };
        }
    }

    function duelGladiator(command) {
        const [firstGladiator, secondGladiator] = command.split(' vs ');
        if (arena.hasOwnProperty(firstGladiator) && arena.hasOwnProperty(secondGladiator)) {
            battleWin: for (const [firstGladiatorAttack, firstGladiatorPower] of Object.entries(arena[firstGladiator])) {
                for (const [secondGladiatorAttack, secondGladiatorPower] of Object.entries(arena[secondGladiator])) {
                    if (firstGladiatorAttack === secondGladiatorAttack) {
                        if (firstGladiatorPower > secondGladiatorPower) {
                            delete arena[secondGladiator];
                            break battleWin;
                        } else if (firstGladiatorPower < secondGladiatorPower) {
                            delete arena[firstGladiator];
                            break battleWin;
                        }
                    }
                }
            }
        }
    }
}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gladius',
    'Ave Cesar'
]);