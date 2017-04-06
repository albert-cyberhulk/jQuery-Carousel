describe('Protractor cccarousel', function() {
    beforeEach(function() {
        browser.ignoreSynchronization = true;
        browser.waitForAngular();
        browser.get('http://localhost:9000');
    });
    it('count', function() {
        var todoList = element.all(by.css('.slider'));
        expect(todoList.count()).toEqual(1);
    });
});