
var HttpBackend = require('httpbackend');
var backend;

describe('A test', function() {
    beforeEach(() => {
        backend = new HttpBackend(browser);
    });

    afterEach(function() {
        backend.clear();
    });

    it('should diplay Ben in result', function() {
        backend.whenGET(/exampleResponse/).respond({"name": "Ben"});
        browser.get('http://localhost:8000');
        expect($('#gname').getText()).toBe("Ben");
    });
})
