var when = require('a_test').when;
var c  = {};

when("./get",c)
	.it('returns row').assertEqual(c.row,c.returned);