(function(){

	'use strict';

	angular.module('ghpg')
	.factory('blogContent', blogContent);


	blogContent.$inject = [ '$http' ];

	function blogContent($http){

		var articles;
		var viewing;

		var factory = {
			getContent:getContent,
			getArticle:getArticle
		};

		////

		function getContent() {
			return $http.get('/content.json').then(function(res){
				articles = res.data;
				return articles;
			}).catch(function(err){
				console.log(err);
			});

		}

		function getArticle(title) {
			return $http.get('/content.json').then(function(res){
			 var data = res.data.articles;
			for(var i = 0; i < data.length; i++ ){
						if(title == data[i].link){
							//console.log(data[i]);
							return data[i];
						}
				}
				return null;

			}).catch(function(err){
				console.log(err);
			});

		}

		return factory;

		}

})();
