(function(){

	'use strict';

	angular.module('ghpg')
	.controller('postController', postController);


	postController.$inject = ['$scope', '$routeParams', '$window'];


	function postController($scope, $routeParams, $window){
		$scope.disqusConfig = {

		    disqus_shortname: 'codeisdead',
				disqus_title: $routeParams.link,
		    disqus_identifier: $routeParams.link, //might depend on post title
		    disqus_url: '/#!/post/'+ $routeParams.link // have to change to post title's
			};
			$window.MY_SCOPE = $scope;
			// console.log("POST CONTOLLER");
			// console.log($routeParams);
			// console.log("THIS IS THE LINK: "+ $routeParams.link);
			// console.log("POST CONTOLLER END");

	}

})();
