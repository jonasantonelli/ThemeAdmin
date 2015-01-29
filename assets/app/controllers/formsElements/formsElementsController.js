//Forms Elements Controller
angular.module("ThemeApp").controller('FormsElementsController', ['$scope', '$timeout', function($scope, $timeout){


	

	$timeout(function(){
		$("#datepicker").datepicker();
	});

}]);
