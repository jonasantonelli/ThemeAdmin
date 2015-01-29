//Sidebar Header
angular.module("ThemeApp").controller("HeaderController", ['$scope', function($scope){
		
    var elemAction = $(".collapse-sidebar"),
        body = $("body"),
        menuFloat = $(".menu-sidebar-float");


        $(elemAction).on('click', function () 
        {
            if(body.hasClass('collapsed-sidebar')){
            	body.removeClass('collapsed-sidebar');            	
        		menuFloat.removeClass("open") 
            }else{
        		body.addClass('collapsed-sidebar');
        	}          
            
        });

        $(elemAction).on("mouseover", function(){
    		body.hasClass("collapsed-sidebar")
    			? menuFloat.addClass("open")
    			: false;
        });

        $(menuFloat).on("mouseleave", function(){
        	body.hasClass("collapsed-sidebar")
        		? menuFloat.removeClass("open")
        		: false;
        });

 		
       
}]);