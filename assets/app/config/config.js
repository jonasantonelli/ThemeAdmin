
angular.module("ThemeApp", ["services", 'ui.router'])

.run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

}])




.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider
		.when('/dashboard', '/')
		.otherwise('/');


	var defaultLayouts = {
		"header": {
			templateUrl: 'layouts/default/header.html',
			controller: 'HeaderController'
		},
		"sidebarLeft": {
			templateUrl: 'layouts/default/sidebar-left.html',
			controller: 'SidebarLeftController'
		},
		"sidebarRight": {
			templateUrl: 'layouts/default/sidebar-right.html',
			controller: 'SidebarRightController'					
		} 
	};


	var states = 
	[
		// - Dashboard
		{
			name: 'dashboard',
			url: '/',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/dashboard.html',
					controller: 'DashboardController'
				}
			}
		},
		// - Email
		{
			name:'email', 
			url: '/email',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/email.html',
					controller: 'EmailController'
				}
			}		
		},
		//-------
		// - Forms
		{
			name:'forms',
			url: '/forms',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/forms/forms-elements.html',
					controller: 'FormsElementsController'
				}
			}
		}, 
		// - Forms Elements
		{
			name:'forms.elements', 
			url:'/elements',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/forms/forms-elements.html',
					controller: 'FormsElementsController'
				}
			}
		},
		// - Forms Validations
		{
			name:'forms.validations',
			url:'/validations',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/forms/forms-validations.html',
					controller: 'FormsValidationsController'
				},
				
			}
		//-------
		},
		// - Ui Elements
		{
			name:'ui',
			url: '/ui',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/ui/ui-typography.html',
					controller: 'UiTypographyController'
				}
			}
		}, 
		// - Ui Typography
		{
			name:'ui.typography',
			url: '/ui.typography',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/ui/ui-typography.html',
					controller: 'UiTypographyController'
				}
			}
		}, 
		// - Ui Messages
		{
			name:'ui.messages',
			url: '/ui.messages',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/ui/ui-messages.html',
					controller: 'UiMessagesController'
				}
			}
		}, 
		// - Ui Notifications
		{
			name:'ui.notifications',
			url: '/ui.notifications',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/ui/ui-notifications.html',
					controller: 'UiNotificationsController'
				}
			}
		}, 
		// - Ui Icons
		{
			name:'ui.icons',
			url: '/ui.icons',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/ui/ui-icons.html',
					controller: 'UiIconsController'
				}
			}
		}, 
		// - Ui Buttons
		{
			name:'ui.buttons',
			url: '/ui.buttons',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/ui/ui-buttons.html',
					controller: 'UiButtonsController'
				}
			}
		}, 
		// - Ui Tabs & Accordions
		{
			name:'ui.tabs',
			url: '/ui.tabs',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/ui/ui-tabs.html',
					controller: 'UiTabsController'
				}
			}
		}, 
		// - Ui Sliders
		{
			name:'ui.sliders',
			url: '/ui.sliders',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/ui/ui-sliders.html',
					controller: 'UiSlidersController'
				}
			}
		}, 
		// - Ui Group List
		{
			name:'ui.group',
			url: '/ui.group',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/ui/ui-group.html',
					controller: 'UiGroupController'
				}
			}
		}, 
		//--------
		// - Panel
		{
			name:'panel',
			url: '/panel',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/panel/panel-simple.html',
					controller: 'PanelSimpleController'
				}
			}
		}, 
		// - Panel Simple
		{
			name:'panel.simple',
			url: '/panel.simple',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/panel/panel-simple.html',
					controller: 'PanelSimpleController'
				}
			}
		}, 
		// - Panel Draggable
		{
			name:'panel.draggable',
			url: '/panel.draggable',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/panel/panel-draggable.html',
					controller: 'PanelDraggableController'
				}
			}
		}, 
		//--------
		// - Tables
		{
			name:'tables',
			url: '/tables',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/tables/tables-basic.html',
					controller: 'TablesBasicController'
				}
			}
		},
		// - Tables Basic
		{
			name:'tables.basic',
			url: '/tables.basic',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/tables/tables-basic.html',
					controller: 'TablesBasicController'
				}
			}
		},  
		// - Tables Datatables
		{
			name:'tables.datatables',
			url: '/tables.datatables',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/tables/tables-datatables.html',
					controller: 'TablesDatatablesController'
				}
			}
		}, 
		//-------
		// - Maps
		{
			name:'maps',
			url: '/maps',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/maps/maps-google.html',
					controller: 'MapsGoogleController'
				}
			}
		}, 
		// - Maps Google
		{
			name:'maps.google',
			url: '/maps.google',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/maps/maps-google.html',
					controller: 'MapsGoogleController'
				}
			}
		}, 
		// - Maps Vector
		{
			name:'maps.vector',
			url: '/maps.vector',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/maps/maps-vector.html',
					controller: 'MapsVectorController'
				}
			}
		}, 
		//-------
		// - Charts
		{
			name:'charts',
			url: '/charts',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/charts.html',
					controller: 'ChartsController'
				}
			}
		}, 
		//-------
		// - Extra
		{
			name:'extra',
			url: '/extra',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/extra/extra-blank.html',
					controller: 'ExtraBlankController'
				}
			}
		}, 
		// - Extra Blank
		{
			name:'extra.blank',
			url: '/extra.blank',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/extra/extra-blank.html',
					controller: 'ExtraBlankController'
				}
			}
		}, 
		// - Extra Look
		{
			name:'extra.look',
			url: '/extra.look',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/extra/extra-look.html',
					controller: 'ExtraLookController'
				}
			}
		}, 
		// - Extra Profile
		{
			name:'extra.profile',
			url: '/extra.profile',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/extra/extra-profile.html',
					controller: 'ExtraProfileController'
				}
			}
		}, 
		// - Extra Invoice
		{
			name:'extra.invoice',
			url: '/extra.invoice',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/extra/extra-invoice.html',
					controller: 'ExtraInvoiceController'
				}
			}
		}, 
		// - Extra Pricing
		{
			name:'extra.pricing',
			url: '/extra.pricing',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/extra/extra-pricing.html',
					controller: 'ExtraPricingController'
				}
			}
		}, 
		// - Extra Timeline
		{
			name:'extra.timeline',
			url: '/extra.timeline',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/extra/extra-timeline.html',
					controller: 'ExtraTimelineController'
				}
			}
		}, 
		// - Extra Media Gallery
		{
			name:'extra.media',
			url: '/extra.media',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/extra/extra-media.html',
					controller: 'ExtraMediaController'
				}
			}
		}, 
		// - Extra 404 Error
		{
			name:'extra.404',
			url: '/extra.404',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/extra/extra-404.html',
					controller: 'Extra404Controller'
				}
			}
		}, 
		// - Extra 500 Error
		{
			name:'extra.500',
			url: '/extra.5000',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/extra/extra-500.html',
					controller: 'Extra500Controller'
				}
			}
		}, 
		// - Extra Registration
		{
			name:'extra.registration',
			url: '/extra.registration',
			layout: "default",
			views: {
				"content": {
					templateUrl: 'partials/extra/extra-registration.html',
					controller: 'ExtraRegistrationController'
				}
			}
		}, 

	];

	angular.forEach(states, function(value)
	{		
		if(value.layout === "default"){
			$.extend(value.views, defaultLayouts );
		}
		$stateProvider.state(value);
	});



}]);

