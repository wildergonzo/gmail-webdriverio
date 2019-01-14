import Page from './base.page';

class LoginPage extends Page {

    get emailTxt() { return $('#identifierId'); }
    get passwordTxt() { return $('input.whsOnd.zHQkBf'); }
    get nextBtn() { return $('span.RveJvd.snByac'); }

    open() {
        super.open('https://www.google.com/gmail/');
    }

    signInAs(email, password) {
        this.emailTxt.waitForDisplayed(3000);
        this.emailTxt.setValue(email);
        this.nextBtn.click();
        super.pause(2000);
        this.passwordTxt.setValue(password);
        this.nextBtn.click();
        //super.waitUntilPageIsLoaded(6000, 'expected gmail to be loaded after 6s');  
        super.pause(6000); // have to replace this.
    }

    getTitle() {
        return super.getTitle();
    }

}

export default new LoginPage();