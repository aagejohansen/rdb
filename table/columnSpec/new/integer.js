var requireMock = require('a').requireMock;

function act(c) {
	var add = requireMock('./column/integer');
	add.expect(c.column);
	c.integer = add;
	c.returned = c.sut.integer();
}

act.base = '../new';
module.exports = act;