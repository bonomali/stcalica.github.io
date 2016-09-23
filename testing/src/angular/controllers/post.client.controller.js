(function(){

	'use strict';

	angular.module('ghpg')
	.controller('postController', postController);


	postController.$inject = ['$scope', '$rootScope', '$routeParams', '$window'];


	function postController($scope, $rootScope,  $routeParams, $window){
		$rootScope.$on('$stateChangeSuccess', function (event) {
		$window.ga('send', 'pageview', $location.path());
		});

		//grab routeParams and then insert the title, date, author
		//from author grab the approiate picture and insert 

	}

})();
