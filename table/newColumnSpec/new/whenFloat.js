var when = require('a_test').when;
var c = {};

when('./float',c).
	it('sets type').assertEqual(c.expected,c.sut.type).
	it('returns self').assertEqual(c.sut,c.returned);