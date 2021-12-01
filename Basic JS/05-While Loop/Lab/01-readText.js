function readText(params) {
    let index = 0;
    let command = params[index];
    index++;

    while (command !== 'Stop') {
        console.log(command);
        command = params[index];
        index++;
    }
}
readText(['Alex', 'SoftUni', 'Sofia', 'Bulgaria', 'SomeText', 'Stop', 'AfterStop', 'Europe', 'HelloWorld']);