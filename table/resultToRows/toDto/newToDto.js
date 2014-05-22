var mapFields = require('./mapFields');
var newSingleRelatedToDto = require('./newSingleRelatedToDto');
var newManyRelatedToDto = require('./newManyRelatedToDto');
var all = require('../../promise').all;
var extractDto = require('./newToDto/extractDto');
var resultToPromise = require('../../resultToPromise');

function newToDto(strategy, table, dto) {
    dto = extractDto.apply(null, arguments);

    function toDto(row) {
        if (!row) {
            return resultToPromise(null);
        }

        var relations = table._relations;
        mapFields(strategy, table, row, dto);
        
        var promises = [];
        for (var relationName in strategy) {            
            var relation = relations[relationName];             
            var visitor = {};
            visitor.visitJoin = function() {
                var relatedToDto = newSingleRelatedToDto(relationName, relation, strategy, dto);
                var promise = row[relationName].then(relatedToDto);
                promises.push(promise);
            };

            visitor.visitMany = function() {
                var relatedToDto = newManyRelatedToDto(relationName, relation, strategy, dto);
                var promise = row[relationName].then(relatedToDto);
                promises.push(promise);
            };

            visitor.visitOne = visitor.visitJoin;
            
            relation.accept(visitor);
            
        }
        return all(promises).then(function() {return dto;});
    }

    return toDto;
};

module.exports = newToDto;