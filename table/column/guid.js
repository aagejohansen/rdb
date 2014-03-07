var newEncode = require('./newEncodeCore');
var newDecode = require('./newDecodeCore');

function _new(column) {
	column.encode = newEncode(column);
	column.decode = newDecode(column);
}

module.exports = _new;