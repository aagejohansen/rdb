var a = require('a');
var mock = a.mock;
var requireMock = a.requireMock;

function act(c){
	c.mock = mock;	
	
	c.sut = require('../newCacheCore')();
}

module.exports = act;