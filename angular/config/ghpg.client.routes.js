(function(){
	
	'use strict';

	angular.module('ghpg')
	.config(Config); 

	Config.$inject = ['$routeProvider'];

	function Config($routeProvider){

		$routeProvider
			.when('/listing', {
				templateUrl: '/angular/views/listing.client.view.html'
			}).otherwise({
				redirectTo:'/'
			});

	}  


})();
