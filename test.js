var assert = require("assert");
var request = require("supertest");

request = request("http://foundersandcoders.org/");

// Example of a Basic test using just Mocha.
describe("The number one", function() {

	it("should equal 1", function() {
	    assert.equal(1, 1);
	});

	it("should not equal 2", function() {
	    assert.notEqual(1, 2);
	});
});

// Example of a Basic test using Mocha and Supertest.
describe("When a user goes to the home page", function() {

	it("should return status code 200 OK", function(done) {
	    request.get("/")
	        .expect(200, done);
	});

	it("should contain the text 'only free coding academy'", function(done) {
	    request.get("/")
	        .expect(/only free coding academy/, done);
	});
});