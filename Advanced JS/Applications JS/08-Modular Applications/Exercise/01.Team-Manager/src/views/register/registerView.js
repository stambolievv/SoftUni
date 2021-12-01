import { html } from '../../lib/lib.js';

export const template = (onSubmit, errors) => html`
    <section id="register">
        <article class="narrow">
            <header class="pad-med">
                <h1>Register</h1>
            </header>
            <form @submit=${onSubmit} id="register-form" class="main-form pad-large">
                <div class="error">${errors.message}</div>
                <label>E-mail: <input type="email" name="email"></label>
                <label>Username: <input type="text" name="username"></label>
                <label>Password: <input type="password" name="password"></label>
                <label>Repeat: <input type="password" name="repass"></label>
                <input class="action cta" type="submit" value="Create Account">
            </form>
            <footer class="pad-small">Already have an account? <a href="/users/login" class="invert">Sign in here</a>
            </footer>
        </article>
    </section>
`;