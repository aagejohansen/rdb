var rollbackCommand = require('./commands/rollbackCommand');
var executeQuery = require('./executeQueries/executeQuery');
var releaseDbClient = require('./releaseDbClient');
var popChanges = require('./popChanges'); 
var newThrow = require('./newThrow');

function rollback(e) {	
	popChanges();
	var executeQueryPromise =  executeQuery(rollbackCommand).then(releaseDbClient);
	return newThrow(e, executeQueryPromise);

	function reThrow() {
		throw e;
	}
}

module.exports = rollback;