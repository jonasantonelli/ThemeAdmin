angular.module('filters', []);

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

angular.module('filters').filter('moment', function () {
    return function (value, formato) {
        if (value)
        {
            return moment(value).format(formato || 'DD/MM/YYYY');
        }
        else
        {
            return '';
        }
    };
});

angular.module('filters').filter('fromNow', function () {
    return function (value) {
        if (value)
        {
            return moment(value).fromNow();
        }
        else
        {
            return '';
        }
    };
});

angular.module('directives', []);


angular.module('services', ['ngResource','ngAnimate', 'filters', 'directives'], ['$httpProvider', '$locationProvider', '$provide',
function ($httpProvider, $locationProvider, $provide) {
        
	// Desativa o modo HTML5
    $locationProvider.html5Mode(false);

}]);
