function act(c) {
	c.parentRow = {};
	c.parentRow.expand = c.mock();
	c.alias = {};
	c.joinRelation.leftAlias = c.alias;
	c.parentRow.expand.expect(c.alias);
	c.sut.expand(c.parentRow);
} 

module.exports = act;