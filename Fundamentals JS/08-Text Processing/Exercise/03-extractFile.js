function extractFile(path) {
    const name = path.split('\\').pop().split('.').slice(0, -1).join('.');
    const extension = path.split('\\').pop().split('.').pop();
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.asd.pptx');