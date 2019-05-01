export default class Page {

    public open(path) {
        browser.url(path);
    }

    public getTitle() {
        return browser.getTitle();
    }

    public pause(ms) {
        browser.pause(ms);
    }

    public waitUntilPageIsLoaded(timeout, timeoutMsg) {
        browser.waitUntil(() => {
            const state = browser.execute(() => {
                return document.readyState;
            });
            return state === 'complete';
        }, timeout, timeoutMsg);
    }

    public setValueWhenDisplayed(element, value) {
        try {
            element.waitForDisplayed(5000);
            element.setValue(value);
        } catch(e) {
            return;
        }
    }

    public clickWhenDisplayed(element) {
        try {
            element.waitForDisplayed(5000);
            element.click();
        } catch(e) {
            return;
        }
    }

}
