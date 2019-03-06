import Page from './base.page';

class LoginPage extends Page {

    get gmailUrl() { return 'https://www.google.com/gmail/' }
    get emailTxt() { return $('#identifierId'); }
    get passwordTxt() { return $('input.whsOnd.zHQkBf'); }
    get nextBtn() { return $('span.RveJvd.snByac'); }

    open() {
        super.open(this.gmailUrl);
    }

    signInAs(email, password) {
        this.emailTxt.waitForDisplayed(3000);
        this.emailTxt.setValue(email);
        this.nextBtn.click();
        super.pause(2000);
        this.passwordTxt.setValue(password);
        this.nextBtn.click();
        super.pause(5000);
    }

    getTitle() {
        return super.getTitle();
    }

}

export default new LoginPage();