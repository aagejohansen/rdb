var requireMock = require('a').requireMock;

function act(c) {
	var blob = requireMock('./column/blob');
	blob.expect(c.column);
	c.blob = blob;
	c.returned = c.sut.blob();
}

act.base = '../new';
module.exports = act;