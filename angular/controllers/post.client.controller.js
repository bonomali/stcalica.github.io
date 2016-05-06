(function(){

	'use strict';

	angular.module('ghpg')
	.controller('postController', postController);


	postController.$inject = ['$scope','blogContent', '$routeParams']; 


	function postController($scope, blogContent, $routeParams){
		console.log("In Post Controller");
		var post = this;
		post.title = $routeParams.title;
		grabPost(post.title);

		function grabPost(title){ 
			return blogContent.getPost(title).then(function(data){
				console.log(data);
				post.title = data.title;
				post.date = data.date;
				post.content = data.content; 
			}, function(err){
				console.log(err); 
			}); 
		}


	}
 
})();
