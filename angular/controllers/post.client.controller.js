(function(){

	'use strict';

	angular.module('ghpg')
	.controller('postController', postController);


	postController.$inject = ['$scope', '$routeParams'];


	function postController($scope, blogContent, $routeParams){
		console.log("In Post Controller");
		var post = this;
	}

})();
