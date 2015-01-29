angular.module('services', ['ngResource','ngAnimate', 'filters', 'directives'], ['$httpProvider', '$locationProvider', '$provide',
function ($httpProvider, $locationProvider, $provide) {
        
	// Desativa o modo HTML5
    $locationProvider.html5Mode(false);

}]);
