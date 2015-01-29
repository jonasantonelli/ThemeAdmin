angular.module('filters').filter('limit', function () {
    return function (word, max) {

        // Default
        max = max || 10;
        var splitWords = word.split(" ");

        if (splitWords.length > 0) {
            var newWords = splitWords.slice(0, max).join(" ");
            return newWords.concat("...");
        }
        return '';
    };      
});