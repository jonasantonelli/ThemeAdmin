"use strict";

/*

Directive: Grid

Type: 
    - simple 
    - vertical + (colors): vertical red
    - horizontal + (colors): horizontal blue
    - colors 
    
Colors: red, green, blue, purple
 
*/

angular.module("directives").directive("grid", ['$sce', '$compile','$http', '$templateCache', function($sce, $compile, $http, $templateCache) {	
	return {
		restrict: 'E',
        scope: true,
		link: function($scope, elem, attr) {
			
			var template = directive_template("grid/grid.htm"),
                new_element,                
                height = attr.height || 220;
            
            $scope.scroll = $scope.type = $scope.title = $scope.body = null;
                        
            $scope.scroll = (typeof attr.scroll !== "undefined") ? true : false;            
            $scope.type = (typeof attr.type !== "undefined") ? attr.type : "simple";            
            $scope.title = $sce.trustAsHtml(attr.title);            
			$scope.body = $sce.trustAsHtml(elem.html());
                        
            
			$http({method: 'GET', url: template}).success(function(data) {
                
                if(typeof data !== "undefined")
                {                
                    elem.html($compile(data)($scope));
            
                    var _grid = elem.find(".grid");
                    _grid.grid();
                    
                    //new_element = elem.next();
                    //new_element.grid();

                    //elem.remove();

                    if($scope.scroll)
                    {
                        // setTimeout(function(){
                        //     $(".slimscroll-grid").slimScroll({
                        //          height: height,
                        //          color: '#a1b2bd',
                        //          size: '4px',
                        //          alwaysVisible: false
                        //     });
                        // });
                    }
                }
                
			});
            
            
            
            
         

                    

                
            

            
		}

	}
}]);