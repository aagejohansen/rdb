function act(c) {
	c.expected = 'select _0.oOrderId,_0.oCustomerId,_0_0.cCustomerId,_0_0.cName,_0_0.cCountryId,_0_0_0.yCountryId,_0_0_0.yCountryName from order _0' +
	' JOIN customer _0_0 ON (_0.oCustomerId=_0_0.cCustomerId)' + 
	' JOIN country _0_0_0 ON (_0_0.cCountryId=_0_0_0.yCountryId)';
	c.newQuery();	
}

act.base = '../includeCountry';
module.exports = act;