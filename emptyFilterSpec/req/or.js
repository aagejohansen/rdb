function act(c){
	c.filter = {};
	c.filter2 = {};
	c.initialFilter = {};
	c.initialFilter2 = {};
	c.expected = {};

	c.negotiateRawSqlFilter.expect(c.initialFilter).return(c.filter);

	c.filter.or = c.mock();
	c.filter.or.expect(c.initialFilter2).return(c.expected);

	c.returned = c.sut.or(c.initialFilter, c.initialFilter2);
}

module.exports = act;