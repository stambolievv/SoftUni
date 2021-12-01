function encodeAndDecodeMessages() {
    document.getElementById('main').addEventListener('click', onClick);
    const text = document.getElementsByTagName('textarea');

    function onClick(e) {
        if (e.target.tagName == 'BUTTON') {
            if (e.target.textContent.includes('Encode')) {
                const message = [...text[0].value].map(l => String.fromCharCode(l.charCodeAt(0) + 1));
                text[0].value = '';
                text[1].value = message.join('');

            } else if (e.target.textContent.includes('Decode')) {
                const message = [...text[1].value].map(l => String.fromCharCode(l.charCodeAt(0) - 1));
                text[1].value = message.join('');
            }
        }
    }
}