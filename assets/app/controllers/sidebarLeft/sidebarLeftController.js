
	// Sidebar Left Controller
	angular.module("ThemeApp").controller("SidebarLeftController", ['$scope', function($scope){



		// ----- Functions Utils ------

		var closeMenu = function (menu, submenu) {
	        $(submenu).slideUp(200);
	        $(menu).removeClass('open');
	    };

	    var openMenu = function (menu, submenu) {
	        $(submenu).slideDown(200);
	        $(menu).addClass('open');
	    };


	    // Collapse Menu
        $(".collapse-menu").on('click', function () {

            var menu = this;

            if($(menu).hasClass('open') === false) {

	            var submenu = $(menu).find('.collapse-submenu');
	            var open;
	          
	            $(".nav").find(".collapse-menu").each(function () {
	                
	                if ($(this).hasClass('open')) 
	                {
	                    open = this;
	                    var submenu = $(this).find('.collapse-submenu');
	                    closeMenu(this, submenu);
	                }
	            });

	            if (menu !== open) 
	            {
	                openMenu(menu, submenu); 
	            } 
	        }

        });


	     // SlimScroll
	    var slimscrollExecute = function () {

	        var eleHeight = window.screen.height;

	        eleHeight = eleHeight - (eleHeight * 20.5 / 100);

	        if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))  ) {

	            // $(".slimscroll").slimScroll({
	            //     height: eleHeight,
	            //     color: '#a1b2bd',
	            //     size: '4px',
	            //     alwaysVisible: false
	            // });

	        }
	    }();
			

	}]);
