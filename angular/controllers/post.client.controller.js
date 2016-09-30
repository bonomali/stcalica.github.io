(function(){

	'use strict';

	angular.module('ghpg')
	.controller('postController', postController);


	postController.$inject = ['$scope', '$rootScope', '$routeParams', '$window', 'blogContent'];


	function postController($scope, $rootScope,  $routeParams, $window, blogContent){
		$rootScope.$on('$stateChangeSuccess', function (event) {
		$window.ga('send', 'pageview', $location.path());
		});
		var vm = this;
		var tagline  = $routeParams.link;
		grabArticle(tagline);
		if(vm.author != "Kyle" || vm.author != "Phillip"){
			console.log("no author");
			//add second line and add both authors 
		}
			

		function grabArticle(tagline){
			return blogContent.getArticle(tagline).then(function(article){
				console.log(article);
				vm.title = article.title;
				vm.date = article.date;
				vm.author = article.author;
					},function(err){
				console.log(err);
				});
		}





		//grab routeParams and then insert the title, date, author
		//from author grab the approiate picture and insert

	}

})();
