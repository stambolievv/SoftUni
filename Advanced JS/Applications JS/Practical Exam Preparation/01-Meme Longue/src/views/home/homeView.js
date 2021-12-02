import { html } from '../../lib/lib.js';

export const template = () => html`
    <!-- Welcome Page ( Only for guest users ) -->
    <section id="welcome">
        <div id="welcome-container">
            <h1>Welcome To Meme Lounge</h1>
            <img src="/images/welcome-meme.jpg" alt="meme">
            <h2>Login to see our memes right away!</h2>
            <div id="button-div">
                <a href="/users/login" class="button">Login</a>
                <a href="/users/register" class="button">Register</a>
            </div>
        </div>
    </section>
`;