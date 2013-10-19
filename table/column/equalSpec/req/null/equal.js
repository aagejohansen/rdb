var encoded = {};
var arg = 5;
var sql = 'null';
var firstPart = '_2.columnName is ';
var optionalAlias = {};
var alias = '_2';

function act(c) {	
	var mock = c.mock;
	c.expected = {};
	c.extractAlias.expect(optionalAlias).return(alias);
	encoded.sql = mock();
	encoded.sql.expect().return(sql);
	encoded.prepend = mock();
	encoded.prepend.expect(firstPart).return(c.expected);
	c.column.purifyThenEncode = mock();
	c.column.purifyThenEncode.expect(arg).return(encoded);	
	c.returned = c.sut(c.column,arg,optionalAlias);
}

act.base = '../../req';
module.exports = act;