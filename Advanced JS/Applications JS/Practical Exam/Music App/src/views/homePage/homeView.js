import { html } from '../../lib/lib.js';

export const template = () => html`
    <!--Home Page-->
    <section id="welcomePage">
        <div id="welcome-message">
            <h1>Welcome to</h1>
            <h1>My Music Application!</h1>
        </div>
    
        <div class="music-img">
            <img src="/images/musicIcons.webp">
        </div>
    </section>
`;