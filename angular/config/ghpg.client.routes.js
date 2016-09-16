(function(){

	'use strict';

	angular.module('ghpg')
	.config(Config);

	Config.$inject = ['$routeProvider'];

	function Config($routeProvider){

		$routeProvider.when('/',{
			templateUrl: '/angular/views/index.client.view.html',
		}).when('/faq',{
				templateUrl: '/angular/views/faq.client.view.html',
				}).when('/listing', {
				templateUrl: '/angular/views/listing.client.view.html'
			}).when('/error',{
				templateUrl: '/angular/views/error.client.view.html',
				controller: 'postController',
				controllerAs: 'post'
			}).when('/post/:link',{
				templateUrl: function($stateParams){
								return "/angular/views/articles/"+ $stateParams.link + ".client.view.html";
				},
				controller: 'postController',
				controllerAs: 'post'
			}).otherwise({
				redirectTo:'/error'
			});

	}


})();
