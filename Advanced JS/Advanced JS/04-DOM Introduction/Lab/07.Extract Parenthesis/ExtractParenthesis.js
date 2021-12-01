function extract(content) {
    const text = document.getElementById(content).textContent;
    const pattern = /\((.+?)\)/g;
    const result = text.match(pattern);
    return result.map(word => word.slice(1, -1)).join('; ');
}