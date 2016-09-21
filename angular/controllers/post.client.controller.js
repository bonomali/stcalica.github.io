(function(){

	'use strict';

	angular.module('ghpg')
	.controller('postController', postController);


	postController.$inject = ['$scope', '$routeParams', '$window'];


	function postController($scope, $routeParams, $window){
		$rootScope.$on('$stateChangeSuccess', function (event) {
		$window.ga('send', 'pageview', $location.path());
		});
	}

})();
