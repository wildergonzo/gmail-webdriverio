import Page from './base.page';

class LoginPage extends Page {

    get gmailUrl() { return 'https://www.google.com/gmail/' }
    get emailTxt() { return $('#identifierId'); }
    get nextBtn() { return $('#identifierNext'); }
    get passwordTxt() { return $('[name="password"]'); }
    get passNextBtn() { return $('#passwordNext'); }


    open() {
        super.open(this.gmailUrl);
    }

    signInAs(email, password) {
        super.setValueWhenDisplayed(this.emailTxt, email);
        super.clickWhenDisplayed(this.nextBtn);
        super.setValueWhenDisplayed(this.passwordTxt, password);
        super.clickWhenDisplayed(this.passNextBtn);
        super.pause(3000);
    }

    getTitle() {
        return super.getTitle();
    }

}

export default new LoginPage();