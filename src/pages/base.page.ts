export default class Page {

    open(path) {
        browser.url(path);
    }

    getTitle() {
    	return browser.getTitle();
    }

    pause(ms) {
    	browser.pause(ms);
    }

    waitUntilPageIsLoaded(timeout, timeoutMsg) {
    	browser.waitUntil(() => {
    		const state = browser.execute(function () {
                return document.readyState;
            });
            return state === 'complete';
    	}, timeout, timeoutMsg);
    }

    setValueWhenDisplayed(element, value) {
        try {
            element.waitForDisplayed(5000);
            element.setValue(value);
        } catch(e) {
            return;
        }
    }

    clickWhenDisplayed(element) {
        try {
            element.waitForDisplayed(5000);
            element.click();
        } catch(e) {
            return;
        }
    }

}