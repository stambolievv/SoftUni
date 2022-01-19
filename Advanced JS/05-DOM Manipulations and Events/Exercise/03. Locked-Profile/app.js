function lockedProfile() {
    // const bnts = Array.from(document.getElementsByTagName('button'));
    // for (const btn of bnts) {
    //     btn.addEventListener('click', onToggle);
    // }
    //*Syntactic Sugar
    // Array
    //     .from(document.getElementsByTagName('button'))
    //     .forEach(btn => btn.addEventListener('click', onToggle));
    //*best solution
    document.getElementById('main').addEventListener('click', onToggle);

    function onToggle(e) {
        const button = e.target;
        //*for the best solution we need to check on what we are clicking on
        if (button.tagName == 'BUTTON') {
            const profile = button.parentElement;
            const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
            if (isActive) {
                // const info = profile.getElementsByTagName('div')[0];
                //*Syntactic Sugar - better solution
                const info = Array
                    .from(profile.getElementsByTagName('div'))
                    .find(d => d.id.includes('HiddenFields'));

                button.textContent = button.textContent == 'Show more' ? 'Hide it' : 'Show more';
                info.style.display = info.style.display == 'block' ? '' : 'block';
            }
        }
    }
}