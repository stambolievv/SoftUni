import { html } from '../../lib/lib.js';

export const template = (onSubmit, errors) => html`
    <!-- Login Page ( Only for guest users ) -->
    <section id="login">
        <form @submit=${onSubmit} id="login-form">
            <div class="container">
                <h1>Login</h1>
                <label for="email">Email</label>
                <input id="email" placeholder="Enter Email" name="email" type="text" 
                    class=${errors.type?.email ? 'error': '' }>
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password"
                    class=${errors.type?.password ? 'error': '' }>
                <input type="submit" class="registerbtn button" value="Login">
                <div class="container signin">
                    <p>Dont have an account?<a href="/users/register">Sign up</a>.</p>
                </div>
            </div>
        </form>
    </section>
`;