function editElement(element, match, replace) {
    const text = element.textContent.split(match).join(replace);
    return element.textContent = text;
}