function stringLength(str1, str2, str3) {
    const totalLength = str1.length + str2.length + str3.length;
    const average = Math.floor(totalLength / 3);
    console.log(totalLength + '\n' + average);
}
stringLength('chocolate', 'ice cream', 'cake');