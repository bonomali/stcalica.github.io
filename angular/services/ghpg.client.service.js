(function(){

	'use strict';

	angular.module('ghpg')
	.factory('blogContent', blogContent);


	blogContent.$inject = [ '$http' ];

	function blogContent($http){

		var articles;
		var viewing;

		var factory = {

			getContent : getContent
		};

		return factory;


		////

		function getContent() {
			return $http.get('/content.json').then(function(res){
				articles = res.data;
				return articles;
			}).catch(function(err){
				console.log(err);
			});

		}

		}
})();
