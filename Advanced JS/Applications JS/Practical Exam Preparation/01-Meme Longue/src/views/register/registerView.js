import { html } from '../../lib/lib.js';

export const template = (onSubmit, errors) => html`
    <!-- Register Page ( Only for guest users ) -->
    <section id="register">
        <form @submit=${onSubmit} id="register-form">
            <div class="container">
                <h1>Register</h1>
                <label for="username">Username</label>
                <input id="username" type="text" placeholder="Enter Username" name="username"
                    class=${errors.type?.username ? 'error': '' }>
                <label for="email">Email</label>
                <input id="email" type="text" placeholder="Enter Email" name="email"
                    class=${errors.type?.email ? 'error': '' }>
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password"
                    class=${errors.type?.password ? 'error': '' }>
                <label for="repeatPass">Repeat Password</label>
                <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass"
                    class=${errors.type?.repeatPass ? 'error': '' }>
                <div class="gender">
                    <input type="radio" name="gender" id="female" value="female">
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="male" value="male" checked>
                    <label for="male">Male</label>
                </div>
                <input type="submit" class="registerbtn button" value="Register">
                <div class="container signin">
                    <p>Already have an account?<a href="/users/login">Sign in</a>.</p>
                </div>
            </div>
        </form>
    </section>
`;