import { html } from '../../lib/lib.js';

export const template = (onSubmit, errors) => html`
    <!--Registration-->
    <section id="registerPage">
        <form @submit=${onSubmit}>
            <fieldset>
                <legend>Register</legend>
    
                <label for="email" class="vhide">Email</label>
                <input id="email" class="email" name="email" type="text" placeholder="Email"
                    class=${errors.type?.email ? 'error' : '' }>
    
                <label for="password" class="vhide">Password</label>
                <input id="password" class="password" name="password" type="password" placeholder="Password"
                    class=${errors.type?.password ? 'error' : '' }>
    
                <label for="conf-pass" class="vhide">Confirm Password:</label>
                <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password"
                    class=${errors.type?.['conf-pass'] ? 'error' : '' }>
    
                <button type="submit" class="register">Register</button>
    
                <p class="field">
                    <span>If you already have profile click <a href="/users/login">here</a></span>
                </p>
            </fieldset>
        </form>
    </section>
`;