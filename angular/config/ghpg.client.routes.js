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
			}).when('/post/:title',{
				templateUrl: '/angular/views/post.client.view.html',
				controller: 'postController',
				controllerAs: 'post'
			}).otherwise({
				redirectTo:'/listing'
			});

	}  


})();
