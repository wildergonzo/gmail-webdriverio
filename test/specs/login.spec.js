import { expect } from 'chai';
import LoginPage from '../../src/pages/login.page';

describe('login', () => {
    it('should sign in successfully', () => {
        const email = process.env.EMAIL;
        const password = process.env.PASSWORD;

        LoginPage.open();
        LoginPage.signInAs(email, password);

        expect(LoginPage.getTitle()).to.include(email);
    });
});