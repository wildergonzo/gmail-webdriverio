import { credentials } from 'config/config.json';
import LoginPage from 'src/pages/login.page';

const email = process.env.EMAIL || credentials.email;
const password = process.env.PASSWORD || credentials.password;

describe('login', () => {

    it('should sign in successfully', () => {

        LoginPage.open();
        LoginPage.signInAs(email, password);

        LoginPage.getTitle().should.include(email);
    });
});
