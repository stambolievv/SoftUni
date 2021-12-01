const section = document.getElementById('homePage');
section.remove();

section.querySelector('#getStartedLink').addEventListener('click', (e) => {
    e.preventDefault();
    ctx.goTo('catalogLink');
});

let ctx = null;

export function showHome(ctxTarget) {
    ctx = ctxTarget;
    ctx.showSection(section);
}