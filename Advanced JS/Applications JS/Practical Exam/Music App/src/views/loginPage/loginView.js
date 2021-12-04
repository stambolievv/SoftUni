import { html } from '../../lib/lib.js';

export const template = (onSubmit, errors) => html`
    <!--Login-->
    <section id="loginPage">
        <form @submit=${onSubmit}>
            <fieldset>
                <legend>Login</legend>
    
                <label for="email" class="vhide">Email</label>
                <input id="email" class="email" name="email" type="text" placeholder="Email"
                    class=${errors.type?.email ? 'error' : '' }>
                <label for="password" class="vhide">Password</label>
                <input id="password" class="password" name="password" type="password" placeholder="Password"
                    class=${errors.type?.password ? 'error' : '' }>
                <button type="submit" class="login">Login</button>
    
                <p class="field">
                    <span>If you don't have profile click <a href="/users/register">here</a></span>
                </p>
            </fieldset>
        </form>
    </section>
    `;