function fromJSONtoHTMLTable(input) {
    const arrOfObj = JSON.parse(input);

    let result = '<table>\n';

    result += '\t<tr>';
    Object.keys(arrOfObj[0]).forEach(n => result += `<th>${escapeHtml(n)}</th>`);
    result += '</tr>\n';

    for (const obj of arrOfObj) {
        result += '\t<tr>';
        Object.values(obj).forEach(e => result += `<td>${escapeHtml(e)}</td>`);
        result += '</tr>\n';
    }

    result += '</table>';

    function escapeHtml(str) {
        // html escape from Underscore.js https://coderwall.com/p/ostduq/escape-html-with-javascript
        // let entityMap = {
        //     '&': '&amp;',
        //     '<': '&lt;',
        //     '>': '&gt;',
        //     '"': '&quot;',
        //     '\'': '&#39;',
        //     '/': '&#x2F;'
        // };
        // return str.toString().replace(/[&<>"'\/]/g, (s) => entityMap[s]);
        return str
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    return result;
}
console.log(fromJSONtoHTMLTable(`[
{"Name":"Pesho",
 "Score":4},
{"Name":"Gosho",
 "Score":5},
{"Name":"Angel",
 "Score":5.50,
 "Grade":10}
]`));