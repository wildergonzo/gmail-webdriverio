export default class Page {
    constructor() {
        this.title = 'Gmail';
    }

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
            return state.value === 'complete';
    	}, timeout, timeoutMsg);
    }
}