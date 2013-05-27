var expectRequire = require('a_mock').expectRequire;
var emptyStrategy = {};
var table = {};
var primaryColumns = [{},{}];
var primaryColumnCount = 2;
var id1 = {};
var id2 = {};

expectRequire('./emptyStrategy').return(emptyStrategy);

function act(c) {
	table.primaryColumns = primaryColumns;
	c.table = table;
	c.emptyStrategy = emptyStrategy;
	c.id1 = id1;
	c.id2 = id2;
	c.primaryColumnCount =  primaryColumnCount;
	c.sut = require('../negotiateAddStrategy');
}

module.exports = act;