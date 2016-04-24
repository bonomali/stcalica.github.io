(function(){
	
	'use strict';

	angular.module('ghpg')
	.config(Config); 

	Config.$inject = ['$routeProvider'];

	function Config($routeProvider){

		$routeProvider
			.when('/blog', {
				templateUrl: '/views/listings.client.views.html'
			}).otherwise({
				redirectTo:'/'
			});

	}  


})();
