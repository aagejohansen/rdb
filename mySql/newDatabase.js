var createDomain = require('../createDomain');
var newTransaction = require('./newTransaction');
var newPromise = require('../table/promise');
var begin = require('../table/begin');
var newPool = require('./newPool');
var commit = require('../table/commit');
var rollback = require('../table/rollback');
var lock = require('../lock');

function newDatabase(connectionString, poolOptions) {
    var c = {};
    var pool = newPool(connectionString, poolOptions);

    c.transaction = function() {
        var domain = createDomain();
        return domain.run(onRun);

        function onRun() {
            var transaction = newTransaction(domain, pool);
            return newPromise(transaction).then(begin);
        }
    };

    c.commit = commit;
    c.rollback = rollback;
    c.lock = lock;
    
    c.end = function() {
        return pool.end();
    };

    c.accept = function(caller) {
        caller.visitMySql();
    };

    return c;
}

module.exports = newDatabase;